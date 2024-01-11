export default function Contact ()
{
    return <><br/>
    <section id="mu-contact">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="mu-contact-area">
							<div className="mu-heading-area">
								<h2 className="mu-heading-title"><i>Contact Us</i></h2>
								<span className="mu-header-dot"></span>
							</div>
							<div className="mu-contact-content">

								{/* <div id="form-messages"></div>
								<div class="mu-contact-content"> */}

								{/* <div id="form-messages"></div> */}
								<form id="ajax-contact"class="mu-contact-form">
									<div class="form-group">                
										<input type="text" class="form-control" placeholder="Name" id="name" name="name" required/>
									</div>
									<div class="form-group">                
										<input type="email" class="form-control" placeholder="Enter Email" id="email" name="email" required/>
									</div>              
									<div class="form-group">
										<textarea class="form-control" placeholder="Message" required/>
									</div>
									<button class="send-btn"><span>SUBMIT</span></button>
						        </form>
							</div>

							</div>

						</div>
					</div>
				</div>
			{/* </div> */}
		</section></>
}