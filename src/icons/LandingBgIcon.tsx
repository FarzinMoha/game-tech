import { icon_props } from "@/type/type";
import { Box, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const LandingBgIcon = ({ size }: icon_props) => {
  const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0deg)}
  50% { transform: scale(1.4) rotate(180deg)}
  100% { transform: scale(1) rotate(360deg)
`;
const animation = `${animationKeyframes} 7s linear infinite`;
  return (
    <Box as={motion.svg} animation={animation}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="71.38 88.62 93.02 70.34"
      // style={{ transform: "rotate(188deg)" }}
      width={size}
      height={size}
    >
      <defs>
        <radialGradient id="RadialGradient">
          <stop offset="70%" stopColor="#e63a45" />
          <stop offset="100%" stopColor="#f77f00" />
        </radialGradient>
      </defs>
      <path
        fill="url(#RadialGradient)"
        d="M60.8,-4.8C69.7,7.6,61.5,40.5,42.6,52.9C23.7,65.2,-6,57.1,-19.3,43.5C-32.5,29.8,-29.5,10.6,-23.6,2.3C-17.6,-6,-8.8,-3.3,8.6,-6.1C25.9,-8.9,51.9,-17.1,60.8,-4.8Z"
        transform="translate(100 100)"
      ></path>
    </Box>
  );
};

export default LandingBgIcon;
