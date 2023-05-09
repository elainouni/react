import React from 'react'
import { motion } from "framer-motion"


const Contact = () => {
  return (
    <div className='main__contact'>
        <h1 className="contact__title">Contact Us</h1>
        <form className="contact__form">
            <motion.input type="text" placeholder='Prénom'
                initial={{ x: -1500}}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
            />
            <motion.input type="email" placeholder='Email'
                initial={{ x: -1500}}
                animate={{ x: 0 }}
                transition={{ duration: 1.5 }}/>
            <motion.input type="text" placeholder='Tel : 0667-xx-xx-xx'
                initial={{ x: -1500}}
                animate={{ x: 0 }}
                transition={{ duration: 2 }}
            />
            <motion.textarea placeholder='Message...'
                initial={{ x: -1500}}
                animate={{ x: 0 }}
                transition={{ duration: 2.5 }}
            />
            <motion.button type='submit'
                initial={{ x: -1500}}
                animate={{ x: 0 }}
                transition={{ duration: 3 }}
            >Envoyer</motion.button>
        </form>
    </div>
  )
}

export default Contact