import "./Account.css"
import useAuth from "../../hooks/useAuth";

export default function Account() {
  const { auth } = useAuth();

  return (
    <div className="page">
      <h1>Account</h1>
      <h2>
        username: {auth.username}
      </h2>
    </div>
  );
}