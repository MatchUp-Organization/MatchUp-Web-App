import "./Account.css"
import useAuth from "../../hooks/useAuth";
import PageHeader from "../../layouts/PageHeader/PageHeader";

export default function Account() {
  const { auth } = useAuth();

  return (
    <>
      <PageHeader />
      <div className="page">
        <h1>Account</h1>
        <h2>
          username: {auth.username}
        </h2>
      </div>
    </>
  );
}