import "./App.css";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import User from "./User";
import Usercreate from "./Usercreate";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Profile";
import Edituser from "./Edituser";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/user" element={<User />} />
              <Route path="/user_create" element={<Usercreate />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/edit_user/:id" element={<Edituser />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
