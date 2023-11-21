import ScrollArrow from '@/components/scroll-arrow/ScrollArrow';
import StoreBtn from '@/components/store-btn/StoreBtn';
import TextAnimation from '@/components/text-animation/TextAnimation';
import styles from '@/constant/styles';
import LandingBgIcon from '@/icons/LandingBgIcon'
import LogoTypeEnIcon from '@/icons/LogoTypeEnIcon';
import LogoTypeFaIcon from '@/icons/LogoTypeFaIcon';
import { Button, Flex, Input, InputGroup, InputRightElement, Text, keyframes } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import React from 'react'

const Landing = () => {
    const animationKeyframes = keyframes`
    0% { transform: scaleY(0)}
    100% { transform: scale(1)}
  `;
  const animation = `${animationKeyframes} .2s linear forwards 2s`;
    const animationKeyframes2 = keyframes`
    0% { opacity: 0}
    100% { opacity: 1}
  `;
  const animation2 = `${animationKeyframes2} 1s linear forwards 2s`;
  console.log('landing')
  return (
    <Flex as={'div'} position={'relative'} w={'100vw'} h={'100vh'}>
        <Flex as={'div'} position={'absolute'} top={0} left={0} overflow={'hidden'} w={'100vw'} h={'100vh'} justifyContent={'center'} alignItems={'center'} zIndex={1}><LandingBgIcon size={1000} /></Flex>
        <Flex as={'div'} position={'absolute'} top={0} left={0} overflow={'hidden'} w={'100vw'} h={'100vh'} justifyContent={'center'} alignItems={'center'} zIndex={2} backdropFilter={'blur(100px)'}></Flex>
        <Flex as={motion.div} transformOrigin={'top'} transform={'auto'} scaleY={0} animation={animation} position={'absolute'} top={0} left={0} overflow={'hidden'} w={'100vw'} h={'100vh'} justifyContent={'center'} alignItems={'center'} zIndex={3} bg={'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)'}></Flex>
        <Flex as={motion.div} animation={animation2} opacity={0} position={'absolute'} top={0} left={0} w={'100vw'} h={'calc(100vh - 70px)'} zIndex={4} justifyContent={'space-between'} alignItems={'center'}>
          <Flex direction={'column'} w={'60%'} h={'calc(100vh - 70px)'} justifyContent={'center'} alignItems={'center'}>
            <TextAnimation/>
            <InputGroup w={'80%'} mt={16}>
      <Input
      w={'100%'}
      h={'45px'}
      pl={10}
      borderRadius={10}
      border={`1px solid ${styles.colors.black100}`}
      outline={'none'}
        placeholder='Search Product'
      />
      <InputRightElement>
        <Button w={'200px'} bg={styles.colors.orange1} cursor={'pointer'} transition={'.3s'} _hover={{bg:styles.colors.orange2}} h='45px' borderRightRadius={10} outline={'none'} border={`1px solid ${styles.colors.black100}`}  onClick={()=>{console.log('first')}}>
          <Text as={'span'}>جستجوی محصول</Text>
        </Button>
      </InputRightElement>
    </InputGroup>
{/* <Text fontSize={35} fontWeight={700}  color={styles.colors.orange1} style={{WebkitTextStroke:`.1px ${styles.colors.orange1}`}} my={3} mt={16}>پاتوق گیمر ها GameTech</Text> */}
{/* <Text fontSize={35} fontWeight={700}  color={styles.colors.orange1} style={{WebkitTextStroke:`.1px ${styles.colors.orange1}`}} my={3}>فروش کلیه تجهیزات گیمینگ</Text> */}
          </Flex>
          <Flex w={'40%'} h={'calc(100vh - 70px)'} justifyContent={'center'} alignItems={'center'}>
            <LogoTypeFaIcon size={500} />
          </Flex>
        </Flex>
        <ScrollArrow/>
        <StoreBtn/>
    </Flex>
  )
}

export default Landing