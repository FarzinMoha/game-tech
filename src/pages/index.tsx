import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Flex } from '@chakra-ui/react'
import Landing from '@/components/page-components/home-components/landing/Landing'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log('home')
  return (
    <>
      <Head>
        <title>Game Tech</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as='main'>
        <Flex as={'section'} w={'100vw'} h={'calc(100vh - 70px)'}>
          <Landing/>
        </Flex>
        <Flex as={'section'} w={'100vw'} h={'200vh'} bg={'white'}>1</Flex>
      </Box>
    </>
  )
}
