import { motion } from 'framer-motion'

import { Wrapper } from '../Wrapper'
import { Divider } from '../Divider'
import { animation } from '../../constants'

import styles from './Text.module.css'

interface IProps {
  text: string
  title: string
}

export const Text = ({ text, title }: IProps) => {
  return (
    <motion.section className={styles.container} initial="hidden" whileInView="visible">
      <motion.h3
        className={styles.h3}
        initial="hidden"
        whileInView="visible"
        variants={animation}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>

      <Divider />

      <Wrapper classes={styles.wrapper}>
        <motion.p
          className={styles.text}
          initial="hidden"
          whileInView="visible"
          variants={animation}
          viewport={{ once: true }}
        >
          {text}
        </motion.p>
      </Wrapper>
    </motion.section>
  )
}
