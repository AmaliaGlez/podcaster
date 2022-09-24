import { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <nav>
      <Link to='/'>Podcaster</Link>
      <div className={isLoading && 'loader'} />
    </nav>
  )
}
