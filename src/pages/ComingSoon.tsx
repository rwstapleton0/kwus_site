import { useState } from "react";
import { Container, Flex, Heading, Button, TextField, Checkbox, Text } from "@radix-ui/themes";
import logo from '../assets/logo.png'
import "../styles.css"
import { sendEmailAddress } from "../data"

const validateEmail = (email: string) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export function ComingSoon() {
    const [email, setEmail] = useState();
    const [tncs, setTncs] = useState(false);

    const onChangeEmail = (event: any) => {
        setEmail(event.target.value)
    }

    function checkAndSendEmailAddress() {
        if (email === "" || email === undefined || tncs === false) {
            return // this should show a cannot be empty popup
        }
        if (validateEmail(email)) {
            console.log(email)
            sendEmailAddress(email, tncs)
        }
    }
    return (
        <Flex height={"100%"} style={{ alignItems: "center", height: "100vh" }} align={"center"}>
            <Container pb={"9"} style={{ width: "300px" }} >
                <img src={logo} style={{
                    width: "240px",
                    paddingBottom: "12px",
                    margin: "auto"
                }} alt="scene" />
                <Heading align={"center"} size={"9"} style={{ paddingBottom: "12px" }} className="epic">Arriving Forthwith!</Heading>
                <Heading align={"center"} size={"4"} style={{ paddingBottom: "24px" }}>Await Our Next Proclamation!</Heading>
                <Flex direction="column" gap={"3"} style={{ width: 400, margin: "auto" }} >
                    <TextField.Input type={"email"} size={"3"} placeholder="Enter your email" onChange={onChangeEmail} />

                    <Text as="label" size="2">
                        <Flex gap="2">
                            <Checkbox onCheckedChange={(c:any) => setTncs(c)} /> Agree to <a href={"/private-policy.html"}>Terms and Conditions</a>
                        </Flex>
                    </Text>
                    <Button onClick={checkAndSendEmailAddress}
                        color="gold" size={"3"} style={{ width: 200, flexShrink: 1, flexGrow: 0 }}>
                        🛡️ Receive Updates 🗡️
                    </Button>
                </Flex>

            </Container>
        </Flex>
    )
}