import Board from "@/models/Board";
import connectMongo from "@/libs/mongoose";
import { redirect } from "next/navigation";

const getBoard = async (boardId) => {
  // Connect to MongoDB first
  await connectMongo();

  // Now find the board
  const board = await Board.findById(boardId);
  if (!board) {
    redirect("/");
  }
  return board;
};
export const dynamic = "force-dynamic";

export default async function PublicFeedbackBoard({ params }) {
  const { boardId } = await params;
  const board = await getBoard(boardId);
  return <main>{board.name} (Public)</main>;
}
