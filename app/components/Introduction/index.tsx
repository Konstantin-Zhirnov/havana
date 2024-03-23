import { motion } from 'framer-motion'

import { Wrapper } from '../Wrapper'
import { Divider } from '../Divider'
import { animation } from '../../constants'
import { LanguageProps } from '../../types'

import styles from './Introduction.module.css'

const Introduction = ({ language }: LanguageProps) => {
  const getTitle = () => {
    switch (language) {
      case 'En':
        return 'Havana Classic Car Tours'
      case 'Es':
        return 'Recorridos en Automóvil Clásico por La Habana'
      case 'Fr':
        return 'Tours en Voiture Classique de La Havane'
      case 'Ge':
        return 'Havanna Oldtimer Touren'
    }
  }

  const getText = () => {
    switch (language) {
      case 'En':
        return 'One of the most iconic ways to immerse oneself in the spirit of Havana is through a tour with Havana Classic Cars. You will enjoy a relaxing ride, travel with ease with an experience driver and witness authentic Cuban culture and lifestyle.'
      case 'Es':
        return 'Una de las formas más icónicas de sumergirse en el espíritu de La Habana es a través de un recorrido con Autos Clásicos de La Habana. Disfrutará de un viaje relajante, viajará con facilidad con un conductor experimentado y será testigo de la auténtica cultura y estilo de vida cubanos.'
      case 'Fr':
        return 'Una de las formas más icónicas de sumergirse en el espíritu de La Habana es a través de un recorrido con Autos Clásicos de La Habana. Disfrutará de un viaje relajante, viajará con facilidad con un conductor experimentado y será testigo de la auténtica cultura y estilo de vida cubanos.'
      case 'Ge':
        return 'Eine der kultigsten Möglichkeiten, in den Geist Havannas einzutauchen, ist eine Tour mit Havanna Classic Cars. Sie werden eine entspannte Fahrt genießen, mit einem erfahrenen Fahrer entspannt reisen und authentische kubanische Kultur und Lebensweise erleben.'
    }
  }

  return (
    <motion.section className={styles.container} initial="hidden" whileInView="visible">
      <Wrapper classes={styles.wrapper}>
        <motion.h3
          className={styles.h3}
          initial="hidden"
          whileInView="visible"
          variants={animation}
          viewport={{ once: true }}
          custom={2}
        >
          {getTitle()}
        </motion.h3>

        <Divider custom={2} />

        <motion.p
          className={styles.text}
          initial="hidden"
          whileInView="visible"
          variants={animation}
          viewport={{ once: true }}
          custom={2}
        >
          {getText()}
        </motion.p>
      </Wrapper>
    </motion.section>
  )
}

export { Introduction }
