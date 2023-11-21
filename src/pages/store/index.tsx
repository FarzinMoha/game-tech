import LogoBg from '@/icons/Logo'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const Store = () => {
  return (
    <Box w={'100vw'} minH={'300vh'} pt={100}>
        <Flex w={'100vw'} h={'100vh'} position={'fixed'} top={0} left={0} zIndex={-1}><LogoBg size={100} /></Flex>
    </Box>
  )
}

export default Store