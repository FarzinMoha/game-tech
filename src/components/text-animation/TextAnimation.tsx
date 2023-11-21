import styles from '@/constant/styles';
import { Text, keyframes } from '@chakra-ui/react';
import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Playstation 5', 'Playstation 4', 'Xbox Series X/S', 'Xbox One','Nintendo Switch','Steam Deck','Professional Controler','Gaming Headset','Mouse & Keyboard','Action Figure'];

const TextAnimation = () => {
  const [index, setIndex] = React.useState(0);
  const animationKeyframes1 = keyframes`
  0% { opacity: 0}
  100% { opacity: 1}
`;
const animation = `${animationKeyframes1} .5s linear forwards 2s`;
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
console.log('TextAnimation')
  return (
    <Text overflow={'hidden'} transform={'auto'} translateY={'0px'} w={'100%'} animation={animation} opacity={0} fontSize={50} fontWeight={700} style={{WebkitTextStroke:'2px solid white'}} color={styles.colors.orange1} textAlign={'center'} mx={'auto'} as={'h1'} position={'relative'} zIndex={1000000}>
      <TextTransition style={{textAlign:'center',justifyContent:'center' , alignItems:'center',WebkitTextStroke:'2px solid white'}} springConfig={presets.molasses}>{TEXTS[index % TEXTS.length]}</TextTransition>
    </Text>
  );
};


export default TextAnimation