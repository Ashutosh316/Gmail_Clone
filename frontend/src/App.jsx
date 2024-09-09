import { React } from 'react'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Navbar from './components/navvar'
import Sidebar from './components/sidebar'
import Inbox from './components/inbox'
import { Children } from 'react'
import Body from './components/body'
import Mail from './components/mail'
import Sendemail from './components/sendemail'
import Login from './components/login'
import Signup from './components/signup'
import { Toaster } from 'react-hot-toast';


const appRouter = createBrowserRouter([{

  path:"/",
  element:<Body/>,
  children:[
    {
       path: "/",
       element:<Inbox/>
    },

    {
      path: "/mail/:id",
      element:<Mail/>
   },


  ]

},

{
  path:"/login",
  element:<Login/>
},

{
  path:"/signup",
  element:<Signup/>
}

])

function App() {


  return (
    <div className='bg-[#F6F8FC] h-screen'>
     
      <RouterProvider router={appRouter}/>
      <div className='absolute w-[30%] bottom-0 right-20 z-10'>
        <Sendemail/>
      </div>
      <Toaster />

    </div>
  )
}

export default App
