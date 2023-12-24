import { Container, Box, Text, Flex, Heading } from "@radix-ui/themes";
// import { WalletStatus } from "./WalletStatus";
import '../styles.css'
import KWUSHeader from '../components/KWUSHeader';
import hero from '../assets/hero.png';
import QuestBox from "../components/QuestBox";
import questList from "../quests";

function App() {
  
  return (
    <Container
      mx="2"
      size="4"
    >
      <KWUSHeader/>
      <Container my="8">
        <Flex align="center">
          <Box style={{ width: "540px"}}>
            <Heading size="8">🏰 Join the Round Table of Sui Blockchain Enthusiasts.</Heading>
            <Text size="5">Whether you're a squire in coding or a wizard in smart contracts, our platform offers a diverse armory of resources to suit your level. From the basics of Sui's unique architecture to advanced strategies for conquering the decentralized world, we've got your back!</Text>

          </Box>
          <img src={hero} style={{ width: "540px"}} alt="hero" />

        </Flex>
        <Container my="8">
          <Flex align="center">
            <QuestBox item={questList[0]} key={0}/>
            <Box pl="4">
              <Heading size="8">The Squire's Start: First Steps into the Sui Realm</Heading>
              <Text size="5">Embark on a grand adventure with "Knights Who Use Sui" where every hero's journey begins at the beginning. No need to fear the dragons of advanced tech - we start you off in the tranquil meadows of the basics. </Text>

            </Box>
          </Flex>
        </Container>
        {/* <WalletStatus /> */}
      </Container>
    </Container>
  );
}

export default App;
