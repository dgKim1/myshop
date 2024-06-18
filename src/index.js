import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MyBasket from './pages/MyBasket';
import ProductDetail from './pages/ProductDetail';
import AllProducts  from './pages/AllProducts';
import Home from "./pages/Home";
import UpdateProduct from "./pages/UpdateProduct";
import BestProdcuts from './pages/BestProdcuts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children: [
      {index: true,path:"/",element: <Home/> },
      {
        path:"/products",element: <AllProducts />
      },
      {
        path:"/products/new",element: <UpdateProduct/>
      },
      {
        path:"/basket",element: <MyBasket/>
      },
      {
        path:"/products/:id",element: <ProductDetail/>
      },
      {
        path:"/best10",element: <BestProdcuts/>
      }
    ]
  }

]);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
