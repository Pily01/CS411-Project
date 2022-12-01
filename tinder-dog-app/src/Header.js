import React from 'react'
import './Header.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

function Header() {
  return (
    <div className='header'>
        <AccountBoxIcon/>
        <h1> I am the main header</h1>
        <QuestionAnswerIcon/>
    </div>
  )
}

export default Header