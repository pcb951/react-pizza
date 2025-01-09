import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="my-10 px-4 py-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="my-10 font-semibold text-red-400">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
