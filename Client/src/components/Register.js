import { useRef, useState } from "react"

export default function Register() {
    const [regtype,setRegType]=useState("User")
    return <>
        <br />
        <section id="mu-contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mu-contact-area">

                            <div className="mu-heading-area">
                                <h2 className="mu-heading-title"><i>{regtype} Register</i></h2>
                                <button className={regtype=="Seller"?"send-btn1":"send-btn2"} onClick={()=>setRegType('Seller')} disabled={regtype=="Seller"}><span>Seller</span></button>&nbsp;&nbsp;&nbsp;
                                <button className={regtype=="User"?"send-btn1":"send-btn2"} onClick={()=>setRegType('User')} disabled={regtype=="User"}><span>User</span></button>
                            </div>
                            <div className="mu-contact-content">

                                <div id="form-messages"></div>
                                    {regtype=="User"?<CustomerReg/>:<SellerReg/>}                                    
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
function CustomerReg() {
    const name = useRef()
    const phone = useRef()
    const address = useRef()
    const email = useRef()
    const pass = useRef()

    var register=(event)=>{
        event.preventDefault()
        const obj = {
            name:name.current.value,
            address:address.current.value,
            phone:phone.current.value,
            email:email.current.value,
            password:pass.current.value
        }
    }
    return <><form id="ajax-contact" onSubmit={register} className="mu-contact-form">
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Name Here" required />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Phone No. Here" required />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Address Here" required />
        </div>
        <div className="form-group">
            <input type="email" className="form-control" placeholder="Enter Email Here" required />
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Enter Password Here" required />
        </div>
        <button className="send-btn"><span>Register</span></button>
    </form></>
}

function SellerReg() {
    return <><form id="ajax-contact" className="mu-contact-form">
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Company Name Here" required />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Name Here" required />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Phone No. Here" required />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Address Here" />
        </div>
        <div className="form-group">
            <input type="email" className="form-control" placeholder="Enter Email Here" required />
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Enter Password Here" required />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Reg. No. Here" required />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter GST No. Here" required />
        </div>
        <button className="send-btn"><span>Register</span></button>
    </form></>
}