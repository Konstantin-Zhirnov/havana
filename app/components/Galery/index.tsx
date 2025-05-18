import cn from 'classnames'
import { motion } from 'framer-motion'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { MdRotate90DegreesCw, MdZoomIn, MdZoomOut } from 'react-icons/md'

import { imageAnimation } from '../../constants'

import { Wrapper } from '../Wrapper'

import 'react-photo-view/dist/react-photo-view.css'
import styles from './Galery.module.css'

const imagesSrcArray = [
  '/assets/6.webp',
  '/assets/7.webp',
  '/assets/8.webp',
  '/assets/9.webp',
  '/assets/10.webp',
  '/assets/11.webp',
  '/assets/1.webp',
  '/assets/2.webp',
  '/assets/3.webp',
  '/assets/4.webp',
]

export const Galery = () => {
  return (
    <motion.section>
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
          {imagesSrcArray.map((item: string, index: number) => (
            <PhotoView src={item} key={index}>
              <motion.div
                className={styles.image_container}
                initial="hidden"
                whileInView="visible"
                variants={imageAnimation}
                viewport={{ once: true }}
                custom={Number(`1.1${index}`)}
              >
                <img src={item} className={styles.image} alt="Havana Classic Car Tours" />
              </motion.div>
            </PhotoView>
          ))}
        </PhotoProvider>
      </Wrapper>
    </motion.section>
  )
}
