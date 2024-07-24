import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <CookiesProvider path="/">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </RecoilRoot>
);
