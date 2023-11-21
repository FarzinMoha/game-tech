import { Box, Text, keyframes } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const ScrollArrow = () => {
    const animationKeyframes = keyframes`
    0%{
        border-color:#e63a45;
        transform:translate(0,0);
      }
       20%{
        border-color:#ffffff;
         transform:translate(10px,10px);
      }
       20.1%,100%{
        border-color:#f77f00;
      }
  `;
  const animationKeyframes2 = keyframes`
  0% { opacity: 0}
  100% { opacity: 1}
`;
const animation2 = `${animationKeyframes2} 1s linear forwards 2s`;
console.log('ScrollArrow')
  return (
    <Box as={motion.div} animation={animation2} opacity={0} position={'absolute'} bottom={60} left={'50%'} w={'30px'} h={'30px'} transform={'auto'} rotate={'45deg'} zIndex={4}>
  <Text  as={motion.span} animation={`${animationKeyframes} 1s linear infinite 0s`} position={'absolute'} left={'-20px'} top={'-20px'} w={'100%'} h={'100%'} boxSizing='border-box' border={'none'} borderBottom={'3px solid #e63a45'} borderRight={'3px solid #e63a45'}></Text>
  <Text  as={motion.span} animation={`${animationKeyframes} 1s linear infinite .2s`} position={'absolute'} left={'-10px'} top={'-10px'} w={'100%'} h={'100%'} boxSizing='border-box' border={'none'} borderBottom={'3px solid #e63a45'} borderRight={'3px solid #e63a45'}></Text>
  <Text  as={motion.span} animation={`${animationKeyframes} 1s linear infinite .4s`} position={'absolute'} left={'0px'} top={'0px'} w={'100%'} h={'100%'} boxSizing='border-box' border={'none'} borderBottom={'3px solid #e63a45'} borderRight={'3px solid #e63a45'}></Text>
  <Text  as={motion.span} animation={`${animationKeyframes} 1s linear infinite .6s`} position={'absolute'} left={'10px'} top={'10px'} w={'100%'} h={'100%'} boxSizing='border-box' border={'none'} borderBottom={'3px solid #e63a45'} borderRight={'3px solid #e63a45'}></Text>
  <Text  as={motion.span} animation={`${animationKeyframes} 1s linear infinite .8s`} position={'absolute'} left={'20px'} top={'20px'} w={'100%'} h={'100%'} boxSizing='border-box' border={'none'} borderBottom={'3px solid #e63a45'} borderRight={'3px solid #e63a45'}></Text>
</Box>
  )
}

export default ScrollArrow