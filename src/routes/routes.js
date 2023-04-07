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
        loader: ({ params }) => fetch(`http://localhost:5000/api/adventures/${params.id}`),
        element: <AdventureDetails />
      },
      {
        path: '/placeOrder/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/api/adventures/${params.id}`),
        element: <PrivateRoute>
          <PlaceOrder />
        </PrivateRoute>
      },
      {
        path: '/orders',
        loader: () => fetch('http://localhost:5000/api/orders'),
        element: <PrivateRoute>
          <AllOrders />
        </PrivateRoute>
      },
      {
        path: '/orders/:orderEmail',
        loader: ({ params }) => fetch(`http://localhost:5000/api/orders/${params.orderEmail}`),
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
      }

    ]
  }
])


export default router;