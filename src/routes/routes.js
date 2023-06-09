import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home/Home";
import Adventures from "../components/Adventures/Adventures/Adventures";
import AdventureDetails from "../components/Adventures/AdventureDetails/AdventureDetails";
import PlaceOrder from "../components/Orders/PlaceOrder/PlaceOrder";
import AllOrders from "../components/Orders/AllOrders/AllOrders";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import MyOrders from "../components/Orders/MyOrders/MyOrders";
import PrivateRoute from "./PrivateRoute";
import AddNewAdventure from "../components/Adventures/AddNewAdventure/AddNewAdventure";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/adventures',
        element: <Adventures />
      },
      {
        path: '/adventures/:id',
        loader: ({ params }) => fetch(`https://travel-with-madventurers-server.vercel.app/api/adventures/${params.id}`),
        element: <AdventureDetails />
      },
      {
        path: '/placeOrder/:id',
        loader: ({ params }) => fetch(`https://travel-with-madventurers-server.vercel.app/api/adventures/${params.id}`),
        element: <PrivateRoute>
          <PlaceOrder />
        </PrivateRoute>
      },
      {
        path: '/orders',
        element: <PrivateRoute>
          <AllOrders />
        </PrivateRoute>
      },
      {
        path: '/orders/:orderEmail',
        element: <PrivateRoute>
          <MyOrders />
        </PrivateRoute>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/myorders',
        element:
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
      },
      {
        path: '/addnewadventure',
        element: <PrivateRoute>
          <AddNewAdventure />
        </PrivateRoute>
      }

    ]
  }
])


export default router;