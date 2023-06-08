import React from 'react';
import useAddClasses from '../../../hook/useAddClasses';
import Classes from '../../Home/classes/Classes';
import ShowSelectedClass from './ShowSelectedClass';
import useClasses from '../../../hook/useClasses';

const SelectedClass = () => {
  const [oneClass, refetch] = useClasses();

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className='bg-yellow-500 text-white'>
            <tr>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {oneClass.map((addClass, index) => (
              <ShowSelectedClass key={addClass._id} addClass={addClass} refetch={refetch} index={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
