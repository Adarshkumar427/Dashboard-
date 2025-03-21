import React from "react";
import style from "./style/delete.module.scss";
import { useDispatch } from "react-redux";
import { deleteTodo } from "@/lib/store/feature/todo/todoSlice";
const Delete = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.stopPropagation();
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      dispatch(deleteTodo(todo.id));
    }
  };
  return (
    <div className={style.del} onClick={handleDelete}>
      Delete
    </div>
  );
};

export default Delete;
