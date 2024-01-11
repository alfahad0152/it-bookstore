import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Books from "./components/Books";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login"
import { useSelector } from "react-redux";
import AdminHome from "./components/admin/AdminHome";
import Category from "./components/admin/Category";
import Seller from "./components/admin/Seller";
import Customer from "./components/admin/Customer";

export default function App() {
  const userInfo = useSelector(state => state.user.value)
  return <>
    <Menu />
    {userInfo.islogin?userInfo.type=='Admin'?<AdminRoute/>:userInfo.type=='Seller'?<SellerRoute/>:<CustomerRoute/>:<WebRoute/>}

  </>
}
function WebRoute() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/books" element={<Books />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
  </Routes>
}
function AdminRoute() {
  return <Routes>
    <Route path="/" element={<AdminHome/>} />
    <Route path="/category" element={<Category/>} />
    <Route path="/seller" element={<Seller/>} />
    <Route path="/customer" element={<Customer/>} />
  </Routes>
}
function SellerRoute() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/books" element={<Books />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
  </Routes>
}
function CustomerRoute() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/books" element={<Books />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
  </Routes>
}