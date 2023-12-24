import { Container, Heading, Flex } from "@radix-ui/themes";
import KWUSHeader from '../components/KWUSHeader';
import questList from '../quests'
import QuestBox from "../components/QuestBox";

function Quests() {
    const questItems = questList.map((quest, i) =>
        <QuestBox item={quest} key={i} />
    );
    return (
        <Container
            size="4"
        >
            <KWUSHeader/>
                {/* <QuestBox item={questList[0]} index={0}/> */}
            <Container py="4">
                <Heading size="8"> Quests</Heading>
            </Container>
            <Flex wrap="wrap" gap="6" justify="between">
                {questItems}
            </Flex>
        </Container>
    )
}

export default Quests;