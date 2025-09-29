// Temporary fallback for Framer Motion to fix build issues
export const motion = {
  div: 'div',
  section: 'section',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  p: 'p',
  span: 'span',
  button: 'button',
  ul: 'ul',
  li: 'li',
  a: 'a',
  img: 'img',
  nav: 'nav',
  header: 'header',
  footer: 'footer',
  main: 'main',
  article: 'article',
  aside: 'aside',
};

export const AnimatePresence = ({ children }: { children: React.ReactNode }) => children;

export const useAnimation = () => ({
  start: () => {},
  stop: () => {},
  set: () => {},
});

export const useInView = () => [null, true];
