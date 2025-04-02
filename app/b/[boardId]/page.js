import Board from "@/models/Board";
import connectMongo from "@/libs/mongoose";
import { redirect } from "next/navigation";

// Separate function to find board without redirection
const findBoard = async (boardId) => {
  await connectMongo();
  try {
    return await Board.findById(boardId);
  } catch (error) {
    console.error("Error finding board:", error);
    return null;
  }
};

export default async function PublicFeedbackBoard({ params }) {
  // Ensure params is awaited as required by Next.js
  const resolvedParams = await params;
  const boardId = resolvedParams.boardId;

  try {
    // Find the board
    const board = await findBoard(boardId);

    // Check if board exists
    if (!board) {
      // Only redirect if board doesn't exist
      return redirect("/");
    }

    // Render the board if it exists
    return <main>{board.name} (public)</main>;
  } catch (error) {
    console.error("Error in page component:", error);
    // Use return redirect instead of calling redirect directly
    return redirect("/");
  }
}
