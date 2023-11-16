import {
  createBrowserRouter
} from "react-router-dom";
import { Home } from "./components/organism/Home";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: (
         <div>
          <Home/>
        </div>
      ),
    },
    {
      path: "/arma-tu-plan",
      element: <div>Arma tu plan</div>,
    },
    {
      path: "/gracias",
      element: <div>Gracias</div>,
    },
  ]);
  

