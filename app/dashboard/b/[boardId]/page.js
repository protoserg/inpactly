import Board from "@/models/Board";
import connectMongo from "@/libs/mongoose";
import {redirect} from "next/navigation";
import {auth} from "@/auth";

const getBoard = async (boardId) => {
    const session = await auth();
    if (!session?.user) {
        redirect("/auth/signin");
    }
    
    await connectMongo();

    const board = await Board.findOne({
        _id: boardId,
        userId: session.user.id
    });
    if (!board) {
        redirect("/dashboard");
    }
    return board;
};

export default async function FeedbackBoard({params}) {
    const boardId = await params.boardId;
    const board = await getBoard(boardId);
    return (
        <main>{board.name}</main>
    )
}

