
import './App.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import Home from './Pages/Home/Home';

function App() {
  

  return (
    
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
