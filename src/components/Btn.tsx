
import styles from "@/constant/styles";
import { Button, ButtonProps, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type BTNProps = {
  children: ReactNode;
  color?: string;
  bg?: string;
  WithBorder?: boolean;
  large?: boolean;
  orangeBtn?: boolean;
  orange2Btn?: boolean;
  titleButton?:boolean
};

const Btn: React.FC<ButtonProps & BTNProps> = ({
  children,
  color =  styles.colors.black100,
  orangeBtn,
  orange2Btn,
  WithBorder,
  large,
  titleButton,
  ...props
}: BTNProps) => {
  return (
    <Button
      as={'button'}
      height={titleButton ? '32px' : 50}
      w={['full' , titleButton ? 150 : large ? 250 : 175]}
      borderRadius={titleButton ? 36 : 50}
      border={
        WithBorder ? `1px solid ${ styles.colors.black100}` : "1px solid transparent"
      }
      bg={ orangeBtn ?  styles.colors.orange1 :  orange2Btn ?  styles.colors.orange2 : titleButton ?  styles.colors.white100 :  "transparent"}
      color={titleButton ?  styles.colors.white100 :  styles.colors.black100}
      _hover={( orangeBtn ||  orange2Btn || titleButton) ? {opacity: .85 } : {border:`1px solid ${ styles.colors.black100}`}}
      _disabled={{cursor:'not-allowed',bg:'red'}}
      {...props}
    >
      <Text as={'span'} 
      userSelect={'none'}      
      textTransform={'lowercase'} 
      _firstLetter={{textTransform:'capitalize'}}
      >
        {children}
      </Text>
    </Button>
  );
};

export default Btn;