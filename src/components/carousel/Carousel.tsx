import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Carousel_Item from './Carousel_Item';
import { Box, Text } from '@chakra-ui/react';
import styles from '@/constant/styles';
import data from '../../../fake-data/data.json'
// import Scroll_Arrow from '../scroll-arrow/Scroll_Arrow';
// import data from '../../../json/magazine.json'
const Carousel_Component = () => {
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 540 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 540, min: 0 },
    items: 1
  }
};
return(
    <Box mt={3} w={'100%'} pb={[10,10,0]}>   
        <Carousel 
        infinite
        responsive={responsive}
        autoPlay
        removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {data?.map((item:any)=><Carousel_Item item={item} key={item?.id} />)}
        </Carousel>
    </Box>
)
}
export default Carousel_Component