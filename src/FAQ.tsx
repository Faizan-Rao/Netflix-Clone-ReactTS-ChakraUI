
import {
    Accordion
} from '@chakra-ui/react'

import { Container } from '@chakra-ui/react'
import './App.css'
import { Heading, Input, Button } from '@chakra-ui/react'
import AItem from './AccordionItem'

const FAQ = () => {
    return (
        <>
            <Container display={'flex'} borderTop={"8px"} borderColor={'whiteAlpha.400'} justifyContent={'space-around'} height={'2xl'} color={'whiteAlpha.900'} bg={'black'} maxW='full' flexWrap={'wrap'} p={'20'} textAlign={'justify'} flexDirection={'column'} >
                <Heading as={'h1'} size={'2xl'} textAlign={'center'} >Frequently Asked Question</Heading>
                <Accordion allowToggle >
                    <AItem question='What is Netflix?' answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!" />

                    <AItem question='How much does Netflix Cost?' answer="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs250 to Rs1,100 a month. No extra costs, no contracts." />

                </Accordion>
                <Heading as={'h6'} size={'md'} >Watch anywhere. Cancel anytime.</Heading>
                <div className='input-grp'>
                    <Input placeholder='Enter Email Address' size='lg' border={'none'} bg={'black'} w={'full'} />
                    <Button bg={'red.500'} color={'white'} className='btn' size={'lg'} fontSize={'2xl'} > Get Started &gt; </Button>
                </div>
            </Container>
        </>
    )
}

export default FAQ