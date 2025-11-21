import { Outlet } from 'react-router-dom'
import ConNavbar from './components/ConNavbar'
import ConFooter from './components/ConFooter'

const ConsultancyLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ConNavbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <ConFooter />
    </div>
  )
}

export default ConsultancyLayout
