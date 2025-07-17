import '../../Styles/Aboutus.css'
import aboutusimg from '../../Assets/aboutus.jpg'
function Aboutus(){
return (
    <div className='bg-container' style={{backgroundImage:`url(${aboutusimg})`,backgroundSize:'cover'}}>
      <h2>The Shopaholic group</h2>
      <p>Welcome to Shopaholic, your go-to destination for everything you love to shop!</p>
        <p>We're more than just an online store - we're your everyday shopping companion. <br/>From trending gadgets 
        and stylish fashion to home essentials and unbeatable deals,<br/> we bring together quality and convenience
        in one seamless experience.</p>

        <p>At Shopaholic, we believe shopping should be simple, fun and stress-free. That's why<br/> we're committed
        to:
        <ul>
            <li>Handpicking a wide range of products you'll love</li>
            <li>Offering pocket-friendly prices and exclusive discounts.</li>
            <li>Delivering fast,safe and reliable service at your doorstep</li>
        </ul>
        Whether you are a trend-seeker, a smart saver, or a little bit of both- Shopaholic is<br/> made just for you.
        Start shopping smarter with Shopaholic - where style meets savings.
      </p>
      <h2>Sustainability</h2>
      <p>The future of e-commerce is sustainable, equitable and inclusive. As we continue to <br/>drive changes across key areas of our operations, our 
        commitment is embedded in<br/> our vision to create a positive impact, for the planet and communities.</p>
    </div>
)
}
export default Aboutus;