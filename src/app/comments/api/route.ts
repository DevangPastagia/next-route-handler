import { comments } from "../faker/data";

export async function GET() {
  return Response.json(comments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    ...comment,
    id: crypto.randomUUID(),
    text: comment.text.trim(),
  };
  comments.push(newComment);
  return Response.json(newComment, {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
