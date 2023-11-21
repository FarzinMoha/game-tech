import { Flex, Image, Text, keyframes } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react'

const StoreBtn = () => {
  const router = useRouter()
    const animationKeyframes = keyframes`
    0% { transform: rotate(0)}
    100% { transform: rotate(360deg)}
  `;
  const animation = `${animationKeyframes} 5s linear infinite`;
  const animationKeyframes2 = keyframes`
  0% { opacity: 0}
  100% { opacity: 1}
`;
const animation2 = `${animationKeyframes2} 1s linear forwards 2s`;
console.log('StoreBtn')
  return (
    <Flex onClick={()=>router.push('/store')} as={motion.div} animation={animation2} opacity={0} cursor={'pointer'} justify={'center'} alignItems={'center'} position={'fixed'} bottom={20} right={20} w={'150px'} h={'150px'} zIndex={5}>
        <Image as={motion.img} animation={animation} w={'100%'} h={'100%'} position={'absolute'} left={0} right={0} src='/inkpx-curved-text (2).png' alt='store' />
        <Text>ورود</Text>
    </Flex>
  )
}

export default StoreBtn