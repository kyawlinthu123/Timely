import UpcomingDeadlines from '../components/UpcomingDeadlines'
import ClassesPreview from '../components/ClassesPreview'
import FocusStats from '../components/FocusStats'
import TodaysOverview from '../components/TodaysOverview'

export default function Dashboard() {
  return (
    <div>
        <div className='max-w-full'>
            {/* <HeroSection/> */}
        </div>
        <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 gap-6 mt-8 md:grid-cols-2'>
                <TodaysOverview/>
                <ClassesPreview/>
                <UpcomingDeadlines/>
                <FocusStats/>
            </div>
      </div>
    </div>
  )
}
