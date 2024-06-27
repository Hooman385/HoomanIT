import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function FilledCartRight() {
  const cartProducts = useSelector((store) => store.cart.products);

  return (
    <div className="flex flex-col min-h-[249px] md:max-w-[70%] gap-5 bg-white shadow-xl rounded-[5px] py-1 px-3 w-full md:p-5">
      {cartProducts?.map((item) => (
        <CartItem
          key={item.title}
          title={item.title}
          color={item.color}
          quantity={item.quantity}
          price={item.price}
          image={item.image.url}
          warranty={item.warranty}
          warrantyName={item.warrantyName}
          id={item.id}
        />
      ))}
    </div>
  );
}

export default FilledCartRight;
