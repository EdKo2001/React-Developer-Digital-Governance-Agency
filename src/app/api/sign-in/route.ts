import axios from 'axios';

export async function POST(request: Request, response: Response) {
  try {
    const { email, password } = await request.json();
    const apiPath = 'http://localhost:3001/users';
    const res = await axios.get(apiPath);
    const user = res.data.find(
      (user: any) => user.email === email && user.password === password,
    );
    if (user) {
      return new Response(JSON.stringify({ message: 'User logged in' }), {
        headers: { 'content-type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ message: 'User not found' }), {
        headers: { 'content-type': 'application/json' },
      });
    }
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
}
