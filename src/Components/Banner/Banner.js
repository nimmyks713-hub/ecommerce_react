import carimage4 from '../../Assets/carimage4.jpg'
import carimage2 from '../../Assets/carimage2.jpg'
import carimage3 from '../../Assets/carimage3.jpg'
import '../../Styles/Banner.css'
function Banner(){
    return(
        <div className='banner'>
       <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={carimage4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={carimage2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={carimage3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}
export default Banner;