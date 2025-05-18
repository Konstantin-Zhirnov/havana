import { motion } from 'framer-motion'

import { Wrapper } from '../Wrapper'
import { Divider } from '../Divider'
import { animation } from '../../constants'

import styles from './Havana.module.css'

interface IProps {
  havanaTitle: string
  havanaText: string
}
const Havana = ({ havanaTitle, havanaText }: IProps) => {
  return (
    <section className={styles.container} id="havana">
      <Wrapper classes={styles.wrapper}>
        <motion.h2
          className={styles.h2}
          initial="hidden"
          whileInView="visible"
          variants={animation}
          viewport={{ once: true }}
        >
          {havanaTitle}
        </motion.h2>

        <Divider white />

        <motion.p
          className={styles.text}
          initial="hidden"
          whileInView="visible"
          variants={animation}
          viewport={{ once: true }}
        >
          {havanaText}
        </motion.p>
      </Wrapper>
    </section>
  )
}

export { Havana }
