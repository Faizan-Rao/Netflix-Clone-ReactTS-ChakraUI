
import { Container } from '@chakra-ui/react'
import './App.css'
import {  Heading, Box } from '@chakra-ui/react'


type SectionProps = {
    heading :string;
    subHeading: string;
    imgSrc: string;
    flexReverse?: unknown;
}
const Section = ({heading, subHeading, imgSrc, flexReverse} : SectionProps) => {
  return (
    <Container display={'flex'} borderTop={"8px"} borderColor={'whiteAlpha.400'}  justifyContent={'space-around'} alignItems={'center'} height={'2xl'} color={'whiteAlpha.900'} bg={'black'} maxW='full' flexWrap={'wrap'} p={'20'} textAlign={'justify'}  flexDirection={!flexReverse ? 'row': flexReverse }>
    <Box>
    <Heading as={'h1'} size={'2xl'} >{heading}</Heading>
    <Heading as={'h6'} size={'md'} mt={5} >{subHeading}</Heading>
    </Box>
    <img src={`${imgSrc}`} height={500} width={500} alt="img"  />
  </Container>
  )
}

export default Section