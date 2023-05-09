import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='main__login'>
        <h1 className="login__title">Login</h1>
        <form className="login__form">
            <motion.input type="email" placeholder='Email'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                required
            />
            <motion.input type="password" placeholder='Password'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 , delay: 1 }}
            />
            <motion.button type='submit'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 , delay: 2 }}
            >Envoyer</motion.button>
        </form>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 , delay: 3 }}
        ><Link className="dontHaveAccount" to="/register">Create a new account now</Link>
        </motion.div>
    </div>
  )
}

export default Login