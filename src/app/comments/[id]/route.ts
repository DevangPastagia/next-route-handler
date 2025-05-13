import { comments } from "../faker/data";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const comment = comments.find((comment) => comment.id.toString() === id);
  return comment
    ? Response.json(comment)
    : Response.json({ error: "Comment not found" }, { status: 404 });
}
