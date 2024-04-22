import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const logout = () => {
        localStorage.removeItem("isLogin")
        window.location.href = "/"
    }
  return (
    <>
        <nav className="container navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                <ul className="navbar-nav">
                    {
                        JSON.parse(localStorage.getItem("isLogin")) != true ?
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/login"}>Login</Link>
                            </li>
                        :
                        <>
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/home"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/about"}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/contact"}>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/gallery"}>Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/information"}>Information</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/information/react"}>React</Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link active" onClick={() => logout()}>Logout</button>
                            </li>
                        </>
                    }
                </ul>
                </div>
            </div>
        </nav> 
    </>
  )
}

export default Header
