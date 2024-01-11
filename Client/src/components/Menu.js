import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { delUserInfo } from "../reduxconfig/UserSlice"

export default function Menu() {
    const userInfo = useSelector(state => state.user.value)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    var logout =()=>{
        dispatch(delUserInfo())
        navigate("/login")
    }
    return <>
        <header>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                            <div className="full">
                                <div className="center-desk">
                                    <div className="logo"><b><i>IBook_store</i></b></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                            <div className="menu-area">
                                <div className="limit-box">
                                    <nav className="main-menu">
                                        {userInfo.islogin ? userInfo.type == 'Admin' ? <><ul className="menu-area-main">
                                            <li> <Link to="/">Home</Link></li>
                                            <li><Link to="/category">Category</Link></li>
                                            <li> <Link to="/seller">Seller</Link></li>
                                            <li><Link to="/customer" >Customer</Link></li>
                                            <li className="mean-last"><b style={{ cursor: 'pointer',color:'white'}} onClick={logout}><img src="images/top-icon.png" alt="#" /> Logout</b></li>
                                        </ul></> : userInfo.type == 'Seller' ? <><ul className="menu-area-main">
                                            <li> <Link to="/seller">Home</Link></li>
                                            <li><Link to="/book">Book</Link></li>
                                            <li> <Link to="/order">Order</Link></li>
                                            <li className="mean-last"><b style={{ cursor: 'pointer' }}> <img src="images/top-icon.png" alt="#" /> Logout</b></li>
                                        </ul></> : <><ul className="menu-area-main">
                                            <li> <Link to="/customer">Home</Link></li>
                                            <li><Link to="/profile">Profile</Link></li>
                                            <li> <Link to="/book">Book</Link></li>
                                            <li><Link to="/order" >Order</Link></li>
                                            <li className="mean-last"><b style={{ cursor: 'pointer' }}><img src="images/top-icon.png" alt="#" /> Logout</b></li>
                                        </ul></> : <><ul className="menu-area-main">
                                            <li> <Link to="/">Home</Link></li>
                                            <li><Link to="/books">Books</Link></li>
                                            <li> <Link to="/about">About us</Link></li>
                                            <li><Link to="/contact" >Contact us</Link></li>
                                            <li><Link to="/register" >Register</Link></li>
                                            <li className="mean-last"><Link to="/login"><img src="images/top-icon.png" alt="#" /> Login</Link></li>
                                        </ul></>}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
}
