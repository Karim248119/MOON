const fastSlowFastEase = [0.7, 0.1, 0.1, 0.9];

export const rise = {
  initial: { y: "0%" },
  animate: { y: "-7.5%" },
  exit: { y: "0%" },
  transition: {
    duration: 2,
    ease: "easeInOut",
    damping: 20,
    type: "keyframes",
  },
};
export const toTop = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "-100%", opacity: 0 },
  transition: {
    duration: 1,
    ease: "easeInOut",
    damping: 20,
    type: "keyframes",
  },
};
export const toTop2 = {
  initial: { y: "80%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "-80%", opacity: 0 },
  transition: {
    duration: 1,
    ease: "easeInOut",
    damping: 20,
    type: "keyframes",
  },
};

export const rolling = {
  animate: {
    x: ["0%", "100%"],
    rotate: [0, 360],
  },
  transition: {
    duration: 2,
    ease: "linear",
  },
};

export const scaleX = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
  exit: { scaleX: 0 },
  transition: {
    duration: 1,
    ease: "easeInOut",
    damping: 20,
    type: "keyframes",
  },
};

export const scale = {
  initial: { scale: 1 },
  animate: { scale: 2.8, y: 400, x: -1000 },
  exit: { scaleX: 1 },
  transition: {
    duration: 2,
    ease: fastSlowFastEase,
    type: "keyframes",
  },
};

export const fade = {
  initial: { opacity: 1 },
  animate: { opacity: 0 },
  exit: { opacity: 1 },
  transition: { duration: 2, ease: "easeInOut" },
};
