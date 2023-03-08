export const mediaQueries = {
  small: (content: string) => `@media (min-width: 576px) { ${content} }`,
  medium: (content: string) => `@media (min-width: 768px) { ${content} }`,
  large: (content: string) => `@media (min-width: 992px) { ${content} }`,
};
