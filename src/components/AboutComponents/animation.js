export const animationTextAbout = {
  hidden: {
    x: -400,
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

export const animationImgAbout = {
  hidden: {
    x: +400,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
  },
  }
}

export const animationImgFacts = {
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

export const animationListFacts = {
  hidden: {
    x: +400,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
  },
  }
}


export const animationAboutDescribe = {
  hidden: {
    x: -400,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
  },
  }
}

export const animationAboutListSkills = {
  hidden: {
    x: +400,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
  },
  }
}
