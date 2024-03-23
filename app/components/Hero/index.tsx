import { Slider } from './Slider'
import { LanguageProps } from '@/app/types'

import styles from './Hero.module.css'

const Hero = ({ language }: LanguageProps) => {
  const getFirstText = () => {
    switch (language) {
      case 'En':
        return 'scroll down'
      case 'Es':
        return 'desplazarse hacia abajo'
      case 'Fr':
        return 'faites défiler vers le bas'
      case 'Ge':
        return 'nach unten scrollen'
    }
  }

  const getSecondText = () => {
    switch (language) {
      case 'En':
        return 'for more'
      case 'Es':
        return 'para más'
      case 'Fr':
        return 'pour plus'
      case 'Ge':
        return 'für mehr'
    }
  }

  return (
    <section className={styles.container}>
      <Slider />

      <div className={styles.footer}>
        <a href="#havana" className={styles.link}>
          {getFirstText()}
          <svg
            className={styles.link_icon}
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
          </svg>
          {getSecondText()}
        </a>
      </div>
    </section>
  )
}

export { Hero }
