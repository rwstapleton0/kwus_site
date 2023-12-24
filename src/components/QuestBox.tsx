
import parchment from '../assets/patchment.png'
import { Box, Container, Flex, Heading } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

function QuestBox(props: any) {
    return (
        <Container style={{ position: "relative" }}>
            <Link to={`/quest/${props.key}/chapter/1`}> {/* should jump to chapter? */}
                <img src={parchment} style={{ width: "550px"}} alt="parchment" />
                <Container px="6" py="9" style={{ position: "absolute", color: "#1d1d1d", left: "0", top: "0" }}>
                    <Flex>
                        <Box mr="2" style={{ flex: "50%", borderRight: "solid 1px #1d1d1d"}}>
                            <Heading>{props.item.name}</Heading>
                        </Box>
                        <Container px="5" style={{ flex: "50%" }}>
                            <Heading>Quest Reward {props.key}</Heading>
                            <img
                                src={getImageUrl(props.item.imgName)}
                                style={{ width: "180px", paddingTop: "12px"}}
                                alt="title"
                            />
                        </Container>
                    </Flex>
                </Container>
            </Link>
        </Container>
    );
}

function getImageUrl(name: String) {
    return new URL(`../assets/${name}.png`, import.meta.url).href
}

export default QuestBox