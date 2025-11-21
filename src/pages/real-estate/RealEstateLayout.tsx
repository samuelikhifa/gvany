import { Outlet } from 'react-router-dom'
import RENavbar from './components/RENavbar'
import REFooter from './components/REFooter'

const RealEstateLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <RENavbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <REFooter />
    </div>
  )
}

export default RealEstateLayout
