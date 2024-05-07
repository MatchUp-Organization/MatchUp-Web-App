import "./App.css"
import Home from "./pages/Home"
import About from "./pages/About"
import Account from "./pages/Account"
import { Route, Routes } from "react-router-dom"
import Missing from "./pages/Missing"
import Signup from "./pages/Signup/Signup"
import Login from "./pages/Login/Login"
import RequireAuth from "./components/other/RequireAuth"
import PersistLogin from "./components/other/PersistLogin"

function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

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
