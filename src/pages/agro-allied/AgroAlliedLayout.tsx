import { Outlet } from 'react-router-dom'
import AANavbar from './components/AANavbar'
import AAFooter from './components/AAFooter'

const AgroAlliedLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AANavbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <AAFooter />
    </div>
  )
}

export default AgroAlliedLayout
