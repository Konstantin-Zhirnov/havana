import { motion } from 'framer-motion'

import { Wrapper } from '../Wrapper'
import { Divider } from '../Divider'
import { animation } from '../../constants'

import styles from './Conclusion.module.css'
import { LanguageProps } from '@/app/types'

const Conclusion = ({ language }: LanguageProps) => {
  const getText = () => {
    switch (language) {
      case 'En':
        return 'Whether it is a quick trip around the City, a pick up at the Airport or Cruise Ship terminal, or a journey farther afield to the City of Matanzas or the farming valley of Vinales, Havana Classic Cars can put together a ride or tour to suit your needs. If you have a larger group other cars and guides can be arranged.'
      case 'Es':
        return 'Ya sea que se trate de un viaje rápido por la ciudad, una recogida en el Aeropuerto o terminal de Cruceros, o un viaje más lejos a la ciudad de Matanzas o al valle agrícola de Viñales, Havana Classic Cars puede organizar un viaje o recorrido que se adapte a sus necesidades. Si tiene un grupo más grande, se pueden organizar otros automóviles y guías.'
      case 'Fr':
        return "Qu'il s'agisse d'un voyage rapide dans la ville, d'une prise en charge à l'aéroport ou au terminal des navires de croisière, ou d'un voyage plus loin vers la ville de Matanzas ou la vallée agricole de Vinales, Havana Classic Cars peut organiser un trajet ou une visite selon vos besoins. Si vous avez un groupe plus important, d'autres voitures et guides peuvent être organisés."
      case 'Ge':
        return 'Egal, ob es sich um eine kurze Stadtrundfahrt, eine Abholung am Flughafen oder am Kreuzfahrtschiffterminal oder eine weiter entfernte Reise in die Stadt Matanzas oder in das landwirtschaftliche Tal von Vinales handelt, Havana Classic Cars kann eine Fahrt oder Tour nach Ihren Wünschen zusammenstellen Bedürfnisse. Wenn Sie eine größere Gruppe haben, können andere Autos und Führer arrangiert werden.'
    }
  }

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
          {getText()}
        </motion.p>
      </Wrapper>
    </motion.section>
  )
}

export { Conclusion }
