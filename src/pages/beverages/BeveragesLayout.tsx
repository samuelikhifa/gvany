import { Outlet } from 'react-router-dom'
import BENavbar from './components/BENavbar'
import BEFooter from './components/BEFooter'

const BeveragesLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <BENavbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <BEFooter />
    </div>
  )
}

export default BeveragesLayout