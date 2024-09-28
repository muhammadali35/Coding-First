import React from 'react'
import Hero from './Hero'
import ContactSec from '../Services/ContactSec'
import HomeService from './HomeService'
import WorkProcess from '../Services/WorkProcess'
import StatsFeature from '../About/StatFeaure'
import FeedBack from '../Services/FeedBack'
import AboutFeature from '../About/AboutFeature'
import Swiper from './Swiper'
import Team from '../Team/Team'
import TeamMember from '../Team/TeamMember/TeamMember'
// import TeamSection from '../Team/TeamMember/TeamSection'
import TeamHome from './TeamHome'
const Home = () => {
  return (
    <>
      <Swiper/> 
      <ContactSec/>
      <HomeService/>
       <StatsFeature/>
        <TeamHome/>
      <WorkProcess/>
       <FeedBack/>
        <AboutFeature/>
    </>
  )
}

export default Home
