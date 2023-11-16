import {
  createBrowserRouter
} from "react-router-dom";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: (
         <div>
          <h1>Home</h1>
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
  

