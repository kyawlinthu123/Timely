import React from 'react'
import UpcomingDeadlines from '../components/Dashboard/UpcomingDeadlines'
import HeroSection from '../components/Dashboard/HeroSection'
import MyClasses from '../components/Dashboard/MyClasses'
import CalendarWidget from '../components/Dashboard/CalendarWidget'
import FocusStats from '../components/Dashboard/FocusStats'

export default function Dashboard() {
  return (
    <div>
        <div className='max-w-full'>
            <HeroSection/>
        </div>
        <div className='max-w-6xl mx-auto'>
            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
                <UpcomingDeadlines/>
                <MyClasses/>
                <CalendarWidget/>
                <FocusStats/>
            </div>
        </div>
    </div>
  )
}
