import { Outlet } from 'react-router-dom';
import LyxNavbar from './components/LyxNavbar';
import LyxFooter from './components/LyxFooter';

const CustomClearingLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <LyxNavbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <LyxFooter />
    </div>
  );
};

export default CustomClearingLayout;