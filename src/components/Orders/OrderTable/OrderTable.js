import React from 'react';



const OrderTable = ({ children, order, statusUpdateHandler }) => {

  const { adventureName, customerName, date, status, _id } = order;
  return (
    <table className="table w-full my-5">
      {/* head */}
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Adventure</th>
          <th>Starts From</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody className='border'>
        {/* row 1 */}
        <tr>
          <th>
            {children}
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div>
                <div className="font-bold">{customerName}</div>
              </div>
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
    </table>
  );
};

export default OrderTable;