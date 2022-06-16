import { Fragment } from "react";
import KeepItem from "./KeepItem";
import { tempCartList, tempCartType } from "../../store/cartList";
import { useRecoilValue } from "recoil";

const KeepItems = () => {
  const tempCart = useRecoilValue(tempCartList);

  let content = <p style={{ fontSize: "40px", textAlign: "center" }}>Empty</p>;
  if (tempCart.length > 0) {
    content = (
      <Fragment>
        {tempCart.map(
          (obj: tempCartType, index: number): JSX.Element => (
            <Fragment key={index}>
              <KeepItem {...obj} />
            </Fragment>
          )
        )}
      </Fragment>
    );
  }
  return <Fragment>{content}</Fragment>;
};

export default KeepItems;
