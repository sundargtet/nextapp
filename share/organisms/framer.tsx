import { motion, Variants } from 'framer-motion'
import { useState } from "react";
import styles from '@/styles/Framer.module.css'
import { framers } from '@/utils/framers'
import { TFramer } from '@/typecheck/types'

const variants: Variants = {
    open: { position: 'absolute', x: 100, y: 100, rotate: 360, backgroundColor: 'blue', width: '70px', height: '70px', borderRadius: '10px', opacity: 0.5 },
    closed: { position: 'absolute', x: 100, y: 100, rotate: 0, backgroundColor: 'blue', width: '70px', height: '70px', borderRadius: '50%', opacity: 0.5 },
}

export default function Abouts() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div>
            </div>
            <div className={styles.wrapper}>
                {
                    framers.map((framer: TFramer, index: number) => {
                        const positionX = Math.floor((Math.random() * 1000) / 2)
                        const positionY = Math.floor((Math.random() * 1000) / 2)
                        const size = Math.floor(Math.random() * 100)
                        const finalSize = size < 15 ? 20 : size
                        const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`
                        return (
                            <motion.div
                                key={index}
                                style={{ width: `${finalSize}px`, height: `${finalSize}px`, backgroundColor: `${color}`, ...framer.style }}
                                initial={{ ...framer.initial, x: positionX, y: positionY, opacity: 0 }}
                                animate={{ ...framer.animate, x: positionX, y: positionY, opacity: 0.7 }}
                                exit={{ rotate: 0, opacity: 0, ...framer.exit }}
                                transition={{ ease: "easeInOut", duration: 0.3, ...framer.transition }}
                                whileHover={{ scale: [null, 1.8, 1.3], ...framer.whileHover }}
                                whileTap={{ scale: [null, 0.8], ...framer.whileTap }}
                            />
                        )
                    })
                }

                <motion.div
                    initial={false}
                    animate={isOpen ? "open" : 'closed'}
                    onClick={() => setIsOpen(!isOpen)}
                    variants={variants}
                    transition={{ duration: 0.5 }}
                />
            </div>

        </>
    )
}