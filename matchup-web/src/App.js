import "./App.css"
import PageHeader from "./layouts/PageHeader"
import Home from "./pages/Home"
import About from "./pages/About"
import Account from "./pages/Account"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
