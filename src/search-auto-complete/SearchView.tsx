import { ListItem, UnorderedList } from "@chakra-ui/react"
import { Posts } from "./types"
import { MouseEvent } from "react"


const SearchView = (props: {
    view: Posts[]
    handleClick: (arg: MouseEvent<HTMLLIElement>) => void
}) => {

    const findItem = props.view.map((item, index) => {
        return (
            <ListItem
                key={index}
                onClick={props.handleClick}
            >
                {item.title}
            </ListItem>
        )
    })

    return (
        <>
            <UnorderedList
                listStyleType={'none'}
            >
                {findItem}
            </UnorderedList>
        </>
    )
}

export default SearchView