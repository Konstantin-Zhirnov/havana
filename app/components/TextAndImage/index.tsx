import cn from 'classnames'
import { motion } from 'framer-motion'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { MdRotate90DegreesCw, MdZoomIn, MdZoomOut } from 'react-icons/md'

import { Wrapper } from '../Wrapper'
import { Divider } from '../Divider'
import { animation } from '../../constants'

import 'react-photo-view/dist/react-photo-view.css'
import styles from './TextAndImage.module.css'

interface IProps {
  text_1: string
  text_2: string
  text_3: string
}
export const TextAndImage = ({ text_1, text_2, text_3 }: IProps) => {
  return (
    <motion.section className={styles.container} initial="hidden" whileInView="visible">
      <Divider />

      <Wrapper classes={styles.wrapper}>
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
          <PhotoView src="/assets/4.webp">
            <motion.div
              className={styles.image_container}
              initial="hidden"
              whileInView="visible"
              variants={animation}
              viewport={{ once: true }}
            >
              <img src="/assets/4.webp" className={styles.image} alt="Havana Classic Car Tours" />
            </motion.div>
          </PhotoView>
        </PhotoProvider>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animation}
          viewport={{ once: true }}
        >
          <p className={styles.text_1}>{text_1}</p>

          <p className={styles.text_2}>{text_2}</p>
        </motion.div>
      </Wrapper>

      <Wrapper classes={styles.wrapper}>
        <motion.p
          className={styles.text_3}
          initial="hidden"
          whileInView="visible"
          variants={animation}
          viewport={{ once: true }}
        >
          {text_3}
        </motion.p>
      </Wrapper>
    </motion.section>
  )
}
