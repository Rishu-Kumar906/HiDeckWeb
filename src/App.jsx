import Navbar from "./components/Navigation Bar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import CoupleStay from "./pages/CoupleStay";
import VilaAndGroupPartis from "./pages/VilaAndGroupPartis";
import DecorationAndMore from "./pages/DecorationAndMore";
import ContactUs from "./pages/ContactUs";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/src/pages/Home.jsx" component={<Home />} />
          <Route path="/src/pages/Menu.jsx" component={<Menu />} />
          <Route path="/src/pages/CoupleStay.jsx" component={<CoupleStay />} />
          <Route
            path="/src/pages/VilaAndGroupPartis.jsx"
            component={<VilaAndGroupPartis />}
          />
          <Route
            path="/src/pages/Decoration&More.jsx"
            component={<DecorationAndMore />}
          />
          <Route path="/src/pages/ContactUs.jsx" Component={<ContactUs />} />
          <Route path="/src/pages/LoginPage.jsx" Component={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
