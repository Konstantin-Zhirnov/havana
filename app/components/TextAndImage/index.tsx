import cn from 'classnames'
import { motion } from 'framer-motion'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { MdRotate90DegreesCw, MdZoomIn, MdZoomOut } from 'react-icons/md'

import { Wrapper } from '../Wrapper'
import { Divider } from '../Divider'
import { animation } from '../../constants'
import { LanguageType } from '../../types'

import 'react-photo-view/dist/react-photo-view.css'
import styles from './TextAndImage.module.css'

interface IProps {
  position: 'first' | 'second'
  custom: number
  language: LanguageType
}
const TextAndImage = ({ position, custom, language }: IProps) => {
  const getSrc = () => {
    if (position === 'first') return '/assets/4.webp'
    return '/assets/5.webp'
  }

  const getFirstText = () => {
    switch (language) {
      case 'En':
        return 'The principal driver of Havana Classic Cars is Cuevas, who was born in Havana and has driven these streets as a taxi driver for over 25 years. All of the Drivers of Havana Classic Cars have been selected for their safe driving skills, knowledge of Havana and the surrounding areas, and their friendly personalities. All have some English language skills and where necessary they can arrange for a translator to join your tour. Guided by these knowledgeable locals these tours offer a fascinating journey through Havana’s most iconic landmarks and hidden gems. As you are exploring the colonial architecture of Old Havana, Cruising along the famous Malecon seaside promenade, and walking through the Historic Harbour Fort overlooking Havana Harbour, you will come to love this beautiful Island city.'
      case 'Es':
        return 'El principal conductor de los Autos Clásicos Habaneros es Cuevas, quien nació en La Habana y ha conducido estas calles como taxista durante más de 25 años. Todos los conductores de Havana Classic Cars han sido seleccionados por sus habilidades de conducción segura, conocimiento de La Habana y sus alrededores y sus personalidades amigables. Todos tienen algunos conocimientos del idioma inglés y, cuando sea necesario, pueden contratar a un traductor para que se una a su recorrido. Guiados por estos lugareños conocedores, estos recorridos ofrecen un viaje fascinante a través de los monumentos más emblemáticos y las gemas ocultas de La Habana. Mientras explora la arquitectura colonial de La Habana Vieja, navega por el famoso paseo marítimo del Malecón y camina por el Histórico Fuerte del Puerto con vista al Puerto de La Habana, se enamorará de esta hermosa ciudad isleña.'
      case 'Fr':
        return "Le principal conducteur des voitures classiques de La Havane est Cuevas, né à La Havane et qui conduit ces rues en tant que chauffeur de taxi depuis plus de 25 ans. Tous les conducteurs de Voitures classiques de La Havane ont été sélectionnés pour leurs compétences de conduite en toute sécurité, leur connaissance de La Havane et des environs et leur personnalité amicale. Tous ont des compétences en anglais et, si nécessaire, ils peuvent demander à un traducteur de se joindre à votre visite. Guidés par ces habitants compétents, ces visites offrent un voyage fascinant à travers les monuments les plus emblématiques et les joyaux cachés de La Havane. En explorant l'architecture coloniale de La Vieille Havane, en naviguant le long de la célèbre promenade balnéaire du Malecon et en vous promenant dans le Fort portuaire historique surplombant le port de La Havane, vous finirez par adorer cette belle ville insulaire."
      case 'Ge':
        return 'Der Hauptfahrer von Havana Classic Cars ist Cuevas, der in Havanna geboren wurde und diese Straßen seit über 25 Jahren als Taxifahrer befahren hat. Alle Fahrer von Havana Classic Cars wurden aufgrund ihrer sicheren Fahrkünste, ihres Wissens über Havanna und die Umgebung und ihrer freundlichen Persönlichkeit ausgewählt. Alle haben einige Englischkenntnisse und können bei Bedarf einen Übersetzer für Ihre Tour arrangieren. Geführt von diesen sachkundigen Einheimischen bieten diese Touren eine faszinierende Reise durch Havannas berühmteste Wahrzeichen und versteckte Juwelen. Wenn Sie die koloniale Architektur von Alt-Havanna erkunden, entlang der berühmten Strandpromenade Malecon fahren und durch die historische Hafenfestung mit Blick auf den Hafen von Havanna spazieren, werden Sie diese wunderschöne Inselstadt lieben lernen.'
    }
  }

  const getSecondText = () => {
    switch (language) {
      case 'En':
        return 'And during a tour with Havana Classic Cars you will do more than just siteseeing. You will be engaging with Cuba’s rich cultural heritage and connecting with its warm and welcoming people. From chatting with local drivers about their beloved vehicles to sampling authentic Cuban cuisine at roadside eateries, your interactions will offer a deeper understanding of this fascinating destination.'
      case 'Es':
        return 'Y durante un recorrido con Havana Classic Cars, hará más que solo hacer turismo. Te involucrarás con el rico patrimonio cultural de Cuba y te conectarás con su gente cálida y acogedora. Desde conversar con conductores locales sobre sus amados vehículos hasta degustar auténtica cocina cubana en restaurantes al borde de la carretera, sus interacciones ofrecerán una comprensión más profunda de este fascinante destino.'
      case 'Fr':
        return "Et lors d'une visite avec des voitures classiques de La Havane, vous ferez plus que du tourisme. Vous découvrirez le riche patrimoine culturel de Cuba et vous vous connecterez avec ses habitants chaleureux et accueillants. De la discussion avec les conducteurs locaux sur leurs véhicules bien-aimés à la dégustation d'une authentique cuisine cubaine dans des restaurants en bordure de route, vos interactions vous offriront une compréhension plus approfondie de cette destination fascinante."
      case 'Ge':
        return 'Und während einer Tour mit Havanna Classic Cars werden Sie mehr als nur Sightseeing machen. Sie werden sich mit dem reichen kulturellen Erbe Kubas beschäftigen und sich mit seinen herzlichen und einladenden Menschen verbinden. Von Gesprächen mit lokalen Fahrern über ihre geliebten Fahrzeuge bis hin zur Verkostung authentischer kubanischer Küche in Restaurants am Straßenrand bieten Ihre Interaktionen ein tieferes Verständnis für dieses faszinierende Reiseziel.'
    }
  }

  return (
    <motion.section className={styles.container} initial="hidden" whileInView="visible">
      <Divider custom={2} />
      <Wrapper classes={cn(styles.wrapper, { [styles.right]: position === 'first' })}>
        {position === 'first' ? (
          <motion.p
            className={styles.text}
            initial="hidden"
            whileInView="visible"
            variants={animation}
            viewport={{ once: true }}
            custom={custom}
          >
            {getFirstText()}
          </motion.p>
        ) : null}

        <PhotoProvider
          speed={() => 800}
          easing={(type) =>
            type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)'
          }
          toolbarRender={({ onScale, scale, rotate, onRotate }) => {
            return (
              <>
                <MdZoomIn
                  className={cn('PhotoView-Slider__toolbarIcon', styles.icon)}
                  onClick={() => onScale(scale + 1)}
                />
                <MdZoomOut
                  className={cn('PhotoView-Slider__toolbarIcon', styles.icon)}
                  onClick={() => onScale(scale - 1)}
                />
                <MdRotate90DegreesCw
                  className={cn('PhotoView-Slider__toolbarIcon', styles.icon)}
                  onClick={() => onRotate(rotate + 90)}
                />
              </>
            )
          }}
        >
          <PhotoView src={getSrc()}>
            <motion.div
              className={styles.image_container}
              initial="hidden"
              whileInView="visible"
              variants={animation}
              viewport={{ once: true }}
              custom={custom + 1}
            >
              <img src={getSrc()} className={styles.image} alt="Havana Classic Car Tours" />
            </motion.div>
          </PhotoView>
        </PhotoProvider>

        {position === 'second' ? (
          <motion.p
            className={styles.text}
            initial="hidden"
            whileInView="visible"
            variants={animation}
            viewport={{ once: true }}
            custom={custom}
          >
            {getSecondText()}
          </motion.p>
        ) : null}
      </Wrapper>
    </motion.section>
  )
}

export { TextAndImage }
