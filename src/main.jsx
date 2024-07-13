import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Box from './components/Box.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

const router = createBrowserRouter([

{path:'/',
  element:<Box/>
},
{
  path:'/app',
  element:<App/>
}


])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
 domain="dev-ksmttvco0yi5zaia.us.auth0.com"
 clientId="kOlLIDPYernW8rS6OG17rPaQcgU7j6Wf"
 authorizationParams={{
   redirect_uri: "https://client-delta-peach.vercel.app/app"
 }}
  >
   <RouterProvider router={router} />
   </Auth0Provider>
  </React.StrictMode>,
)
