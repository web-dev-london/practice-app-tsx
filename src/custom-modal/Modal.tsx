import { Button } from "@chakra-ui/react"
import { useState } from "react"
import ModalContent from "./ModalContent";

const Modal = () => {
    const [showModal, setShowModal] = useState(false);

    const handleToggleModal = () => {
        setShowModal(!showModal)
    }

    const modal = showModal
        && <ModalContent
            handleToggle={handleToggleModal}
        />


    return (
        <>
            <Button
                position={'absolute'}
                zIndex={'-1'}
                colorScheme="purple"
                onClick={() => setShowModal(true)}
            >
                Open Modal Popup
            </Button>
            {modal}
        </>
    )
}

export default Modal