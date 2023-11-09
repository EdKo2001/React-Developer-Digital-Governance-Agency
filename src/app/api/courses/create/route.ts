import axios from "axios";

export async function POST(request: Request, response: Response) {
  try {
    const create = "http://localhost:3001/courses";
    const newCourse = await request.json();

    await axios.post(create, newCourse);
    return new Response(JSON.stringify({ message: "Course created" }), {
      headers: { "content-type": "application/json" },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}
