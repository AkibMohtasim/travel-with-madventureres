import React from 'react';



const OrderTable = ({ children, order, statusUpdateHandler }) => {

  const { adventureName, customerName, date, status, _id } = order;
  return (

    <tbody className='border'>
      <tr>
        <th>
          {children}
        </th>
        <td>
          <div className="flex items-center">
            <div className="font-bold">{customerName}</div>
          </div>
        </td>
        <td>
          {adventureName}
        </td>
        <td>{date}</td>
        <th>
          <button onClick={() => statusUpdateHandler(_id)} className="btn btn-ghost btn-xs">{status ? status : 'Pending'}</button>
        </th>
      </tr>
    </tbody>
  );
};

export default OrderTable;