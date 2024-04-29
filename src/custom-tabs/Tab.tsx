import { Container } from '@chakra-ui/react';
import { useState } from 'react';
import Tabs from './Tabs';
import { tabItems } from './data';

const Tab = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleClick = <T extends number>(currentIndex: T) => {
        setTabIndex(currentIndex)
    }


    return (
        <>
            <Container
                p={'10px'}
                maxW={'4xl'}
            >
                <Tabs
                    content={tabItems}
                    handleClick={handleClick}
                    tabIndex={tabIndex}
                />
            </Container>
        </>
    )
}

export default Tab