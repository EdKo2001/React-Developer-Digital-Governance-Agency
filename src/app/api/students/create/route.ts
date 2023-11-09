import axios from 'axios';

export async function POST(request: Request, response: Response) {
  try {
    const create = 'http://localhost:3001/students';
    const get = 'http://localhost:3001/students';
    const newStudent = await request.json();

    const students = await axios.get(get);

    if (
      students?.data?.find((student: any) => {
        return student.personal_number == newStudent.personal_number;
      })
    ) {
      return new Response(
        JSON.stringify({ message: 'Student already exists' }),
        {
          headers: { 'content-type': 'application/json' },
        },
      );
    }

    await axios.post(create, newStudent);
    return new Response(JSON.stringify({ message: 'Student created' }), {
      headers: { 'content-type': 'application/json' },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
}
