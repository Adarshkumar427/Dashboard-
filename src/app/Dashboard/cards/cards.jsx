import React from "react";
import style from "./style/cards.module.scss";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Delete from "../delete/Delete";
import Edit from "../edit/Edit";
import { toggleSelect } from "../../../lib/store/feature/todo/todoSlice";
import { useRouter } from "next/navigation";

const cards = ({ todo, setSelected }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedTodos = useSelector((state) => state.todos.selectedTodos);
  const isSelected = selectedTodos.includes(todo.id);
  const handleCheckboxChange = (e) => {
    e.stopPropagation();
    dispatch(toggleSelect(todo.id));
    setSelected((prevCount) => (isSelected ? prevCount - 1 : prevCount + 1));
  };
  return (
    <div
      className={style.container}
      style={{
        background: isSelected ? "#B8CBEE" : "white",
        border: isSelected ? "2px solid #5290FA" : "2px solid black",
      }}
      onClick={(e) => {
        router.push(`../../employee/${todo.id}`);
      }}
    >
      <div className={style.icons}>
        <FaRegUserCircle className={style.icon} />
        <input
          style={{ cursor: "pointer" }}
          type="checkbox"
          checked={isSelected}
          onClick={(e) => e.stopPropagation()}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className={style.title}>
        {todo.title.length > 15 ? todo.title.slice(0, 20) + "..." : todo.title}
      </div>
      <div className={style.buttons}>
        <Delete todo={todo} />
        <Edit todo={todo} />
      </div>
    </div>
  );
};

export default cards;
