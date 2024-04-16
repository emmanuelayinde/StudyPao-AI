import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Index from './pages/Board'
import BoardHome from './pages/Board/boardHome'
import FileUploadScreen from './pages/Board/fileUploadScreen'

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
    },
    {
      path: '/dashboard',
      element: <Index />,
      children: [
        {
          path: "/dashboard",
          element: <BoardHome />
        },
        {
          path: "upload-file",
          element: <FileUploadScreen />
        }
      ]
    }
  ])

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
