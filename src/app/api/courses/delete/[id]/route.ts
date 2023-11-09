import axios from 'axios';

export async function DELETE(request: Request, { params }: any) {
  try {
    const id = params.id;
    const DELETE = 'http://localhost:3001/courses/' + id;

    await axios.delete(DELETE);
    return new Response(JSON.stringify({ message: 'Course  deleted' }), {
      headers: { 'content-type': 'application/json' },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
}
