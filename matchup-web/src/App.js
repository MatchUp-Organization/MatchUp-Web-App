import "./App.css"
import Home from "./pages/Home"
import About from "./pages/About"
import Account from "./pages/Account"
import { Route, Routes } from "react-router-dom"
import Missing from "./pages/Missing"
import Signup from "./pages/Signup/Signup"
import Login from "./pages/Login/Login"
import PageHeader from "./layouts/PageHeader"
import RequireAuth from "./components/other/RequireAuth"
import PersistLogin from "./components/other/PersistLogin"
import FootballPage from "./pages/sports/Football/FootballPage"
import BasketballPage from "./pages/sports/basketball/BasketballPage"
import TennisPage from "./pages/sports/Tennis/TennisPage"
import VolleyballPage from "./pages/sports/Volleyball/VolleyballPage"
function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="football" element={<FootballPage/>}/>
        <Route path="basketball" element={<BasketballPage/>}/>
        <Route path="volleyball" element={<VolleyballPage/>}/>
        <Route path="tennis" element={<TennisPage/>}/>
        <Route path="/pageheader" element={<PageHeader />}/>

        {/* Protected routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path="/account" element={<Account />} />
          </Route>
        </Route>

        {/* 404 */}
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
