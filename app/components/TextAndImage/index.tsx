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
  position: 'first' | 'second'
  custom: number
  text: string
}
const TextAndImage = ({ position, custom, text }: IProps) => {
  const getSrc = () => {
    if (position === 'first') return '/assets/4.webp'
    return '/assets/5.webp'
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
            {text}
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
              custom={custom}
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
            {text}
          </motion.p>
        ) : null}
      </Wrapper>
    </motion.section>
  )
}

export { TextAndImage }
