import React from 'react'
import { withSiteData, withRouteData } from 'react-static'
//
import logoImg from '../logo.png'

let Home = ({postings}) => {
  console.log(postings);
  return (
    <div>
      Cool cool cool
    </div>
  )
}
Home = withSiteData(withRouteData(Home))

export default Home
