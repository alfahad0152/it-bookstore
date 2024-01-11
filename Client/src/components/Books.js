export default function Books ()
{
    return <>
    <br/><br/><br/><br/><br/>
    <div className="Books">
         <div className="container">
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="titlepage">
                     <h2>Our <strong className="black">Books </strong></h2>
                     <span>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</span> 
                  </div>
               </div>
            </div>
            <div className="row box">
               <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                  <div className="book-box">
                     <figure><img src="images/book-1.jpg" alt="img"/></figure>
                  </div>
               </div>
               <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="book-box">
                     <figure><img src="images/book-2.jpg" alt="img"/></figure>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                  <div className="book-box">
                     <figure><img src="images/book-1.jpg" alt="img"/></figure>
                  </div>
               </div>
               <div className="col-md-6 offset-md-3">
                  <p>magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris</p>
               </div>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="read-more">
                        <a href="#">Read More</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <br/></>
}