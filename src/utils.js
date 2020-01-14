export const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: 'auto',
    block: 'start',
  });
};

export const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;
  return {
    height,
    offsetTop,
    offsetBottom,
  };
};
