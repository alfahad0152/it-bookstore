import About from "./About";
import Books from "./Books";
import Contact from "./Contact";

export default function Home()
{
    return <>
    <section class="slider_section">
         <div id="myCarousel" class="carousel slide banner-main" data-ride="carousel">
            <div class="carousel-inner">
               <div class="carousel-item active">
                  <img class="first-slide" src="images/banner.jpg" alt="First slide"/>
                  <div class="container">
                     <div class="carousel-caption relative">
                        <h1>The Best Libraries That<br/> Every Book Lover Must<br/> Visit!</h1>
                        <p>adipiscing elit, sed do eiusmod tempor incididunt ut<br/> labore et dolore magna aliqua. Ut enim ad minim<br/> veniam, quis nostrud exercitation </p>
                        <div class="button_section"> <a class="main_bt" href="#">Read More</a>  </div>
                        
                     </div>
                  </div>
               </div>
               <div class="carousel-item">
                  <img class="second-slide" src="images/banner.jpg" alt="Second slide"/>
                  <div class="container">
                     <div class="carousel-caption relative">
                        <h1>The Best Libraries That<br/> Every Book Lover Must<br/> Visit!</h1>
                        <p>adipiscing elit, sed do eiusmod tempor incididunt ut<br/> labore et dolore magna aliqua. Ut enim ad minim<br/> veniam, quis nostrud exercitation </p>
                        <div class="button_section"> <a class="main_bt" href="#">Read More</a>  </div>
                    
                     </div>
                  </div>
               </div>
               <div class="carousel-item">
                  <img class="third-slide" src="images/banner.jpg" alt="Third slide"/>
                  <div class="container">
                     <div class="carousel-caption relative">
                        <h1>The Best Libraries That<br/> Every Book Lover Must<br/> Visit!</h1>
                        <p>adipiscing elit, sed do eiusmod tempor incididunt ut<br/> labore et dolore magna aliqua. Ut enim ad minim<br/> veniam, quis nostrud exercitation </p>
                        <div class="button_section"> <a class="main_bt" href="#">Read More</a>  </div>
                    
                     </div>
                  </div>
               </div>
            </div>
            <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a>
         </div>
      </section>
      <Books/>
      <About/>
      <Contact/>
    </>
}