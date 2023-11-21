import LogoIcon from '@/icons/LogoIcon'
import { Button, Flex, keyframes } from '@chakra-ui/react'
import React from 'react'
import Btn from '../Btn'
import BagIcon from '@/icons/BagIcon'
import styles from '@/constant/styles'
import { motion } from 'framer-motion'

const Navbar = () => {
    console.log('navbar')
    const animationKeyframes1 = keyframes`
    0% { opacity: 0}
    100% { opacity: 1}
  `;
  const animation = `${animationKeyframes1} 1s linear forwards 2s`;
  return (
    <Flex  px={30} justifyContent={'space-between'} alignItems={'center'} opacity={0} as={motion.nav} animation={animation} w={'100vw'} h={'70px'} position={'absolute'} top={0} left={0} zIndex={5}>
        <LogoIcon size={50}/>
        <Flex justifyContent={'center'} alignItems={'center'} w={'fit-content'} h={'70px'} ml={50}>
            <Btn WithBorder h={'fit-content'} py={10} w={'fit-content'} px={45} >ورود</Btn>
            <Btn orangeBtn h={'fit-content'} py={10} w={'fit-content'} px={45} ml={20}>ثبت نام</Btn>
            <BagIcon size={30} color={styles.colors.orange1} />
        </Flex>
    </Flex>
  )
}

export default Navbar