import { createRoot } from "react-dom/client";
import { MainView } from "./component/main-view/main-view";

//bundle index.scss
import "./index.scss";

//Main component
const MyFlixApplication = () => {
  return (
    <MainView />
  );
};

//find root
const container = document.querySelector("#root");
const root = createRoot(container);

//render root in dom
root.render(<MyFlixApplication />);
