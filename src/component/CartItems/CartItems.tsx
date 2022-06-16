import { Fragment } from "react";
import { useCartData } from "../../hooks/useCartData";
import CartItem from "./CartItem";

const CartItems = () => {
  const { status, data } = useCartData();
  let content;

  if (status === "loading") {
    content = <p>Loading...</p>;
  }
  if (status === "error") {
    content = <p>Error</p>;
  }
  if (status === "success") {
    if (data.data.cart.length > 0) {
      content = (
        <Fragment>
          {data.data.cart.map(
            (
              obj: {
                id: number;
                title: string;
                content: string;
              },
              index: number
            ): JSX.Element => (
              <Fragment key={index}>
                <CartItem {...obj} />
              </Fragment>
            )
          )}
        </Fragment>
      );
    } else {
      content = <p style={{ fontSize: "40px", textAlign: "center" }}>Empty</p>;
    }
  }
  return <Fragment>{content}</Fragment>;
};
export default CartItems;
