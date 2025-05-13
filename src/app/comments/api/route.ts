import { NextRequest } from "next/server";
import { comments } from "../faker/data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const filteredComments = query
    ? comments.filter((comment) =>
        comment.text.toLowerCase().includes(query.toLowerCase())
      )
    : comments;

  return Response.json(filteredComments);
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
