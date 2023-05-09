import React from 'react'
import { motion } from "framer-motion"
import AnimationChar from '../animations/AnimationChar'




const About = () => {
  return (
    <div>
        <h1>ABOUT STOREKOM</h1>
        <div className="about__main">

            {/* OWNER  */}

            <motion.div className="about__owner"
                        initial={{ x: -1500}}
                        animate={{ x: 0 }}
                        transition={{ duration: 1.5, ease: "easeIn" }}
                        
            >

                <div className="owner__text">
                    <AnimationChar text="My name is mohamed ftiouach 28 years old, i am a buziness man" />
                </div>

                <div className="owner__profile">
                    <motion.div className="img"
                                drag
                                dragConstraints={{
                                    top: -50,
                                    left: -50,
                                    right: 50,
                                    bottom: 50,
                                  }}
                    >

                    </motion.div>
                </div>

            </motion.div>
            
            {/* DEVELOPPER  */}

            <motion.div className="about__dev"
                 initial={{ scale: 0, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ duration: 1.5, ease: "backOut" }}
                        
            >

                <div className="dev__text">
                <AnimationChar text="My name is youssef elainouni 31 years old, i am a full stack developper" />
                </div>

                <div className="dev__profile">
                    <motion.div className="img"
                                drag
                                dragConstraints={{
                                    top: -50,
                                    left: -50,
                                    right: 50,
                                    bottom: 50,
                                  }}
                    >
                        
                    </motion.div>
                </div>

            </motion.div>

            {/* MAP  */}

            <div className="map">

            </div>
        </div>
    </div>
  )
}

export default About