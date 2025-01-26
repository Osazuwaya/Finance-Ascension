import { Avatar, AvatarRoot, Box, Button, Card, Flex, Image } from '@chakra-ui/react'
import { RiArrowRightLine } from "react-icons/ri"
import React, { useState } from 'react'
import { motion } from "framer-motion";

import Char1 from '../../../imgs/char1.png'
import Char2 from '../../../imgs/char2.png'
import Char3 from '../../../imgs/char3.png'
import Char4 from '../../../imgs/char4.gif'
import Char5 from '../../../imgs/char5.gif'
import { useNavigate } from 'react-router-dom';

function MainPage() {
    const navigate = useNavigate()
    const [charSelect, setCharSelect] = useState(false);

  return (
    <Flex w={'100%'} h={'100vh'} bg={'#e6e6e6'} justify={'center'} align={'center'} >
        <Flex w={'85%'} h={'70%'} flexDir={'column'} bg={'red'} borderRadius={'md'} rounded={'1rem'} overflow={'hidden'}>
            <Flex w={'100%'} h={'10%'} flexBasis={'15%'} bg={'#6D597A'} justify={'flex-end'} align={'center'}>
                <Button color={'white'} bg={'#355070'} mr={'2rem'}>Back</Button>
            </Flex>
            <Flex w={'100%'} h={'40%'} flexDir={'row'} flexBasis={'65%'} justify={'space-evenly'} align={'center'} bg={'#6D597A'}>
                <Card.Root w={{xl: '12.5rem'}} h={'85%'} >
                    <Card.Body flexDir={'row'} gap='2rem'>
                        <Image src={Char1}></Image>
                    </Card.Body>
                </Card.Root>

                <Card.Root w={{xl: '12.5rem'}} h={'85%'}>
                    <Card.Body flexDir={'row'} gap='2rem'>
                        <Image src={Char2}></Image>
                    </Card.Body>
                </Card.Root>

                <Card.Root w={{xl: '12.5rem'}} h={'85%'}>
                    <Card.Body flexDir={'row'} gap='2rem'>
                        <Image src={Char3}></Image>
                    </Card.Body>
                </Card.Root>

                <Card.Root w={{xl: '12.5rem'}} h={'85%'}>
                    <Card.Body flexDir={'row'} gap='2rem'>
                        <Image src={Char4}></Image>
                    </Card.Body>
                </Card.Root>

                <Card.Root w={{xl: '12.5rem'}} h={'85%'}>
                    <Card.Body flexDir={'row'} gap='2rem'>
                        <Image src={Char5}></Image>
                    </Card.Body>
                </Card.Root>                
            </Flex>
            <Flex w={'100%'} h={'40%'} flexBasis={'20%'} bg={'#6D597A'} justify={'center'} align={'center'}>
                <Button size={'lg'} color={'white'} bg={'#B56576'} borderWidth={'.15rem'} animation={'scale-out'} onClick={() => navigate('/stats-page')}>
                    Continue <RiArrowRightLine />
                </Button>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default MainPage