import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TaskContext () {
    const taskList = useLoaderData();
    const [tasks, setTasks] = useState();
  
    useEffect(() => {
      setTasks(taskList);
    }, [taskList]);
  
    return tasks
}