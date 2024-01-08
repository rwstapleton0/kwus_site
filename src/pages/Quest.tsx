import { Container, Flex, Heading } from "@radix-ui/themes";
import KWUSHeader from '../components/KWUSHeader';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'

import questList from "../quests";
import CodeEditor from "../components/CodeEditor"

type QuestParams = {
    questId: string,
    chapterId: string,
}

type DisplayViewProps = {
    completeCode: string | undefined,
}

function DisplayView(props: DisplayViewProps) {
    return (
        <>
            {
                props.completeCode != undefined ? <CodeEditor initCode="some code" completeCode="other code smile :*)"/> :
                true ? <></> : <></>
            }
        </>
    )
}

function Quest() {

    let { questId, chapterId } = useParams<keyof QuestParams>() as QuestParams; // TODO: still unsure??
    let qId = parseInt(questId);
    let cId = parseInt(chapterId);
    let quest = questList[qId];
    // let chapter = quest.chapter[cId];

    let route = `/quest/${qId}/chapter/`;

    return (
        <Container
            mx="2"
            size="4"
        >
            <KWUSHeader />
            <Container
                p="2"
                style={{
                    boxShadow: '2px 2px 2px #5c5c5c',
                    borderRadius: 'var(--radius-3)'
                }}
            >
                <Flex justify={"between"}>
                    <Heading size="6">{quest?.name}</Heading>
                    <Flex align={"center"} gap="4">
                        <Link to={cId != 1 ? `${route}${cId - 1}` : ''}>
                            <ArrowLeftIcon
                                width={28} height={28}
                                color={cId === 1 ? '#5c5c5c' : '#fff'}
                            />
                        </Link>
                        <Container >
                            <Heading size="6">Chapter {cId} of {quest.questLen}</Heading>
                        </Container>
                        <Link to={cId != quest.questLen ? `${route}${cId + 1}` : ''}>
                            <ArrowRightIcon
                                width={28} height={28}
                                color={cId === quest.questLen ? '#5c5c5c' : '#fff'}
                            />
                        </Link>
                    </Flex>
                </Flex>
            </Container>
            <Flex align="center">
                <Container style={{
                    transform: "translateY(-2px)",
                    height: "80vh", flex: "50%",
                    boxShadow: '2px 2px 2px #5c5c5c',
                    borderRadius: 'var(--radius-3)'
                }}
                >

                </Container>
                <Container style={{ flex: "50%" }}>
                    <DisplayView completeCode="" />
                </Container>
            </Flex>
        </Container>
    )
}

export default Quest;