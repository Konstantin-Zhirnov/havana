import { motion } from 'framer-motion'

import { imageAnimation } from '../../constants'

import styles from './Divider.module.css'

interface IProps {
  custom?: number
  white?: boolean
}
const Divider = ({ custom, white }: IProps) => {
  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      variants={imageAnimation}
      viewport={{ once: true }}
      custom={custom || 0}
      style={{ background: white ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 05, 0, 0.1)' }}
    />
  )
}

export { Divider }
