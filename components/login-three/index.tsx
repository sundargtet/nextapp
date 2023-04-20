import { LazyMotion, domAnimation, m, useViewportScroll, useTransform, Variants } from "framer-motion"
import Image from "next/image"
import styles from '@/styles/LoginThree.module.css'
import QuoteTwo from '@/public/q_two.jpeg'

const variants: Variants = {
    offscreen: {
        opacity: 0,
    },
    onscreen: {
        opacity: 1,
        transition: {
            duration:2,
        }
    }
}

const MyComponent = () => {
    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 3])
    console.log('progress', scrollYProgress);

    return (
        <LazyMotion features={domAnimation}>
            <div className={styles.wrapper}>
                <LeftWing scale={scale} />
                <RightWing />
            </div>
        </LazyMotion>
    )
}

export default MyComponent

function LeftWing({ scale }: any) {
    return (
        <div className={styles.container}>
            <m.div
                className={styles.item}
                style={{
                    scale
                }}
            >
                <Image src={QuoteTwo} alt='two' />
            </m.div>
        </div>
    )
}

function RightWing() {
    return (
        <m.div
            className={styles.details}
            variants={variants}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: false, amount: 1 }}
        >
            If you can't find a way, create one !
        </m.div>
    )
}