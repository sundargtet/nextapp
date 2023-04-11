import { Box } from "@chakra-ui/react"
import Bookamarks from "../molecules/bookmarks"
import Menu from '../molecules/menu'

export default function Navbar() {
    return (
        <Box display={'flex'} justifyContent='space-between' bg={'gray.200'} h='50' pos={'sticky'} top={0} zIndex={1}>
            <Box>
                quotes
            </Box>
            <Box display={'flex'}>
                <Bookamarks />
                <Menu />
            </Box>
        </Box>
    )
}