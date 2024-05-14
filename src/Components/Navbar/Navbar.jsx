import './Navbar.css'


const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <p className='nav-logo'>
          SR HERO
        </p>
        <ul className='nav-ui'>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li className='nav-contact'>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar