import { useEffect } from "react";
import { useAppBaseContext } from "./app.base.context";
import { FirstComponent } from "../first/first"
import { useStyles } from "./app.styles"

export const App = () => {
  const { root } = useStyles();
  const app = useAppBaseContext();
  const { status } = app.useState(['status']);

  useEffect(() => {
    app.init().catch((() => {}));
  }, [app]);

  if (status !== 'READY') {
    return (
      <div className={root}>
        Loading ...
      </div>
    );
  }

  return (
    <div className={root}>
      <FirstComponent />
    </div>
  );
};
