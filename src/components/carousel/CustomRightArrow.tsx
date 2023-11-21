import styles from '@/constant/styles';
import Right_Arrow_Icon from '@/icons/Right_Arrow_Icon';
import { Button, Text } from '@chakra-ui/react';
import React from 'react'

const CustomRightArrow = () => {
  return (
    <Button 
    position={'absolute'}
    outline={'none'}
    transition={'.3s'}
    borderRadius={'35px'}
    bg={styles.colors.lightBlack}
    _hover={{bg:styles.colors.primary}}
    zIndex={1000}
    border={0}
    minH={'43px'}
    minW={'43px'}
    opacity={1}
    cursor={'pointer'}
    right={0}
    >
        <Text 
        as={'span'}
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'auto'}
        translateX='-50%'
        translateY='-50%'
>
    <Right_Arrow_Icon size={24} color='white' />
    </Text>
    </Button>
  )
}

export default CustomRightArrow

