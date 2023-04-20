import { DragEvent } from 'react'
import { motion, PanInfo, useMotionValue, useTransform } from 'framer-motion'
import styles from '@/styles/Submit.module.css'
import Icon from './icon'
import { MutableRefObject, useEffect, useRef } from 'react'

export default function Submit() {
    const divRef: MutableRefObject<null> = useRef(null)
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
        console.log('m.dragging...', e.target);

    }
    const handleLoad = () => {
        console.log('m.load');
    }
    return (
        <motion.div style={{ background }} className={styles.container} ref={divRef} >
            <motion.div style={{ x }} drag='x' dragConstraints={{ left: 0, right: 0 }} onDrag={handleDrag}>
                <Icon type='circle' />
            </motion.div>
        </motion.div>
    )
}