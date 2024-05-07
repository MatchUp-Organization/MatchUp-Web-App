import { Link } from "react-router-dom"
import PageHeader from "../../layouts/PageHeader/PageHeader"

export default function Missing() {
  return (
    <>
      <PageHeader />
      <div>
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/">Go back home</Link>
      </div>
    </>
  )
}