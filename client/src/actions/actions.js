import { redirect } from "react-router-dom"

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

  const task = await response.json();
  console.log("task", task)
  } catch (error) {
    console.log(error)
    throw new Error ("Something went wrong.")
  }

return redirect("/")
};

