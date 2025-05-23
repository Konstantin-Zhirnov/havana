import { motion } from 'framer-motion'

import { Wrapper } from '../Wrapper'
import { Divider } from '../Divider'
import { animation } from '../../constants'

import styles from './Introduction.module.css'

interface IProps {
  introductionTitle: string
  introductionText: string
}
const Introduction = ({ introductionTitle, introductionText }: IProps) => {
  return (
    <motion.section className={styles.container} initial="hidden" whileInView="visible">
      <Wrapper classes={styles.wrapper}>
        <motion.h3
          className={styles.h3}
          initial="hidden"
          whileInView="visible"
          variants={animation}
          viewport={{ once: true }}
        >
          {introductionTitle}
        </motion.h3>

        <Divider />

        <motion.p
          className={styles.text}
          initial="hidden"
          whileInView="visible"
          variants={animation}
          viewport={{ once: true }}
        >
          {introductionText}
        </motion.p>
      </Wrapper>
    </motion.section>
  )
}

export { Introduction }
