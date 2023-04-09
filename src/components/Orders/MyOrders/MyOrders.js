import React, { useContext, useEffect, useState } from 'react';
import OrderTable from '../OrderTable/OrderTable';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import { FaTrashAlt } from "react-icons/fa";




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

  const statusUpdateHandler = () => {
    alert('Our Admin can change the status');
  }

  return (
    <table className="table-auto w-full my-10">
      <thead>
        <tr>
          <th></th>
          <th>Adventurer's Name</th>
          <th>Adventure</th>
          <th>Starts From</th>
          <th>Status</th>
        </tr>
      </thead>
      {
        orders.map(order => <OrderTable
          key={order._id}
          order={order}
          statusUpdateHandler={statusUpdateHandler}
        >
          <th>
            <label>
              <button onClick={() => orderDeleteHandler(order._id)}>
                <FaTrashAlt />
              </button>
            </label>
          </th>
        </OrderTable>)
      }
    </table>
  );
};

export default MyOrders;