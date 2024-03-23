export const backgroundAnimation = {
  hidden: {
    background: 'transparent',
    opacity: 0,
    y: 40,
  },
  visible: {
    background: '#3f4a5c',
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export const animation = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: custom || 1 },
  }),
}

export const imageAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: custom || 1 },
  }),
}
