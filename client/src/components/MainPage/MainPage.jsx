import { Avatar, AvatarRoot, Box, Button, Card, Flex, Image } from '@chakra-ui/react'
import { RiArrowRightLine } from "react-icons/ri"
import React, { useState } from 'react'
import { motion } from "framer-motion";


function MainPage() {
    const [charSelect, setCharSelect] = useState(false);

  return (
    <Flex w={'100%'} h={'100vh'} bg={'blue'} justify={'center'} align={'center'} >
        <Flex w={'85%'} h={'70%'} flexDir={'column'} bg={'red'} borderRadius={'md'} rounded={'1rem'} overflow={'hidden'}>
            <Flex w={'100%'} h={'10%'} flexBasis={'15%'} bg={'black'} justify={'flex-end'} align={'center'}>
                <Button colorPalette={'white'} variant={'outline'} mr={'2rem'}>Back</Button>
            </Flex>
            <Flex w={'100%'} h={'40%'} flexDir={'row'} flexBasis={'65%'} justify={'space-evenly'} align={'center'} bg={'black'}>
                <Card.Root w={{xl: '12.5rem'}} h={'85%'} >
                    <Card.Body flexDir={'row'} gap='2rem'>
                        <Image></Image>
                    </Card.Body>
                </Card.Root>

                <Card.Root w={{xl: '12.5rem'}} h={'85%'}>
                    <Card.Body flexDir={'row'} gap='2rem'>
                        <Image></Image>
                    </Card.Body>
                </Card.Root>

                <Card.Root w={{xl: '12.5rem'}} h={'85%'}>
                    <Card.Body flexDir={'row'} gap='2rem'>
                        <Image></Image>
                    </Card.Body>
                </Card.Root>

                <Card.Root w={{xl: '12.5rem'}} h={'85%'}>
                    <Card.Body flexDir={'row'} gap='2rem'>
                        <Image></Image>
                    </Card.Body>
                </Card.Root>

                <Card.Root w={{xl: '12.5rem'}} h={'85%'}>
                    <Card.Body flexDir={'row'} gap='2rem'>
                        <Image></Image>
                    </Card.Body>
                </Card.Root>                
            </Flex>
            <Flex w={'100%'} h={'40%'} flexBasis={'20%'} bg={'white'} justify={'center'} align={'center'}>
                <Button size={'lg'} colorPalette={'orange'} variant={'outline'} borderWidth={'.15rem'} animation={'scale-out'}>
                    Continue <RiArrowRightLine />
                </Button>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default MainPage