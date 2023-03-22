import React, {useContext} from 'react'
import {Link} from "react-router-dom"
import {AuthContext} from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className="navbar">
      <div className="navbar_links">
        <MyButton onClick={logout}>
          Выход
        </MyButton>
        <Link to="/about">О сайте</Link>
        <br/>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  )
}

export default Navbar
