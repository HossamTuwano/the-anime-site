import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Banner from "./components/header/Banner";
import Header from "./components/header/Header";
import Progress from "./components/header/Progress";
import Landing from "./components/Landing";
import { useReadingProgress } from "./hooks/useReadingProgress";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen box-border">
        <Progress />
        <div className="">
          <Routes>
            <Route path="/" element={<Landing />}></Route>
          </Routes>
          <Routes>
            <Route path="/banner" element={<Banner />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
