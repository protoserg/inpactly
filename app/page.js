import ButtonLogin from "@/components/ButtonLogin";
export default function Home() {
  const isLoggedin = true;
  const name = "Sergio";
  return (
    <main>
      {/* HEADER */}
      <section className="bg-base-200 ">
        <div className="max-w-3xl mx-auto  flex justify-between  items-center px-8 py-2">
          <div className="font-bold">Saas</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Features</a>
          </div>

          <div>
            <ButtonLogin isLoggedin={isLoggedin} name={name} />
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className=" text-center py-32 px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6  ">
          Collect customer feedback to build better products
        </h1>
        <div className="opacity-90 text-lg">
          Create a feedback board in minutes, prioritize features, and build
          products your customers will love.
        </div>
        <div className=" mt-8">
          <ButtonLogin isLoggedin={isLoggedin} name={name} />
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-base-200">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            A pricing that adapts to your needs
          </h2>
        </div>
        <div className="bg-base-100 p-8 max-w-96 rounded-3xl mx-auto space-y-6">
          <div className="flex gap-2 items-baseline">
            <div className="text-4xl font-black">$19</div>
            <div className="uppercase text-sm font-medium opacity-60">
              /month
            </div>
          </div>
          <ul className="space-y-2 ">
            <li className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 text-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                />
              </svg>
              Collect customer feedback
            </li>
            <li className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 text-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                />
              </svg>
              Unlimited boards
            </li>
            <li className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 text-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                />
              </svg>
              Admin dashboard
            </li>
            <li className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 text-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                />
              </svg>
              24/7 support
            </li>
          </ul>
          <ButtonLogin isLoggedin={isLoggedin} name={name} />
        </div>
      </section>
    </main>
  );
}
