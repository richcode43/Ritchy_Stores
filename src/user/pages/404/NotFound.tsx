import { Link, NavLink } from "react-router-dom"


const NotFound = () => {
  return (
    <>
       <div className="notFound flex items-center justify-center h-screen text-bold text-2xl">
            <h1>404 - Page Not Found</h1>
       </div>
       <Link to="" reloadDocument replace>hello</Link>
       <NavLink  style={({ isActive }) => {
        return isActive ? {color:"red" } : {}
        }}
       to="" 
       >hello</NavLink>
    </>
  )
}

export default NotFound
