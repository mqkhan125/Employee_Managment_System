import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeEmployeePopup } from "../../Store/Features/EmplyeePopup/popup.slice";

const EmployessPopup = () => {

   const popupState = useSelector((state) => state.popup.employeePopup);
   console.log(popupState)
   const dispatch = useDispatch();

   if(!popupState) return null;

  return (
    <div onClick={() => dispatch(closeEmployeePopup())} className="fixed top-10 left-0 w-full h-full bg-black/80 z-20 flex items-center justify-center p-4 ">
      <fieldset onClick={(e) => e.stopPropagation()} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Employee</legend>

        <label className="label">Profile</label>
        <input type="text" className="input" placeholder="Profile url" />

        <label className="label">Name</label>
        <input type="text" className="input" placeholder="Name" />

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <label className="label">Bio</label>
        <textarea name="bio" className="textarea h-24" placeholder="Bio"></textarea>

        <button className="btn btn-neutral mt-4">submit</button>
      </fieldset>
    </div>
  );
};

export default EmployessPopup;
