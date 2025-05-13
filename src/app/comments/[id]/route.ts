import { redirect } from "next/navigation";
import { comments } from "../faker/data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id.toString() === id);

  return comment ? Response.json(comment) : redirect("/comments/api");
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const { text } = body;

  const index = comments.findIndex((comment) => comment.id.toString() === id);

  comments[index] = {
    ...comments[index],
    text,
  };

  return Response.json(comments[index]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  let deletedComment = {};
  const index = comments.findIndex((comment) => comment.id.toString() === id);
  deletedComment = comments[index];

  if (index === -1) {
    return Response.json({ error: "Comment not found" }, { status: 404 });
  }

  comments.splice(index, 1);

  return Response.json(deletedComment, { status: 200 });
}
