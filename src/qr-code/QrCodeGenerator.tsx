import { Button, Heading, Input } from "@chakra-ui/react"
import { ChangeEvent, FormEvent, useState } from "react"
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
    const [input, setInput] = useState('');
    const [qrCode, setQrCode] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setQrCode(input);
        setInput('');
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const active = input
        && input.trim() !== ''
        ? false
        : true

    return (
        <>
            <Heading
                fontSize={'18px'}
                mb={'2rem'}
                as={'h4'}
            >
                QR Code Generator
            </Heading>
            <form
                onSubmit={handleSubmit}
            >
                <Input
                    size={'sm'}
                    value={input}
                    type="text"
                    name="qr-code"
                    width={'auto'}
                    mb={5}
                    placeholder="Type to generate"
                    onChange={handleChange}
                />
                <Button
                    size={'sm'}
                    colorScheme="teal"
                    disabled={active}
                    type="submit"
                >
                    Generate
                </Button>
            </form>
            <QRCode
                id={'qr-code-value'}
                value={qrCode}
            />
        </>
    )
}

export default QrCodeGenerator