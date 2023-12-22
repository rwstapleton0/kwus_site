import { ConnectButton } from "@mysten/dapp-kit";
import { Box, Flex, Button } from "@radix-ui/themes";
import logo from '../assets/logo.png';
import LanguageDropdown from '../components/LanguageDropdown'

function KWUSHeader() {
    return (
        <Flex
            position="sticky"
            py="2"
            justify="between"
            align="center"
        >
            <Box>
                <img className="logo" src={logo} alt="logo" />
            </Box>
            <Box>
                <Button 
                    variant="solid" 
                    size="3" 
                    radius="large"
                    mr="2">Quests</Button>
                <ConnectButton />
                <LanguageDropdown />
            </Box>
        </Flex>
    )
}

export default KWUSHeader;