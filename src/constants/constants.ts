export const PROJECT_NAME = 'CAT & DOG';
export const ROOT_TITLE = 'не в спільноті';
export const IS_DEV = import.meta.env.DEV;
export const USE_TG = import.meta.env.VITE_USE_TG === 'true';
export const API_URL = import.meta.env.VITE_API_URL || window.location.origin;
export const INIT_DATA = import.meta.env.VITE_INIT_DATA || '';
export const REGEXP_END_ON_SLASH = /\/$/;
export const REGEXP_BAD_HASH = /^#[^/]/; // host/#tgWebAppData
