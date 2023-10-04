import React from 'react';

interface OrderProps {
  onOrderClick: () => void;
}

const Order: React.FC<OrderProps> = ({ onOrderClick }) => {
  return (
    <button className="order-button" onClick={onOrderClick}>
      Order
    </button>
  );
}

export default Order;
