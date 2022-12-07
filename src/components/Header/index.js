// Write your JS code here

import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-link">
    <Link to="/" className="link-item">
      Home
    </Link>
    <Link to="/about" className="link-item">
      About
    </Link>
  </nav>
)

export default Header
