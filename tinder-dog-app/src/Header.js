import React from 'react'
import './Header.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import IconButton from '@mui/material/IconButton';
import logo from'./TINDog.png'

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <AccountBoxIcon className='header__icon' fontSize='large'/>
        </IconButton>
        <img className='header__logo' src={logo} alt='logo'/>
        <IconButton>
            <QuestionAnswerIcon className='header__icon' fontSize='large'/>
        </IconButton>
        
    </div>
  )
}

export default Header