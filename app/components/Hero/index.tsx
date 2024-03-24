import { Slider } from './Slider'

import styles from './Hero.module.css'

interface IProps {
  scrollFirst: string
  scrollSecond: string
}
const Hero = ({ scrollFirst, scrollSecond }: IProps) => {
  return (
    <section className={styles.container}>
      <Slider />

      <div className={styles.footer}>
        <a href="#havana" className={styles.link}>
          {scrollFirst}
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
          {scrollSecond}
        </a>
      </div>
    </section>
  )
}

export { Hero }
