import {
    chakra,
    Dialog,
    Flex,
    Portal,
    Spacer,
    Textarea,
} from "@chakra-ui/react"
import Button from "@shared/ui/button"
import CloseIcon from "@assets/icons/close.svg"
import Select from "@shared/ui/select"
import MOCK_REQUESTS_DATA from "@shared/const/mock-data"
import Input from "@shared/ui/input"

const CloseModalIcon = chakra("div", {
    base: {
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "18px",
        height: "18px",
        backgroundImage: `url("${CloseIcon}")`
    },
})


const CreateRequestForm = chakra("form", {
    base: {
        display: "flex",
        flexDirection: { base: "column", md: "row" },
        gap: "32px"
    }
})


const ADDRESS_OPTIONS = MOCK_REQUESTS_DATA.map(el => el.address.address)

const StyledSelect = chakra(Select, {
    base: {
        border: "1px solid #B0B0B0",
        height: "48px",
        color: "#B0B0B0",
        fontSize: "14px",
        width: "full",
        borderRadius: "8px",
        padding: "15.5px 16px",
        fontWeight: 400,
    },

})

const ModalOpenButton = chakra(Button, {
    base: {},
    variants: {
        positionVariant: {
            floatingActionButton: {
                position: {
                    base: 'fixed',
                    md: "initial"
                },
                bottom: "30px",
                right: "16px",
            }
        }

    }
})


const CreateRequestModal = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <ModalOpenButton variant="primary" positionVariant="floatingActionButton">Создать новую заявку</ModalOpenButton>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />

                <Dialog.Positioner>
                    <Dialog.Content borderRadius={{ base: 0, md: "15px" }} marginTop={{ base: 0, md: "64px" }} minH={{ base: "100dvh", md: "auto" }} minW={{ base: "100dvw", md: "52dvw" }}>

                        <Dialog.Header p={{ base: "", md: "30px 36px 0 36px  " }} display="flex" justifyContent="space-between" alignItems="center">
                            <Dialog.Title fontSize="24px" fontWeight="medium">Создание заявки</Dialog.Title>
                            <Dialog.CloseTrigger asChild>
                                <Button position="inherit" bgColor="white" p="0">
                                    <CloseModalIcon />
                                </Button>
                            </Dialog.CloseTrigger>
                        </Dialog.Header>

                        <Dialog.Body p={{ base: "", md: "32px 36px" }}>
                            <CreateRequestForm>
                                <Spacer spaceY="46px" w="full">
                                    <Flex gap="8px" flexDirection="column">
                                        <label htmlFor="address">Аптека</label>
                                        <StyledSelect id="address" name="address" placeholder="Выберите аптеку от которой исходит заявка" options={ADDRESS_OPTIONS} onSelect={() => { }} />

                                    </Flex>
                                    <Flex gap="8px" flexDirection="column">
                                        <label htmlFor="">Категория заявки</label>
                                        <StyledSelect id="category" name="category" placeholder="Холодильники, кондиционеры или другое" options={ADDRESS_OPTIONS} onSelect={() => { }} />
                                        <Flex gap="8px">
                                            <input id="garantee" name="garantee" type="checkbox" />
                                            <label htmlFor="garantee">Гарантийный случай?</label>
                                        </Flex>
                                    </Flex>
                                </Spacer>
                                <Spacer spaceY="24px" w="full">
                                    <Flex flexDirection="column" gap="8px">
                                        <label htmlFor="theme">Тема заявки</label>
                                        <Input h="70px" p="13px 16px 23px 16px" id="theme" name="theme" placeholder="Дайте заявке краткое название: например, сломался холодильник или не работает кондиционер" />
                                    </Flex>
                                    <Flex flexDirection="column" gap="8px">
                                        <label htmlFor="priority">Приоритет</label>
                                        <StyledSelect id="priority" name="priority" placeholder="Холодильники, кондиционеры или другое" options={ADDRESS_OPTIONS} onSelect={() => { }} />
                                    </Flex>
                                    <Flex flexDirection="column" gap="8px">
                                        <label htmlFor="priority">Описание проблемы</label>
                                        <Textarea rows={6} id="priority" name="priority" placeholder="Кратко опишите проблему" />
                                    </Flex>
                                    <Flex flexDirection="column" gap="8px">
                                        <label htmlFor="files">Прикрепите файлы</label>
                                    </Flex>

                                </Spacer>
                            </CreateRequestForm>
                        </Dialog.Body>
                        <Dialog.Footer justifyContent="flex-start">
                            <Button variant="primary">Создать заявку</Button>
                            <Dialog.CloseTrigger asChild position="inherit">
                                <Button>Отмена</Button>
                            </Dialog.CloseTrigger>
                        </Dialog.Footer>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}

export default CreateRequestModal