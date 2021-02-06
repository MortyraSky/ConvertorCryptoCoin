declare module '*.css' {
    const content: { [className: string]: string; };
    export default content;
  }
declare module '*.scss' {
    const content: { [className: string]: string; };
    export default content;
}
declare module '*.svg' {
  // const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  const content: string;

  export default content;
}
declare module '*.png';
// declare module '*.png’
// declare module ‘*.jpg’
// declare module ‘*.jpeg’
// declare module '*.svg'
// declare module ‘*.gif’
