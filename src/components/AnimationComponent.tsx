import React from 'react';

type IPropsAnimationComponent = {
  percentage: number,
  children: any,
  animationStart?: number,
  delay?: number,
  animationClassName?: string,
};

const AnimationComponent = (props: IPropsAnimationComponent) => {
  console.log(props);
  return (<>
    {props.children}
  </>);
};

export default AnimationComponent;