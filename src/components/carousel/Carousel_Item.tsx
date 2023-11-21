import { Box, Flex, Link, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import React from 'react'
import styles from '@/constant/styles'


const Carousel_Item = ({item}:{item:any}) => {
    
  return (
    <Box w={'200px'} h={'300px'} bg={'red'} 
          _after={{display:['none','none','unset'],zIndex:3,w:"100%",h:'360px',content: '" "',bg:styles.colors.orange1,position:'absolute',top:0,left:0,opacity:0,transition:'.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms',transform:'auto',scale:0,borderRadius:"100%"}}
     _active={{_after:{display:['none','none','unset'],w:"100%",h:'360px',content: '" "',bg:styles.colors.orange1,position:'absolute',top:0,left:0,opacity:1,scale:1.5}}}
     as={'a'} display={'flex'} mx={8} borderRadius={10} my={2} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'} overflow={'hidden'}  position={'relative'}  transition={'.3s'} cursor={'pointer'} transform={'auto'} _hover={{translateY:'2px'}}>
         <Image  position={'absolute'} top={0} left={0} right={0} h={'auto'} w={'100%'} px={0} src={item?.image} alt={item?.text}/>
         <Box position={'absolute'} bottom={0} left={0} zIndex={2} w={"100%"} h={'180px'} bg={'linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)'} ></Box>
         <Flex direction={'column'} justifyContent={'flex-start'} alignItems={'center'} textAlign={'center'} position={'absolute'} bottom={0} left={0} zIndex={3} w={"100%"} h={['90px','100px','99px']}>
           <Box h={['40px','40px','40px']} w={"100%"}>
             <Text w={"100%"} style={{display: '-webkit-box',lineClamp:2,WebkitLineClamp:2,boxOrient:'vertical',WebkitBoxOrient:'vertical'}} overflow={'hidden'} as={'span'} color={styles.colors.black100} px={2} lineHeight={'short'} fontSize={11} fontWeight={700}>{item?.text}</Text>
           </Box>
           <Box h={['50px','60px','59px']} w={"100%"}>
             <Text w={"100%"} style={{display: '-webkit-box',lineClamp:3,WebkitLineClamp:3,boxOrient:'vertical',WebkitBoxOrient:'vertical'}} overflow={'hidden'} as={'span'} mt={1} color={styles.colors.black100} px={2} lineHeight={'short'} fontSize={9} fontWeight={400}>{item?.price}</Text>
           </Box>
         </Flex>
    </Box>
  )
}

export default Carousel_Item
