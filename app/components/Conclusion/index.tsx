import { motion } from 'framer-motion'

import { Wrapper } from '../Wrapper'
import { Divider } from '../Divider'
import { animation } from '../../constants'

import styles from './Conclusion.module.css'

interface IProps {
  conclusion: string
}
const Conclusion = ({ conclusion }: IProps) => {
  return (
    <motion.section className={styles.container}>
      <Wrapper classes={styles.wrapper}>
        <Divider custom={1} />

        <motion.p
          className={styles.text}
          initial="hidden"
          whileInView="visible"
          variants={animation}
          viewport={{ once: true }}
          custom={1}
        >
          {conclusion}
        </motion.p>
      </Wrapper>
    </motion.section>
  )
}

export { Conclusion }
