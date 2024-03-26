import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './layout/Header/Header';
import Info from './components/info/Info';
import Footer from './layout/Footer/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Accessories from './pages/Accessories';
import Jewelry from './pages/Jewelry';
import About from './pages/About';
import Contact from './pages/Contact';
import { Store } from './Store';
import { Provider } from 'react-redux';



const router=createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/men",
        element: <Men/>,
      },
      {
        path: "/women",
        element: <Women/>
      },
      {
        path: "/accessories",
        element: <Accessories/>,
      },
      {
        path: "/jewelry",
        element: <Jewelry/>,
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ]
  }
])


const root = ReactDOM.createRoot(
  
document.getElementById('root'));
root.render(
  <Provider store={Store}>
     <RouterProvider router={router}/>
  </Provider>
  // <React.StrictMode>
  //   <RouterProvider router={router}/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
