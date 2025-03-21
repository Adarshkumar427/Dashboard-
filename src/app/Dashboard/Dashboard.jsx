import React from "react";
import dashboard from "./style/dashboard.module.scss";
import Cards from "./cards/cards";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchTodos } from "../../lib/store/feature/todo/todoSlice";
import DeleteSelected from "./deleteSelected/DeleteSelected";
function Dashboard() {
  const dispatch = useDispatch();
  const { todos, loading } = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  const [searchId, setSearchId] = useState("");
  const [selected, setSelected] = useState(0);
  // console.log(typeof searchId);
  // console.log(todos);

  const filterTodos = searchId
    ? todos.filter((todo) => todo.id.toString() === searchId)
    : todos;
  return (
    <>
      <div className={dashboard.container}>
        <div className={dashboard.firstContent}>
          <h1>Employee Dashboard</h1>
          <p>Search the employee by their ID and view their details below</p>
          <input
            type="text"
            placeholder="enter emp id"
            onChange={(e) => setSearchId(e.target.value)}
          />
        </div>
        <div className={dashboard.secondContent}>
          <DeleteSelected setSelected={setSelected} selected={selected} />
          <div className={dashboard.cards}>
            {filterTodos.length > 0 ? (
              filterTodos.map((todo) => (
                <Cards key={todo.id} todo={todo} setSelected={setSelected} />
              ))
            ) : (
              <p
                style={{
                  marginTop: "20px",
                  color: "green",
                  marginInline: "auto",
                  fontSize: "35px",
                }}
              >
                Card not found!!
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
