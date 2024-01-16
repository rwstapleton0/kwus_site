
import parchment from '../assets/patchment.png'
import { Box, Container, Flex, Heading } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

function QuestBox(props: any) {
    return (
        <Container shrink={"1"} grow={"0"}style={{ 
            position: "relative",
            width: "360px"
        }}>
            <Link to={`/quest/${props.index}/chapter/1`}>
                <img src={parchment} style={{ width: "550px"}} alt="parchment" />
                <Container px="9" py="6" style={{ position: "absolute", color: "#1d1d1d", left: "0", top: "0" }}>
                    <Flex direction={"column"} justify={"between"}>
                        <Container mr="2" height={"8"}>
                            <Heading size={"5"} >{props.item.name}</Heading>
                        </Container>
                            <Heading size={"4"}>Quest Reward</Heading>
                            <img
                                src={getImageUrl(props.item.imgName)}
                                style={{ width: "100px", paddingTop: "12px"}}
                                alt="title"
                            />

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