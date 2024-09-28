import React from 'react'
import FrontPage from '../FrontPage/FrontPage'
import AboutFeature from './AboutFeature'
import StatsFeature from './StatFeaure'
import WhyChooseUs from './WhyChooseUs'
import FeedBack from '../Services/FeedBack'
const About = () => {
  return (
    <>
  <FrontPage Title="About US" Title1="About"/>
  <AboutFeature/>
  <StatsFeature/>
  <WhyChooseUs/>
  <FeedBack/>
  
    </>
  )
}

export default About
