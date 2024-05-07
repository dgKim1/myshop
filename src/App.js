import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Menubar from './components/Menubar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { IsUserProvider} from './Context/UserModeContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <IsUserProvider>
      <Menubar/>
      <Outlet/>
      </IsUserProvider>
    </QueryClientProvider>
    
  );
}

export default App;
