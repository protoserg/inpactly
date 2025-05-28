import Link from "next/link";
import ButtonLogout from "@/components/ButtonLogout";
import FormNewBoard from "@/components/FormNewBoard";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
// eslint-disable-next-line no-unused-vars
import Board from "@/models/Board";
import ButtonCheckout from "@/components/ButtonCheckout";
async function getUser() {
  const session = await auth();

  await connectMongo();
  return await User.findById(session.user.id).populate("boards");
}

export default async function Dashboard() {
  const user = await getUser();

  return (
    <main className="bg-base-200 min-h-screen">
      <section className="bg-base-100">
        <div className="max-w-5xl mx-auto  px-5 py-3 flex justify-between"></div>
        {!user.hasAccess && <ButtonCheckout />}

        <ButtonLogout />
      </section>
      <section className="max-w-5xl mx-auto px-5 py-12 space-y-12">
        <FormNewBoard />
        <div>
          <h1 className="font-extrabold text-xl mb-4">
            {user.boards.length} boards
          </h1>
          <ul className="space-y-4">
            {user.boards.map((board) => (
              <li key={board._id}>
                <Link
                  className="block bg-base-100 p-6 rounded-3xl hover:bg-neutral hover:text-neutral-content duration-300"
                  href={`/dashboard/b/${board._id}`}
                >
                  {board.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
