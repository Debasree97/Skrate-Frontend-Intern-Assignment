import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Achievements from "./Pages/Achievements/Achievements";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Homepage/Home";
import Jobs from "./Pages/Jobs/Jobs";
import Profile from "./Pages/Profile/Profile";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="font">
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home/>}></Route>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="dashboard" element={<Dashboard/>}></Route>
          <Route
            path="achievement"
            element={<Achievements/>}
          ></Route>
          <Route path="job" element={<Jobs/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
