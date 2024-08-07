import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./i18n";

import "./index.css";
import AppRouter from "@routes/AppRouter.tsx";
import { store } from "./store";
import { Suspense } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense fallback="loading ..">
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </Suspense>
);
