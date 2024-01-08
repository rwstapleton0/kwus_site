import { ConnectButton } from "@mysten/dapp-kit";
import { Box, Flex, Button } from "@radix-ui/themes";
import logo from '../assets/logo.png';
import LanguageDropdown from '../components/LanguageDropdown'
import { Link } from "react-router-dom";

function KWUSHeader() {
    return (

        <Flex
            position="sticky"
            pt="2"
            justify="between"
            align="center"
        >
            <Box>
                <Link to="/">
                <img className="logo" src={logo} alt="logo" />
                </Link>
            </Box>  
            <Flex align="center">
                <Box pr="4">
                    <Link to={`/quests`}>
                        <Button
                            variant="outline"
                            size="3"
                            radius="large"
                            style={{
                                gap: "var(--space-1)"
                            }}
                        >
                            Quests
                        </Button>
                    </Link>
                </Box>
                <ConnectButton />
                <Box pl="4">
                    <LanguageDropdown />
                </Box>
            </Flex>
        </Flex>
    )
}

export default KWUSHeader;