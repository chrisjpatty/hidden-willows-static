import React from 'react'
import { withSiteData, withRouteData } from 'react-static'
import kitchenImg from '../img/kitchen.jpg'
import bedroomImg from '../img/bedroom.jpg'
import 'normalize.css'

import logoImg from '../logo.png'

let Home = ({postings}) => {
  console.log(postings);
  return (
    <main className="home">
      <div className="img-row">
        <div className="img-wrapper">
          <img src={kitchenImg} alt="The kitchen" />
        </div>
        <div className="img-wrapper">
          <img src={bedroomImg} alt="The bedroom" />
        </div>
      </div>
    </main>
  )
}
Home = withSiteData(withRouteData(Home))

export default Home
