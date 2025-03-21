"use client";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import style from "./style/Detail.module.scss";
export default function EmployeeDetails() {
  const router = useRouter();
  const params = useParams();
  // console.log(params.id);

  const { todos } = useSelector((state) => state.todos);
  // console.log(todos);

  const [employee, setEmployee] = useState({});
  // console.log(employee);
  console.log(employee.completed);

  useEffect(() => {
    const foundEmployee = todos.find((todo) => todo.id === Number(params.id));
    if (!foundEmployee) {
      router.push("/not-found");
    } else {
      setEmployee(foundEmployee);
    }
  }, [params.id, todos]);

  return (
    <div className={style.detail}>
      <h1>Employee Details</h1>
      <div className={style.content}>
        <p>
          <b>ID:</b> {employee.id}
        </p>
        <p>
          <b>Title:</b>
          {employee.title}
        </p>
        <p>
          <b>Completed Task:</b>
          {employee.completed ? "yes" : "No"}
        </p>
      </div>
      <button className={style.btn} onClick={() => router.back()}>
        Back to Dashboard
      </button>
    </div>
  );
}
