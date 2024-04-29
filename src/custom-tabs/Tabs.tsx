import { Box, HStack, Stack, Text } from '@chakra-ui/react'
import { Data } from './types'

const Tabs = (props: {
    content: Data[],
    tabIndex: number,
    handleClick: (arg: number) => void
}) => {

    const tabs = props.content.map((item, index) => {
        const bgColor = props.tabIndex === index ? 'teal' : '';
        const labelColor = props.tabIndex === index ? 'white' : '';

        return (
            <Box
                key={item.id}
                p={2}
                borderRadius={'5px'}
                backgroundColor={`${bgColor}`}
                color={`${labelColor}`}
                onClick={() => props.handleClick(index)}
            >
                <Text
                    as={'span'}
                    style={{ cursor: 'pointer' }}
                >
                    {item.label}
                </Text>
            </Box>
        )
    })


    const content = props.content[props.tabIndex] && props.content[props.tabIndex].content

    return (
        <>
            <Stack>
                <HStack>
                    {tabs}
                </HStack>
                <Box>
                    {content}
                </Box>
            </Stack>
        </>
    )
}

export default Tabs