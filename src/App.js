
import './App.css';
import { Outlet } from 'react-router-dom';
import Menubar from './components/Menubar';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { IsUserProvider} from './Context/UserModeContext';
import { useState } from 'react';
import footer from './css/footer.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const queryClient = new QueryClient();
const filters = ["All","추천순","판매순"];
function App() {
  const [filter,setFilter] = useState(filters[0]);
  const changeFilter = (filter)=>setFilter(filter);
  
  return (
    <QueryClientProvider client={queryClient}>
      <IsUserProvider>
      <Menubar/>
      <Outlet context={{filter,filters,changeFilter}}/>
      <section className='foot'>
      <div className='flex-col items-center text-footer foot-text'>
        <div className='text-footer foot-text'>
          <span>전화번호: 010-3064-3556</span>
          <span className='bar'></span>
          <span>평일: 10am ~ 5pm</span>
          <span className='bar'></span>
          <span>브레이크 타임: 12pm ~ 1pm</span>
          <span className='line-jump'></span>
          <span>공휴일: sat,sun</span>
          <span className='bar'></span>
          <span>Copyright © MY SHOP</span>
        </div>

      </div>
      </section>
      </IsUserProvider>
    </QueryClientProvider>
    
  );
}

export default App;
