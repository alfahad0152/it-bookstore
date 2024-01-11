import { useRef, useState } from "react"
import WebSevice, { urls } from "../services/WebSevice"
import { useDispatch } from "react-redux"
import {setUserInfo} from "../reduxconfig/UserSlice"
import { useNavigate } from "react-router-dom"

export default function Login() {
	const navigate = useNavigate()
	var emailBox = useRef()
	var passBox = useRef()
	const [msg, setMsg] = useState("")
	const dispatch = useDispatch()
	var handleLogin = async (event) => {
		event.preventDefault()
		var obj = {
			email: emailBox.current.value,
			password: passBox.current.value,
		}
		const response = await WebSevice.postApiCall(urls.LOGIN_USER, obj)
		const resdata = await response.json()
		if (resdata.status) {
			dispatch(setUserInfo({
                name : "",
                type : resdata.data.type,
                token :resdata.data.token,
                islogin : true
            } ))
			navigate("/")
			setMsg(resdata.msg)
		} else 
			setMsg(resdata.msg)
		
		// .then(response=>response.json())
		// 	.then(resdata=>{if(resdata.status)
		// 	{
		// 		setMsg(resdata.msg)
		// 	}else
		// 	{
		// 		setMsg(resdata.msg)
		// 	}
		// })
		
	}
	return <>
		<br />
		<section id="mu-contact">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="mu-contact-area">

							<div className="mu-heading-area">
								<h2 className="mu-heading-title"><i>User Login</i></h2>
								<span className="mu-header-dot"></span>
							</div>
							<div className="mu-contact-content">

								<div id="form-messages"></div>
								<form id="ajax-contact" onSubmit={handleLogin} className="mu-contact-form">
									<div className="form-group">
										<input type="email" className="form-control" ref={emailBox} placeholder="Enter Email Here" required />
									</div>
									<div className="form-group">
										<input type="password" className="form-control" ref={passBox} placeholder="Enter Password Here" required />
									</div>
									<button className="send-btn"><span>Login</span></button>&nbsp;&nbsp;&nbsp;&nbsp;
									<b>{msg}</b>
								</form>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
	</>
}