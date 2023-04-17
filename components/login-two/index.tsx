import { motion, Variants } from "framer-motion"
import styles from '@/styles/LoginTwo.module.css'
import { Box, Stack } from "@chakra-ui/react"
import Image from "next/image"
import QuoteImage from '@/public/q_one.jpeg'

const detailsVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 150
  },
  onscreen: {
    opacity: 1,
    y: 10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1
    }
  }
}


const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    rotate: -50,
    scale: 1,
    x: 100,
    y: 300
  },
  onscreen: {
    opacity: 1,
    rotate: 0,
    scale: 1.5,
    x: 100,
    y: 70,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5
    }
  }
}

function Component() {
  return (
    <Stack direction={'row'} position='relative' p={4}>
      <Box w={'60%'}>
        <Details />
      </Box>
      <Box display='flex' alignItems='center' justifyContent='center'>
        <Card />
      </Box>
    </Stack>
  )
}

export default Component

function Card() {
  return (
    <motion.div
      variants={cardVariants}
      initial='offscreen'
      whileInView='onscreen'
      className={styles.card}
    >
      <Image src={QuoteImage} alt='quote' className={styles.image} />
    </motion.div>
  )
}

function Details() {
  return (
    <motion.div
      variants={detailsVariants}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: false, amount: 1 }}
      className={styles.details}
    >
      I must be willing to give up what i am inorder to become what i will be. <br />
      <span>-Albert Einstein</span>
    </motion.div>
  )
}