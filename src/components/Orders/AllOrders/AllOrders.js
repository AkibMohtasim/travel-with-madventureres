import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllOrders = () => {
  const orders = useLoaderData();
  return (
    <div>
      {
        orders.map(order =>
          <div key={order._id}>
            <h2>{order.customerName}</h2>
          </div>)
      }
    </div>
  );
};

export default AllOrders;