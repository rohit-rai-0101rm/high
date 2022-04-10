import React from 'react'
import brand from '../../images/abc-logo.png'
import logo from '../../images/hrc-logo.png'
import './Header.css'
const Header = () => {
    return (
        <div>
        <div className='header'>

            <div className='brand'>
                <h1>ABC PRODUCTS</h1>
            </div>
            <div className='logo'>
                <img className='logoImg' src={logo} />
            </div>
            
        </div>
        <h1 className='heading'>Invoice List</h1>
        
        </div>

    )
}

export default Header