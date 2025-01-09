import { deleteItem } from "../features/cart/cartSlice";
import Button from "./Button";

import { useDispatch } from "react-redux";

function DeleteButton({ id }) {
  const dispatch = useDispatch();
  function handelClick() {
    dispatch(deleteItem(id));
  }
  return (
    <Button onClick={handelClick} type="small">
      Delete
    </Button>
  );
}

export default DeleteButton;
