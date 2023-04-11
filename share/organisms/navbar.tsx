import { Box } from "@chakra-ui/react"
import Bookamarks from "../molecules/bookmarks"

export default function Navbar() {
    return (
        <Box display={'flex'} justifyContent='space-between'>
            <Box>
                quotes
            </Box>
            <Box>
                <Bookamarks />
            </Box>
        </Box>
    )
}