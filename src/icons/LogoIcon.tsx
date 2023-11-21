import { icon_props } from "@/type/type";
import { Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const LogoIcon = ({ size ,color}: icon_props) => {
    const router = useRouter()
  return (
    <Box w={"fit-content"} position={"relative"} onClick={()=>router.push('/')}>
      <svg
        xmlns-dc="http://purl.org/dc/elements/1.1/"
        xmlns-cc="http://creativecommons.org/ns#"
        xmlns-rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns-svg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        id="svg2"
        version="1.1"
        viewBox="240 240 960 960"
        width={size}
        height={size}
        style={{ cursor: "pointer"}}
      >
        <metadata id="metadata8"></metadata>
        <defs id="defs6">
          <linearGradient
            id="linearGradient28"
            spreadMethod="pad"
            gradientTransform="matrix(720,0,0,-720,180,540)"
            gradientUnits="userSpaceOnUse"
            y2="0"
            x2="1"
            y1="0"
            x1="0"
          >
            <stop
              id="stop24"
              offset="0"
              stopOpacity="1"
              stopColor="#e63946"
            ></stop>
            <stop
              id="stop26"
              offset="1"
              stopOpacity="1"
              stopColor="#f77f00"
            ></stop>
          </linearGradient>
        </defs>
        <g transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" id="g10">
          <g id="g12">
            <g id="g14">
              <g id="g20">
                <g id="g22">
                  <path
                    id="path30"
                    fill="url(#linearGradient28)"
                    d="m 532.746,899.716 c -42.393,-3.321 -77.266,-36.801 -82.13,-79.044 v 0 c -0.569,-4.942 -0.737,-9.814 -0.532,-14.591 v 0 c 0.876,-20.439 -7.634,-40.172 -22.1,-54.638 v 0 L 328.555,652.014 C 314.089,637.548 294.357,629.04 273.919,629.916 v 0 c -4.749,0.204 -9.593,0.039 -14.504,-0.522 v 0 c -42.827,-4.891 -76.57,-40.638 -79.237,-83.661 v 0 C 176.936,493.43 218.396,450 269.999,450 v 0 c 1.559,0 3.109,0.039 4.648,0.118 v 0 c 19.767,1.006 38.913,-7.137 52.909,-21.133 v 0 l 100.429,-100.43 c 14.466,-14.465 22.975,-34.198 22.099,-54.637 v 0 c -0.204,-4.748 -0.04,-9.592 0.522,-14.503 v 0 c 4.891,-42.827 40.637,-76.57 83.661,-79.238 v 0 C 586.57,176.936 630,218.396 630,270 v 0 c 0,1.559 -0.041,3.108 -0.118,4.647 v 0 c -1.007,19.767 7.136,38.913 21.133,52.909 v 0 l 101.428,101.429 c 13.996,13.996 33.142,22.139 52.91,21.133 v 0 C 806.892,450.039 808.441,450 810,450 v 0 c 53.085,0 95.434,45.959 89.431,100.258 v 0 c -4.539,41.065 -37.435,74.242 -78.465,79.092 v 0 c -30.742,3.633 -58.852,-8.248 -77.56,-28.835 v 0 C 730.038,585.805 710.815,577.8 690.937,577.8 v 0 H 541.254 c -20.813,0 -38.666,-16.282 -39.048,-37.091 v 0 C 501.818,519.509 518.888,502.2 540,502.2 v 0 h 157.014 c 8.017,0 12.033,-9.694 6.363,-15.364 v 0 L 597.556,381.015 c -13.996,-13.997 -33.142,-22.14 -52.909,-21.133 v 0 C 543.108,359.96 541.559,360 540,360 v 0 c -1.559,0 -3.108,-0.04 -4.647,-0.118 v 0 c -19.768,-1.007 -38.914,7.136 -52.91,21.133 v 0 L 381.016,482.441 c -13.998,13.996 -22.141,33.143 -21.134,52.911 v 0 c 0.078,1.539 0.117,3.089 0.117,4.648 v 0 c 0,1.559 -0.039,3.108 -0.117,4.647 v 0 c -1.007,19.768 7.136,38.915 21.134,52.911 v 0 l 100.429,100.429 c 14.465,14.465 34.197,22.973 54.635,22.097 v 0 c 4.776,-0.206 9.648,-0.037 14.589,0.532 v 0 c 42.241,4.862 75.723,39.733 79.046,82.123 v 0 c 4.153,52.981 -37.612,97.258 -89.716,97.261 v 0 c -2.399,0 -4.814,-0.093 -7.253,-0.284"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
};

export default LogoIcon;
