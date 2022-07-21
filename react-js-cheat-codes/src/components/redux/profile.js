import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { saveForm, clearForm } from "./reducers/formSlice";

const Profile = () => {
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h2>Profile Page</h2>
        <p>Name: {form.formValues?.name}</p>
        <p>Email: {form.formValues?.email}</p>
        <span>
          <button
            onClick={() => {
              dispatch(
                saveForm({ name: "Chandan", email: "chandan@gmail.com" })
              );
            }}
          >
            Login
          </button>
          &nbsp;
          <button
            onClick={() => {
              dispatch(clearForm());
            }}
          >
            Logout
          </button>
        </span>
      </div>
    </>
  );
};

export default Profile;
