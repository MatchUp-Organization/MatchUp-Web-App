import "./App.css"
import { useState } from "react"
import LandingPage from "./pages/LandingPage/LandingPage"
import About from "./pages/About"
import Account from "./pages/Account"
import { Route, Routes } from "react-router-dom"
import Missing from "./pages/Missing"
import Signup from "./pages/Signup/Signup"
import Login from "./pages/Login/Login"
import UserHome from "./pages/UserHome"
import RequireAuth from "./components/other/RequireAuth"
import PersistLogin from "./components/other/PersistLogin"
import AllSportsPage from "./pages/sports/AllSports/AllSportsPage"
import FootballPage from "./pages/sports/Football/FootballPage"
import BasketballPage from "./pages/sports/basketball/BasketballPage"
import TennisPage from "./pages/sports/Tennis/TennisPage"
import VolleyballPage from "./pages/sports/Volleyball/VolleyballPage"
import NewLogin from "./pages/Login/NewLogin"
import FieldSelection from "./pages/Fields/FieldSelection";
import FieldsInformation from "./pages/Fields/FieldInformation";
function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginBackup" element={<Login />} />


        {/* Routes for Football Pitches */}
        <Route path="/pitches" element={<FieldSelection />} />
        <Route path="/football/pitch/:id" element={<FieldsInformation />} />

        {/* Protected routes */}
        <Route element={<PersistLogin />}>
          <Route path="allsports" element={<AllSportsPage />} />
          <Route path="football" element={<FootballPage />} />
          <Route path="basketball" element={<BasketballPage />} />
          <Route path="volleyball" element={<VolleyballPage />} />
          <Route path="tennis" element={<TennisPage />} />
          <Route path="index" element={<UserHome />} />
          <Route element={<RequireAuth />}>
            <Route path="account" element={<Account />} />
          </Route>
        </Route>

        {/* 404 */}
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
