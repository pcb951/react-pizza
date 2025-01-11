import { useSelector } from "react-redux";
import DeleteButton from "../../ui/DeleteButton";
import { formatCurrency } from "../../utils/helpers";
import UpdateQuantities from "./UpdateQuantities";
import { getItemById } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getItemById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateQuantities id={pizzaId} currentQuantity={currentQuantity} />

        <DeleteButton id={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
