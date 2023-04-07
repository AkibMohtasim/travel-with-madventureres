import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyOrders = () => {
  const { adventureName } = useLoaderData();
  return (
    <div>
      <h2>{adventureName}</h2>
    </div>
  );
};

export default MyOrders;