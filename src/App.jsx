import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import { action as updateOrderAction } from "./features/order/UpdateOrder";
import AppLayout from "./ui/AppLayout";
import Loader from "./ui/Loader";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    hydrateFallbackElement: <Loader />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        errorElement: <Error />,
        element: <Menu />,
        loader: menuLoader,
        hydrateFallbackElement: <Loader />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        errorElement: <Error />,
        element: <CreateOrder />,
        action: createOrderAction,
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "/order/:orderId",
        errorElement: <Error />,
        element: <Order />,
        loader: orderLoader,
        hydrateFallbackElement: <Loader />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
