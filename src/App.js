import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Menubar from './components/Menubar';

function App() {
  return (
    <div>
    <Menubar/>
    <Outlet/>
    </div>
  );
}

export default App;
