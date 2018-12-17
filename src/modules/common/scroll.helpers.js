// this function finds out how much % of the available window height,
// have we scrolled on the window?
export const getPercentageScrolledDown = window => {
  const pageHeight = window.document.documentElement.scrollHeight;
  const clientHeight = window.document.documentElement.clientHeight;
  const scrollPos = window.pageYOffset;
  const currentPosition = scrollPos + clientHeight;
  const percentageScrolled = currentPosition / pageHeight;
  return percentageScrolled;
};
