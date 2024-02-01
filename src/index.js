import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
// import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Body from './Components/Body';
import RestaurantMenu from './Components/RestaurantMenu';
import Cart from './Components/Cart';
// import Grocery from './Components/Grocery';

// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading
// Dynamic import

const Grocery = lazy(() => import('./Components/Grocery'));

const About = lazy(() => import('./Components/About'));

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>Loading....</h1>}><About/></Suspense>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement:<Error/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
