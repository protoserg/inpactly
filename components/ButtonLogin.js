import Link from "next/link";
const ButtonLogin = ({ isLoggedin, name }) => {
  if (isLoggedin) {
    return (
      <Link href="/dashboard" className="btn btn-primary">
        Welcome Back {name}!
      </Link>
    );
  }
  return <button>Login</button>;
};

export default ButtonLogin;
