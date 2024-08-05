import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "@routes/AppRouter.tsx";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
