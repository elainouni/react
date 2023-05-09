import React from 'react'
import { motion } from "framer-motion"
import pr6 from '../assets/pr6.jpg';




const Products = () => {
  return (
    <div className='main__products'>
        <h1>ALL OUR PRODUCTS ARE HERE</h1>

        <div className="container">
            <motion.div className="product__card"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
            >
                <h3 className="title">Product Name</h3>
                <div className="product__img">
                    <img src={pr6} alt="" />
                </div>
                <div className="see">
                    <a href="#" className="see_link">See Details</a>
                </div>
            </motion.div>

            <motion.div className="product__card"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
            >
                <h3 className="title">Product Name</h3>
                <div className="product__img">
                    <img src={pr6} alt="" />
                </div>
                <div className="see">
                    <a href="#" className="see_link">See Details</a>
                </div>
            </motion.div>

            <motion.div className="product__card"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
            >
                <h3 className="title">Product Name</h3>
                <div className="product__img">
                    <img src={pr6} alt="" />
                </div>
                <div className="see">
                    <a href="#" className="see_link">See Details</a>
                </div>
            </motion.div>

            <motion.div className="product__card"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
            >
                <h3 className="title">Product Name</h3>
                <div className="product__img">
                    <img src={pr6} alt="" />
                </div>
                <div className="see">
                    <a href="#" className="see_link">See Details</a>
                </div>
            </motion.div>

            <motion.div className="product__card"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
            >
                <h3 className="title">Product Name</h3>
                <div className="product__img">
                    <img src={pr6} alt="" />
                </div>
                <div className="see">
                    <a href="#" className="see_link">See Details</a>
                </div>
            </motion.div>

            <motion.div className="product__card"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
            >
                <h3 className="title">Product Name</h3>
                <div className="product__img">
                    <img src={pr6} alt="" />
                </div>
                <div className="see">
                    <a href="#" className="see_link">See Details</a>
                </div>
            </motion.div>

            <motion.div className="product__card"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
            >
                <h3 className="title">Product Name</h3>
                <div className="product__img">
                    <img src={pr6} alt="" />
                </div>
                <div className="see">
                    <a href="#" className="see_link">See Details</a>
                </div>
            </motion.div>

            <motion.div className="product__card"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
            >
                <h3 className="title">Product Name</h3>
                <div className="product__img">
                    <img src={pr6} alt="" />
                </div>
                <div className="see">
                    <a href="#" className="see_link">See Details</a>
                </div>
            </motion.div>

            <motion.div className="product__card"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
            >
                <h3 className="title">Product Name</h3>
                <div className="product__img">
                    <img src={pr6} alt="" />
                </div>
                <div className="see">
                    <a href="#" className="see_link">See Details</a>
                </div>
            </motion.div>

            <motion.div className="product__card"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
            >
                <h3 className="title">Product Name</h3>
                <div className="product__img">
                    <img src={pr6} alt="" />
                </div>
                <div className="see">
                    <a href="#" className="see_link">See Details</a>
                </div>
            </motion.div>
            
            
        </div>
    </div>
  )
}

export default Products