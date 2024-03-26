import { Outlet } from 'react-router-dom';
import './App.css';
import Info from './components/info/Info';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';

function App() {
  return (
    <div className="App">
     <Header/>
     <Outlet/>
     <Footer/>
    </div>
  );
}

export default App;
