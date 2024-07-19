import { Link } from "react-router-dom"
import PageHeader from "../../layouts/PageHeader/PageHeader"
import BuildImage from "../../assets/404.svg";
import "./Missing.css"

export default function Missing() {
  return (
    <>
      <Link to="/index" className="missingpage">
        <img src={BuildImage} alt="" className="missingpage-image" />
        <p className="missingpage-text">Cooming soon (click to go back)</p>
      </Link>
    </>
  )
}