import React from 'react'
import classes from './LoginInput.module.css';

export default function LoginInput(props) {
  return (
    <input {...props} className={classes.loginBtn} />
  )
}
