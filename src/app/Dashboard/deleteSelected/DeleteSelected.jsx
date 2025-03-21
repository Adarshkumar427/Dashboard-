import React from "react";
import style from "./style/deleteSelected.module.scss";
import { deleteSelected } from "../../../lib/store/feature/todo/todoSlice";
import { useDispatch } from "react-redux";

const DeleteSelected = ({ selected, setSelected }) => {
  const dispatch = useDispatch();

  return (
    <>
      {selected > 0 && (
        <button
          className={style.btn}
          onClick={() => {
            dispatch(deleteSelected());
            setSelected(0);
            setTimeout(() => {
              alert("Selected items deleted successfully! 😮😮");
            }, 100);
          }}
        >
          Delete Selected
        </button>
      )}
    </>
  );
};
export default DeleteSelected;
