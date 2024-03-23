import { motion } from 'framer-motion'

import { Wrapper } from '../Wrapper'
import { Divider } from '../Divider'
import { backgroundAnimation, animation } from '../../constants'
import { LanguageProps } from '../../types'

import styles from './Havana.module.css'

const Havana = ({ language }: LanguageProps) => {
  const getTitle = () => {
    switch (language) {
      case 'En':
        return 'About Havana'
      case 'Es':
        return 'Acerca de La Habana'
      case 'Fr':
        return 'À propos de La Havane'
      case 'Ge':
        return 'Über Havanna'
    }
  }

  const getText = () => {
    switch (language) {
      case 'En':
        return 'Welcome to the vibrant streets of Havana, where every corner exudes a sense of nostalgia and an air of vintage allure. Stepping into this enchanting city feels like a journey back in time where classic cars from the past reign supreme on the roads, adding an unparalleled charm to its already mesmerizing atmosphere. Havana, the capital of Cuba, is a destination unlike any other, boasting a rich tapestry of history, culture, and architecture.'
      case 'Es':
        return 'Bienvenido a las vibrantes calles de La Habana, donde cada rincón emana una sensación de nostalgia y un aire de encanto vintage. Entrar en esta encantadora ciudad se siente como un viaje al pasado, donde los autos clásicos del pasado reinan en las carreteras, agregando un encanto incomparable a su atmósfera ya fascinante. La Habana, la capital de Cuba, es un destino como ningún otro, que cuenta con un rico tapiz de historia, cultura y arquitectura.'
      case 'Fr':
        return "Bienvenue dans les rues animées de La Havane, où chaque coin dégage un sentiment de nostalgie et un air d'allure vintage. Entrer dans cette ville enchanteresse ressemble à un voyage dans le temps où les voitures classiques du passé règnent en maître sur les routes, ajoutant un charme inégalé à son atmosphère déjà envoûtante. La Havane, la capitale de Cuba, est une destination pas comme les autres, offrant une riche tapisserie d'histoire, de culture et d'architecture."
      case 'Ge':
        return 'Willkommen in den pulsierenden Straßen von Havanna, wo jede Ecke ein Gefühl von Nostalgie und einen Hauch von Vintage-Charme ausstrahlt. Der Eintritt in diese bezaubernde Stadt fühlt sich an wie eine Reise in die Vergangenheit, in der Oldtimer aus der Vergangenheit auf den Straßen herrschen und der ohnehin schon faszinierenden Atmosphäre einen unvergleichlichen Charme verleihen. Havanna, die Hauptstadt Kubas, ist ein Reiseziel wie kein anderes und bietet einen reichen Teppich aus Geschichte, Kultur und Architektur.'
    }
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      variants={backgroundAnimation}
      className={styles.container}
      id="havana"
    >
      <Wrapper classes={styles.wrapper}>
        <motion.h2
          className={styles.h2}
          initial="hidden"
          whileInView="visible"
          variants={animation}
          viewport={{ once: true }}
        >
          {getTitle()}
        </motion.h2>

        <Divider white />

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

export { Havana }
