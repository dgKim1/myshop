import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Menubar from './components/Menubar';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { IsUserProvider} from './Context/UserModeContext';
import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'


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
      <section>
      <footer className='left-50%'>
        <ul className='text-footer'>010-3064-3556</ul>
        <ul className='text-footer'>Mon-Fri:10am ~ 5pm</ul>
        <ul className='text-footer'>Break Time:12pm ~ 1pm</ul>
        <ul className='text-footer'>Holiday: sat,sun</ul>
        <ul className='text-footer'>Copyright © MY SHOP</ul>
      </footer>
      </section>
      </IsUserProvider>
    </QueryClientProvider>
    
  );
}

export default App;
