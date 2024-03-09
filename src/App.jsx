import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AuthLogin from "./pages/Authentication/auth-login";
import Signup from "./pages/Authentication/auth-signup";
import AuthResetPassword from "./pages/Authentication/auth-re-password";
import AuthForgetPassword from "./pages/Authentication/auth-for-password";

import SidebarColored from "./components/sidebarColored";
import Sidebar from "./components/sidebar";
import SidebarLight from "./components/sidebarLight";

import IndexDark from "./pages/Layouts/index-dark";
import IndexRtl from "./pages/Layouts/index-rtl";
import IndexDarkRtl from "./pages/Layouts/index-dark-rtl";
import IndexSidebarLight from "./pages/Layouts/index-sidebar-light";
import IndexSidebarColored from "./pages/Layouts/index-sidebar-colored";

import Switcher from "./components/switcher";
import Topnav from "./components/topnav";
import Footer from "./components/footer";
import Team from "./pages/Team/superDashboard";
import Index from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UiComponents from "./pages/ui-components";
import AiDashboard from "./pages/Team/AiDashboard"

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Sidebar />
//       <Topnav />
//       <ToastContainer />
//       <Routes>
//         <Route path="/" element={<Index />} />
//         <Route path="/login" element={<AuthLogin />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/reset-password" element={<AuthResetPassword />} />
//         <Route path="/auth-for-password" element={<AuthForgetPassword />} />
//         <Route path="/superDashboard" element={<Team />} />
//       </Routes>
//       <Footer />
//       <Switcher />
//     </BrowserRouter>
//   );
// }

function App() {
  const [toggle, setToggle] = useState(true);
  let location = useLocation();
  return (
    <>
      {location.pathname === "/email-confirmation" ||
      location.pathname === "/email-password-reset" ||
      location.pathname === "/email-alert" ||
      location.pathname === "/email-invoices" ||
      location.pathname === "/auth-login" ||
      location.pathname === "/auth-signup" ||
      location.pathname === "/auth-signup-success" ||
      location.pathname === "/auth-re-password" ||
      location.pathname === "/auth-for-password" ||
      location.pathname === "/auth-lock-screen" ||
      location.pathname === "/comingsoon" ||
      location.pathname === "/maintenance" ||
      location.pathname === "/error" ||
      location.pathname === "/thankyou" ? (
        <Routes>
          <Route path="/auth-login" element={<AuthLogin />} />
          <Route path="/auth-signup" element={<Signup />} />
          <Route path="/auth-for-password" element={<AuthForgetPassword />} />
          <Route path="/auth-re-password" element={<AuthResetPassword />} />
          {/* <Route path="/email-confirmation" element={<EmailConfirmation/>}/>
        <Route path="/email-password-reset" element={<PasswordReset/>}/>
        <Route path="/email-alert" element={<EmailAlert/>}/>
        <Route path="/email-invoices" element={<EmailInvoice/>}/>
        <Route path="/auth-login" element={<AuthLogin/>}/>
        <Route path="/auth-signup" element={<Signup/>}/>
        <Route path="/auth-signup-success" element={<AuthSignupSuccess/>}/>
        <Route path="/auth-re-password" element={ <AuthResetPassword/>}/>
        <Route path="/auth-lock-screen" element={ <AuthLockScreen/>}/>
        <Route path="/comingsoon" element={<Comingsoon/>}/>
        <Route path="/maintenance" element={<Maintenance/>}/>
        <Route path="/error" element={ <PageError/>}/>
        <Route path="/error" element={ <PageError/>}/>
        <Route path="/thankyou" element={ <PageThankyou/>}/> */}
        </Routes>
      ) : (
        <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
          {location.pathname === "/index-sidebar-light" ? (
            <SidebarLight />
          ) : location.pathname === "/index-sidebar-colored" ? (
            <SidebarColored />
          ) : location.pathname === "/email-confirmation" ? (
            ""
          ) : (
            <Sidebar />
          )}
          <main className="page-content bg-gray-50 dark:bg-slate-800">
            <Topnav toggle={toggle} setToggle={setToggle} />
            <Routes>
              <Route exact path="/" element={<Index />} />
              <Route path="/ui-components" element={<UiComponents />} />
              <Route path="/index-rtl" element={<IndexRtl />} />
              <Route path="/index-dark-rtl" element={<IndexDarkRtl />} />
              <Route
                path="/index-sidebar-light"
                element={<IndexSidebarLight />}
              />
              <Route
                path="/index-sidebar-colored"
                element={<IndexSidebarColored />}
              />
              {/* <Route path="/login" element={<AuthLogin />} />
              <Route path="/signup" element={<Signup />} /> */}
              <Route path="/auth-re-password" element={<AuthResetPassword />} />
              {/* <Route
                path="/auth-for-password"
                element={<AuthForgetPassword />}
              /> */}
              <Route path="/superDashboard" element={<Team />} />
              <Route path="/aiDashboard" element={<AiDashboard/>} />
              <Route path="/index" element={<Index />} />
            </Routes>
            <Footer />
          </main>
          <Switcher />
        </div>
      )}
    </>
  );
}

export default App;
