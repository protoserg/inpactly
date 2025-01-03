import Link from "next/link";
const ButtonLogin = ({ isLoggedin, name, extraStyle }) => {
  if (isLoggedin) {
    return (
      <Link
        href="/dashboard"
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}  `}
      >
        Welcome Back {name}!
      </Link>
    );
  }
  return <button>Login</button>;
};

export default ButtonLogin;
