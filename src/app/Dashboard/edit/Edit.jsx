import React from "react";
import style from "./style/edit.module.scss";
const Edit = ({ todo }) => {
  return (
    <div
      className={style.edit}
      onClick={(e) => {
        e.stopPropagation();
        console.log("Empolyee Id is :", todo.id);
      }}
    >
      Edit
    </div>
  );
};

export default Edit;
