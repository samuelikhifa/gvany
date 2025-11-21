import { Outlet } from 'react-router-dom';
import HLNavbar from './components/HLNavbar';
import HLFooter from './components/HLFooter';

const HaulageLogisticsLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HLNavbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <HLFooter />
    </div>
  );
};

export default HaulageLogisticsLayout;