import { Outlet } from 'react-router-dom'
import './App.css'
import NavigationBar from './components/NavigationBar'

function App() {

  return (
   <div>
    <NavigationBar/>
    <div className='max-w-full mx-auto min-h-screen p-3'>
      <Outlet/>
    </div>
   </div>
  )
}

export default App
