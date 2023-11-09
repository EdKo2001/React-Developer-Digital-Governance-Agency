import axios from "axios";

export async function PUT(request: Request, { params }: any) {
  try {
    const newcourse = await request.json();
    const id = params.id;
    if (!id) {
      return new Response(JSON.stringify({ error: "Missing id" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }
    const update = "http://localhost:3001/courses/" + id;

    await axios.put(update, newcourse);
    const res = await axios.get(update);
    const data = res?.data;
    return new Response(
      JSON.stringify({ message: "Course  updated", data: data }),
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
