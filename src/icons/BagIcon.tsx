import styles from "@/constant/styles";
import { icon_props } from "@/type/type";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { HiShoppingBag } from "react-icons/hi2";

const BagIcon = ({ size, color }: icon_props) => {
  return (
    <Box position={"relative"} ml={10}>
      <HiShoppingBag size={size} color={color} />
      <Text as={'span'} position={'absolute'} bottom={-15} right={-10} bg={styles.colors.orange2} color={styles.colors.black100} w={'25px'} h={'25px'} borderRadius={'50%'} textAlign={'center'}>0</Text>
    </Box>
  );
};

export default BagIcon;
