import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Index from "./pages/Board";
import BoardHome from "./pages/Board/boardHome";
import FileUploadScreen from "./pages/Board/fileUploadScreen";
import Category from "./pages/Board/Category/category";
import Ai from "./pages/Board/Category/ai";
import ProtectedRoute from "./utils/protectedRoute";
import Quizz from "./pages/Board/Quizz/quizz";
import PdfPreview from "./pages/Board/Quizz/pdfPreview";
import Obj from "./pages/Board/Quizz/obj";
import Cards from "./pages/Board/Quizz/cards";
import Theories from "./pages/Board/Quizz/theories";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signin",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <Index />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/dashboard",
          element: <BoardHome />,
        },
        {
          path: "upload-file",
          element: <FileUploadScreen />,
        },
        {
          path: "category",
          element: <Category />,
        },
        {
          path: "category/pao",
          element: <Ai />,
        },
        {
          path: "category/quizz",
          element: <Quizz />,
        },
        {
          path: "category/quizz/preview",
          element: <PdfPreview />
        },
        {
          path: "category/quizz/mcq",
          element: <Obj />
        },
        {
          path: "category/quizz/flashcards",
          element: <Cards />
        },
        {
          path: "category/quizz/theory",
          element: <Theories />
        }
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
