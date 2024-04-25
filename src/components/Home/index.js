// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-bg">
    <Header />
    <div className="home-card">
      <div>
        <h1>Clothes That Get YOU Noticed</h1>
        <p>Fashion is part of the daily air paklnsfkjsndkjfnsdfksdlk;klds</p>
        <button type="button" className="btn">
          Shop Now
        </button>
      </div>
      <img
        className="img"
        alt="clothes that get you noticed"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
      />
    </div>
  </div>
)

export default Home
