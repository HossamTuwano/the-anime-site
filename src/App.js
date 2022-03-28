import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Progress from "./components/header/Progress";
import Landing from "./components/Landing";
import bg from "./img/landing.jpg";
function App() {
  return (
    <Router>
      <div className="md:h-auto md:w-full md:box-border">
        {/* <img
          className="min-h-full min-w-[1024px] w-full height-auto fixed top-0 left-0"
          src={bg}
          alt=""
        /> */}
        <Progress />
        <div className="">
          <Routes>
            <Route path="/" element={<Landing />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
