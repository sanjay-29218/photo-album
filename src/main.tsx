import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about/:id" element={<About />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
