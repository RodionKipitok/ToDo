import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";


// После создания строго необходимо связать его с компонентами React, чтобы они могли получать доступ к стору и его методам. Для этого в библиотеке React Redux есть компонент  Provider , ожидающий одноименный пропс  store. Для того чтобы любой компонент в приложении мог использовать стр., вращаем  Provider все дерево компонентов.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
