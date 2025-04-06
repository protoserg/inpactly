import Link from "next/link";

export default async function Success() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <h1 className="text-2xl font-bold">Thank you for your purchase!</h1>
      <Link href="/dashboard" className="btn btn-primary ">
        Go to dashboard
      </Link>
    </div>
  );
}
