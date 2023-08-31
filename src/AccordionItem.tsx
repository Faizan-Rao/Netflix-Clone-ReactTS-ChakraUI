
import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,

} from '@chakra-ui/react'


import './App.css'
import {  Box } from '@chakra-ui/react'

type AccordionItmProps = {
    question : string;
    answer : string;
}
const AItem = ({question, answer} : AccordionItmProps) => {
    return (
        <AccordionItem bgColor={'gray.800'} border={'none'} >
            <h2>
                <AccordionButton >
                    <Box as="h1" flex='1' fontSize={'4xl'} textAlign='left'>
                       {question}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel bg={'gray.700'} fontSize={'2xl'}   >
                {answer}
            </AccordionPanel>
        </AccordionItem>
    )
}

export default AItem