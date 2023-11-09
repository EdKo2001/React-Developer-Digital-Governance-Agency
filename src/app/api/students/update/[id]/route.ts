import axios from "axios";

export async function PUT(request: Request, { params }: any) {
  try {
    const newStudent = await request.json();
    const id = params.id;
    const update = "http://localhost:3001/students/" + id;

    await axios.put(update, newStudent);
    const res = await axios.get(update);
    const data = res?.data;
    return new Response(
      JSON.stringify({ message: "Student  updated", data: data }),
      {
        headers: { "content-type": "application/json" },
      }
    );
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}
