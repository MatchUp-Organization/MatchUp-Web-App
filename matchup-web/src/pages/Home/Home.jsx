import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import PageHeader from "../../layouts/PageHeader/PageHeader";

export default function Home() {
  return (
    <>
      <PageHeader />
      <div className="page-container flex items-center justify-center h-screen">
        <div className="flex items-center justify-center h-96">
          <p className="text-5xl">Welcome to Matchup!</p>
        </div>
      </div>
    </>
  )
}