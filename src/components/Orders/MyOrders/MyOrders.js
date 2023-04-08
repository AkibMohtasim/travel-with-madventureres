import React, { useContext, useEffect, useState } from 'react';
import OrderTable from '../OrderTable/OrderTable';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';




const MyOrders = () => {

  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  useTitle('My Orders');

  useEffect(() => {
    fetch(`http://localhost:5000/api/orders/${user.email}`)
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [user?.email])

  const orderDeleteHandler = id => {
    const proceed = window.confirm('Are you sure you want to delete?');

    if (proceed) {
      fetch(`http://localhost:5000/api/orders/${id}`, {
        method: 'delete'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data) {
            const remaining = orders.filter(odr => odr._id !== id);
            setOrders(remaining);
            alert('deleted successfully');
          }
        })
        .catch(err => console.error(err.message))
    }
  }

  return (
    <div className="overflow-x-auto w-full">
      {
        orders.map(order => <OrderTable
          key={order._id}
          order={order}
        >
          <th>
            <label>
              <button onClick={() => orderDeleteHandler(order._id)} className="btn btn-circle btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </label>
          </th>
        </OrderTable>)
      }
    </div>
  );
};

export default MyOrders;