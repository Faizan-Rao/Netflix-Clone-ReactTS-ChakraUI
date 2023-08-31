import { Container } from '@chakra-ui/react'
import './App.css'
import { Button, Heading, Input, Box } from '@chakra-ui/react'
import Section from './Section'
import FAQ from './FAQ'
function App() {


  return (
    // Hero Container
    <div className={'main-container'}>
      <Container display={'flex'}  alignItems={'center'} flexDirection={'column'} maxW='container.xl' h={'2xl'} >
        <nav className={'nav'}>
          <Heading as={'h1'} size={'xl'} className='logo' >NETFLIX</Heading>
          <Button bg={'red.500'} color={'white'} className='btn'  > Sign up</Button>
        </nav>
        <div className='hero'>
          <Heading as={'h1'} size={'2xl'} >Unlimited movies, TV shows, and more</Heading>
          <Heading as={'h6'} size={'md'} mt={5} >Watch anywhere. Cancel anytime.</Heading>
          <div className='input-grp'>
            <Input placeholder='Search Favourite Movie' size='lg' border={'none'} bg={'black'} w={'full'} />
            <Button bg={'red.500'} color={'white'} className='btn' size={'lg'} fontSize={'2xl'} > Search</Button>
          </div>
        </div>
      </Container>
    
      <Section heading='Enjoy On Your TV' subHeading='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.' imgSrc='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'/>
      
      <Section heading='Enjoy On Your TV' subHeading='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.' imgSrc='https://occ-0-5346-2773.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55' flexReverse={'row-reverse'}/>
     
      <Section heading='Enjoy On Your TV' subHeading='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.' imgSrc='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' />
      
      <FAQ/>
     
      <footer className='footer'>
        All Copy Rights Reserved 2023 Netflix.com
      </footer>
    </div>
  )
}

export default App
