import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'
import logo from '../assets/logo-mark.webp'

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <img src={logo} alt="SK All In One Tradie" />
        <h1>404</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary">
          <FaArrowLeft /> Back To Home
        </Link>
      </div>
    </section>
  )
}
