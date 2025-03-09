import { FC, useEffect } from 'react';
import { MessagesMap } from '@constants/messages';
import {
  HttpResponseErrorCode,
  httpResponseErrorEnum,
  isHttpResponseError,
} from '@client/connection/errors';
import { modalService } from '@services/modal.service';
import { useApiError } from '@hooks/useApiError';
import { NotFound } from '@views/not.found/not.found';
import { app } from '@components/app/app.provider';

const STATUS_TO_MESSAGES_MAP: Record<HttpResponseErrorCode, string> = {
  400: MessagesMap.BAD_REQUEST,
  401: MessagesMap.BAD_REQUEST, // MessagesMap.UNAUTHORIZED,
  403: MessagesMap.BAD_REQUEST, // MessagesMap.FORBIDDEN,
  404: 'Not found',
  409: 'Conflict',
  500: MessagesMap.SERVER_ERROR,
  503: MessagesMap.SERVER_ERROR,
};

const showError = (statusCode: HttpResponseErrorCode) =>
  modalService.showError(STATUS_TO_MESSAGES_MAP[statusCode]);

export const ErrorCatch: FC = () => {
  const error = useApiError();
  const { status } = app.useStatus(['status']);
  const isReady = status === 'READY';
  // const navigate = useNavigateTo();

  useEffect(() => {
    if (!error) return;
    let statusCode: HttpResponseErrorCode;
    if (isHttpResponseError(error)) statusCode = error.statusCode;
    else statusCode = httpResponseErrorEnum.InternalServerError;
    if (statusCode === httpResponseErrorEnum.NotFound) return;
    // if (statusCode === httpResponseErrorEnum.Unauthorized) {
    //   navigate.toIndex();
    // }
    showError(statusCode);
  }, [error]);

  if (!isHttpResponseError(error)) return null;
  if (error.statusCode === httpResponseErrorEnum.NotFound && isReady) return <NotFound />;

  return null;
};
