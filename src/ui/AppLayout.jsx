import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";
import SearchOrder from "../features/order/SearchOrder";

function AppLayout() {
  const status = useNavigation();

  const isLoading = status.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <SearchOrder />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
