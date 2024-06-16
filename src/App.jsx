import './App.css'
import menuIcon from './assets/bars-solid.svg';
import logoPic from './assets/logo.jpg';
import cartIcon from './assets/shopping-cart.png';


function App() {

  return (
    <>
    <header>
      <div className='header-pic'>
      <img src={menuIcon} style={{width: '5vw', height: '10vh' }} alt="Menu-Options" />
      <img src={logoPic} style={{width: '40vw', height: '20vh' }} alt="LittleLemon logo" />
      <img src={cartIcon} style={{width: '5vw', height: '10vh' }} alt="Go to Cart" />
      </div>
    </header>

      <div className='form-layout'>
      
      <div className='main-text'>
      <h1>Little Lemon</h1>
      <p>Chicago</p>
      </div>
      
      <form action= 'https://usebasin.com/f/521279cd748b' method= 'POST'>

      <div className="order-details">
      <p><b>Booking details</b></p>
      <label htmlFor="Order-Details" className='order-details'></label>
      <input type="text" inputMode='numeric' name="Order-details" id="order-details" placeholder='Date - Time - Number of diners' required />
      </div>

      <div className="card-details">
      <label htmlFor="Credit Card details" className='text-card'><b>Credit Card details</b></label>
      <input type="text" inputMode='numeric' name="Card Number" id="Card Number" placeholder='Card Number' required />
      <input type="text" name="name" id="FirstName/LastName" placeholder='FirstName/LastName' required />
      </div>

      <div className="more-details">
      <label htmlFor="Exp Date" className='date'><b>Exp Date</b>
      <input type="month" name="start" id="start" value="05/24" required/>
      </label>
      <label htmlFor="CVV" className='cvv'><b>CVV</b>
      <input type="text" inputMode='numeric' name="CVV" id="CVV" placeholder='CVV' min="2" max="4" required />
      </label>
      </div>

      <label htmlFor="Text-Confirmation" className='radio-text'>
      <p>Send me booking confirmation via text
        <input type="radio" name="send me booking confirmation via text" placeholder="send me booking confirmation via text" id="" />
      </p>
      </label>

      <label htmlFor="Email Confirmation" className='radio-text'>
        <p>Send me booking confirmed via email
        <input type="radio" name="" id="" /> 
        </p>
      </label>

      <div className="btn">
      <button type="submit" className="book-btn">Book</button>
      </div>
      </form>
      </div>
    </>
  )
}

export default App
