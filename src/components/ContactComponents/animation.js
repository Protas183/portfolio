export const animationLeft = {
  hidden: {
    x: -400,
    opacity: 0,
  },
  visible:{
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  }
}

export const animationRight = {
  hidden: {
    x: +500,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: custom * 0.2
    },
  })
}

export const animationBottom = {
  hidden: {
    y: +400,
    opacity: 0,
  },
  visible:{
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  }
}
