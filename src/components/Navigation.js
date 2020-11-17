import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

const Navigation= () =>{
    return(
        <div>
        <div className='navigation-title'>
            <h1 className='nav-title text-warning'>barefoot NOMAD</h1>
            <ul className='center-ele'>
            <form>
                <select className='lang-form'>
                    <option value="english">English</option>
                    <option value="kinyarwanda">Kinyarwanda</option>
                    <option value="français">Français</option>
                </select>
            </form>
            </ul>
        </div>
        
        <nav className="navbar navbar-expand-lg navbar-light custom-nav">
            <Link className="navbar-brand mr-5" to='/'>
                <img src={logo} alt='logo' className='logo'/>
            </Link>
            <button className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-5">
                    <li className="nav-item active">
                        <Link className="nav-link text-warning ml-4" to='/'>Home 
                            <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-warning ml-4" to='/'>Travel Tips</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-warning ml-4" to='/login'>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-warning ml-4" to='/'>Sign Up</Link>
                    </li>
                    <li className="nav-item text-warning">
                        <Link className="nav-link text-warning ml-4" to='/'>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-warning ml-4" to='/'>Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-warning ml-4" to='/'>
                            <button className='book-btn'>Book now</button>
                        </Link>
                    </li>
                    <input
                        type='search'
                        placeholder='&#xf002;'
                        className='search-input'
                    />
                                          
                </ul>
            </div>
        </nav>  
    </div>
        )
}
export default Navigation
