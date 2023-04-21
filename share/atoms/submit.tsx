import { DragEvent, useState } from 'react'
import { motion, PanInfo, useMotionValue, useTransform } from 'framer-motion'
import styles from '@/styles/Submit.module.css'
import Icon from './icon'
import { MutableRefObject, useEffect, useRef } from 'react'

export default function Submit({ handleSubmit, hadnleReset }: any) {
    const [positions, setPositions] = useState({
        posStart: 0,
        posEnd: 0
    })
    const divRef: any = useRef(null)
    const x = useMotionValue(0)
    const background = useTransform(
        x,
        [-100, 0, 100],
        [
            "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
            "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
            "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
        ]
    )
    const handleDrag = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const { point } = info
        const { x } = point
        if (Math.round(x - 50) <= Math.round(positions.posStart)) {
            hadnleReset()

        } else if (Math.round(x) >= Math.round(positions.posEnd - 50)) {
            handleSubmit()
        }
    }
    useEffect(() => {
        const { left, right } = divRef.current.getBoundingClientRect()
        setPositions({
            posStart: left,
            posEnd: right
        })


    }, [])
    return (
        <motion.div style={{ background }} className={styles.container} ref={divRef}>
            <div className={styles.reset}>RESET</div>
            <motion.div
                style={{ x }}
                drag='x'
                dragConstraints={{ left: 1, right: 1 }}
                onDrag={handleDrag}
                className={styles.item}
            >

                <Icon type='arrows' Istyle={{ cursor: 'move' }} />
            </motion.div>
            <div className={styles.submit}>SUBMIT</div>
        </motion.div>
    )
}