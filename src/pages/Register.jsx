import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <div className='main__register'>
        <h1 className="register__title">Create Your Account</h1>
        <form className="register__form">
            <motion.input type="text" placeholder='Prénom *'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                required
            />
            <motion.input type="text" placeholder='Nom *'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 , delay: 1 }}
                required
            />
            <motion.input type="email" placeholder='Email *'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 , delay: 2 }}
                required
            />
                <motion.input type="password" placeholder='Password *'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 , delay: 3 }}
                required
            />
            <motion.input type="text" placeholder='Tel : 0667-xx-xx-xx'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 , delay: 4 }}
            />
            <motion.input type="text" placeholder='Ville *'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 , delay: 5 }}
                required
                min={3}
            />
            <motion.input type="text" placeholder='Addresse *'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 , delay: 6 }}
                required
                min={20}
            />
            <motion.button type='submit'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 , delay: 7 }}
            >Envoyer</motion.button>
        </form>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 , delay: 8 }}
        ><Link className="haveAccount" to="/login">Already have account? Login</Link>
        </motion.div>
    </div>
  )
}

export default Register