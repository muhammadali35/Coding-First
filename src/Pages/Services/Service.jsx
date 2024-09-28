import React from 'react'
import ServicItem from './ServiceItem'
import FrontPage from '../FrontPage/FrontPage'
import ContactSec from './ContactSec'
import WorkProcess from './WorkProcess'
import FeedBack from './FeedBack'

const Service = () => {
  return (
    <>
   <FrontPage Title="Our Services" Title1=" Services"/>
    <ServicItem/>
    <ContactSec/>
    <WorkProcess/>
    <FeedBack/>
    
    </>
  )
}

export default Service
