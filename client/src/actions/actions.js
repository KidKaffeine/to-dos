import { redirect } from "react-router-dom"

export const handleAddTask = async ({ request }) => {
const data = Object.fromEntries(await request.formData())
console.log(data)
return redirect("/")
}