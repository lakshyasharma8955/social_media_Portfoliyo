import "./PricingCard.css"
import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
     <div className="pricing-container">
        <div className="card">
            <h3>- Basic -</h3>
            <span className="bars"></span>
            <p className="btc">$ 100</p>
            <p>- 3Days -</p>
            <p>- 3Pages -</p>
            <p>- 3Featured -</p>
            <p>Reponsive Design</p>
            <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </div>
        <div className="card">
            <h3>- Advanced -</h3>
            <span className="bars"></span>
            <p className="btc">$ 300</p>
            <p>- 7Days -</p>
            <p>- 5Pages -</p>
            <p>- 5Featured -</p>
            <p>Reponsive Design</p>
            <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </div>
        <div className="card">
            <h3>- Business -</h3>
            <span className="bars"></span>
            <p className="btc">$ 800</p>
            <p>- 15Days -</p>
            <p>- 12Pages -</p>
            <p>- 10Featured -</p>
            <p>Reponsive Design</p>
            <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </div>
        <div className="card">
            <h3>- Ecomerece -</h3>
            <span className="bars"></span>
            <p className="btc">$ 1000</p>
            <p>- 30Days -</p>
            <p>- 15Pages -</p>
            <p>- 20Featured -</p>
            <p>Reponsive Design</p>
            <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </div>
        <div className="card">
            <h3>- Colleges -</h3>
            <span className="bars"></span>
            <p className="btc">$ 50</p>
            <p>- 10Days -</p>
            <p>- 5Pages -</p>
            <p>- 7Featured -</p>
            <p>Reponsive Design</p>
            <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </div>
        <div className="card">
            <h3>- Hospital -</h3>
            <span className="bars"></span>
            <p className="btc">$ 90</p>
            <p>- 20Days -</p>
            <p>- 10Pages -</p>
            <p>- 15Featured -</p>
            <p>Reponsive Design</p>
            <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </div>
     </div>
    </div>
  )
}

export default PricingCard