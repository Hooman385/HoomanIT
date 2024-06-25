import PersistGateProvider from "@/redux/features/providers/PersistGateProvider";
import AddToCartModule from "./AddToCartModule";
import CartProvider from "@/redux/features/providers/CartProvider";

function AddToCart({ title, image, price, quantity, warranty, color, id , warrantyName}) {
  return (
    
        <AddToCartModule
          title={title}
          image={image}
          quantity={quantity}
          price={price}
          color={color}
          warranty={warranty}
          warrantyName={warrantyName}
          id={id}
        />
    
  );
}

export default AddToCart;


