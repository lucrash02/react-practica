import React from "react";
const CartWidget = () => {
  const itemCount = 1;

  return (
    <div className="cart-widget">
      🛒
      {itemCount > 0 && (
        <span className="notification-bubble">{itemCount}</span>
      )}
    </div>
  );
};
export default CartWidget;
