import { redirect } from "react-router-dom";

export const handleAddTask = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  try {
    const response = await fetch("http://localhost:5000/addTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    await response.json();
    if (response.ok) {
      return redirect("/");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong.");
  }
};

export const handleGetTasks = async () => {
  try {
    const response = await fetch("http://localhost:5000/getTasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const tasks = await response.json();
    if (response.ok) {
      return tasks;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong.");
  }
};
