import { Link } from 'react-router-dom'
import { useIsFetching } from '@tanstack/react-query'
import './navbar.css'

export const Navbar = () => {
  const isFetching = useIsFetching()

  return (
    <nav className='container'>
      <Link to='/'>Podcaster</Link>
      <div className={isFetching ? 'loader' : ''} />
    </nav>
  )
}
