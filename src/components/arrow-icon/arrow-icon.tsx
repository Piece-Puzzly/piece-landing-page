import Lottie from "lottie-react";
import React from "react";
import arrowAnimationData from "./arrow_motion.json";

// 컴포넌트가 받을 props의 타입을 interface로 정의합니다.
interface ArrowIconProps {
  width?: number; // '?'는 이 prop이 선택적(optional)임을 의미합니다.
  height?: number;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ width = 40, height = 40 }) => {
  // style 객체에 React가 제공하는 CSS 속성 타입을 지정합니다.
  const style: React.CSSProperties = {
    width: width,
    height: height,
  };

  return (
    <Lottie
      animationData={arrowAnimationData}
      style={style}
      loop={true}
      autoplay={true}
    />
  );
};

export default ArrowIcon;
