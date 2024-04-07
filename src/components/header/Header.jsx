import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import UserDropdown from './UserDropdown'


const Header = () => {
  const auth = useSelector((states) => states.auth)

  return (
    <header className="navbar sticky min-h-20 top-0 backdrop-blur-sm bg-base-300/90 z-40">
      <nav className="container mx-auto">
        <div className="flex-1">
          <Link to={"/"} className="text-3xl md:text-4xl">DiskusiYUK</Link>
        </div>
        <div className="flex items-center gap-2">
          <Link className="mr-4" to="/leaderboard">Leaderboard</Link>
          {
            auth ?
              <UserDropdown auth={auth} />
              :
              <Link to="/login" className="btn btn-info btn-sm">Login</Link>
          }
        </div>
      </nav>
    </header>
  )
}


export default Header