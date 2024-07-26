import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import { Login } from "./components/Auth/Login";
import { Register } from "./components/Auth/Register";
import { UserLayout } from "./UserLayout";
import UserList from "./components/admin/userlist/UserList";
import PostEvent from "./components/admin/postevent/PostEvent";
import PostCategory from "./components/admin/postcategtory/PostCategory";
import Admin from "./components/admin/Admin";
import About from "./components/About";



const Layout = () => (
  <>
    <Admin />
    <Outlet />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="/admin/" element={<Layout/>}>
            <Route path="/admin/" element={<Admin />}/>
              <Route path="/admin/userlist" element={<UserList />} />
              <Route path="postcategory" element={<PostCategory />} />
              <Route path="postproduct" element={<PostEvent />} />
          </Route>

          
        </Routes>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
