import React from 'react';

const ShowSelectedClass = ({ addClass }) => {
  console.log(addClass);
  const { _id, image, name, enrolled_students, activities, available_sits, instructor } = addClass;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        {instructor}
        <br />
        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
      </td>
      <td>Purple</td>
      <td>
        <button className="btn btn-ghost bg-yellow-500 btn-xs mx-2">delete</button>
        <button className="btn btn-ghost bg-yellow-500 btn-xs">payment</button>
      </td>
    </tr>
  );
};

export default ShowSelectedClass;
