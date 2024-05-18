import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Menubar from './components/Menubar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { IsUserProvider} from './Context/UserModeContext';
import { useState } from 'react';

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
      </IsUserProvider>
    </QueryClientProvider>
    
  );
}

export default App;
