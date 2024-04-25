// Write your JS code here
import './index.css'

const Header = () => (
  <div className="header">
    <img
      className="head-logo"
      alt="website logo"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
    />
    <div className="ul">
      <ul className="ul">
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
      </ul>
      <button type="button" className="btn">
        Logout
      </button>
    </div>
    <img
      className="logout"
      alt="nav logout"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
    />
  </div>
)

export default Header
