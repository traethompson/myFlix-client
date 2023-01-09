import { createRoot } from "react-dom/client";

//bundle index.scss
import "./index.scss";

//Main component
const MyFlixApplication = () => {
  return (
    <div className="my-flix">
      <div>Good morning</div>
    </div>
  );
};

//find root
const container = document.querySelector("#root");
const root = createRoot(container);

//render root in dom
root.render(<MyFlixApplication />);
