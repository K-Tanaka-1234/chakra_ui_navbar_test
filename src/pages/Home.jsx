import {Box, Flex} from "@chakra-ui/react"
 
export default function Home()
{
    return <Flex width="100%" height="100%">
        <Box bg="red" width="50%" height="100px"></Box>
        <Box bg="blue" width="50%" height="100px"></Box>
    </Flex>
}