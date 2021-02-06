import * as React from 'react';

interface HelloProps { compiler: string; framework: string;}

export const Hello = (props: HelloProps) => {
  return (
    <div>
      <h1>{props.compiler}</h1>
      <h2>{props.framework}</h2>
    </div>
  );
};