import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Signup from './Componets/Signup/Signup';
import Update from './Componets/Update/Update';
import Users from './Componets/Users/Users';
import Layout from './Layout/Layout';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Signup></Signup>
      },
      {
        path:'/update/:id',
        element:<Update></Update>
      },
      {
        path:'/users',
        element:<Users></Users>
      }
    ],
  }
]);

function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
