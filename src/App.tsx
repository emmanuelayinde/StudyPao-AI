import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/signin',
      element: <Login />
    }, 
    {
      path: '/signup',
      element: <Register />
    }
  ])

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
