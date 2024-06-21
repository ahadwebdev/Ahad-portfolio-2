import "./App.css";
import Home from "./Pages/Home.jsx";
import svg1 from "../src/svg/svgviewer-output.svg";

function App() {
  return (
    <div className="bg-[#111111] py-10 overflow-hidden">
      <img src={svg1} className="absolute -top-40 right-0" id="home" alt="" />
      <img src={svg1} className="absolute top-60  -left-96" alt="" />
      <Home />
    </div>
  );
}

export default App;
