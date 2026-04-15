import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeDeletePopup } from '../../Store/Features/EmplyeePopup/popup.slice';

const EmployeeDeletePopus = () => {

    const deletePopupState = useSelector((state) => state.popup.deletePopup);
    const dispatch = useDispatch();
    if(!deletePopupState) return null;

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black/80 z-20 flex items-center justify-center'>
    <div className="card w-96 bg-base-100 card-md shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Delete Employee</h2>
        <p>
          Are you sure you want to delete this employee?
        </p>
        <div className="flex m-2 justify-between card-actions">
          <button className="btn btn-primary">Yes</button>
          <button className="btn btn-secondary" onClick={() => dispatch(closeDeletePopup())}>No</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default EmployeeDeletePopus