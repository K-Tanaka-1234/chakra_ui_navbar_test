import {Box, Flex, Spacer, Stack} from "@chakra-ui/react"

export default function Layout1({children})
{
    return <Flex width="100%" height="100%">
        <Stack width="50px" height="100%" bg="gray" justifyContent="start" alignItems='center'>
            <Box width={40} height={40} bg="orange" margin={5}></Box>
            <Box width={40} height={40} bg="orange" margin={5}></Box>
            <Box width={40} height={40} bg="orange" margin={5}></Box>
            <Box width={40} height={40} bg="orange" margin={5}></Box>
            <Box width={40} height={40} bg="orange" margin={5}></Box>
            <Box width={40} height={40} bg="orange" margin={5}></Box>
            <Box width={40} height={40} bg="orange" margin={5}></Box>
        </Stack>
        {children}
    </Flex>
}