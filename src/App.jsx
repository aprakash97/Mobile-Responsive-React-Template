import { createRoot } from "react-dom/client";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        iure tempore nostrum voluptate mollitia magnam fuga quasi nulla
        provident, minima laborum laboriosam repudiandae, est obcaecati sequi.
        Sint, amet. Cupiditate, eligendi!
      </p>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
