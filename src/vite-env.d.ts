/// <reference types="vite/client" />


// This fixes imagetools imports forever
declare module '*?imagetools' {
  const src: string;
  export default src;
}

declare module '*&imagetools' {
  const src: string;
  export default src;
}