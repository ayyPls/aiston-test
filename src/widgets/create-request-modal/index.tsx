import {
    Box,
    chakra,
    Dialog,
    Flex,
    Image,
    Portal,
    Spacer,
    Text,
    Textarea,
} from "@chakra-ui/react"
import Button from "@shared/ui/button"
import CloseIcon from "@assets/icons/close.svg"
import AddIcon from "@assets/icons/add.svg"
import ArrowDownIcon from "@assets/icons/arrow-down.svg"
import Select from "@shared/ui/select"
import MOCK_REQUESTS_DATA from "@shared/const/mock-data"
import i18n from "@shared/i18n"
import { ERequestCategory, ERequestPriority } from "@shared/types/request"
import PriorityLowIcon from "@assets/icons/priority_low.svg"
import PriorityCriticalIcon from "@assets/icons/priority_critical.svg"
import PriorityHighIcon from "@assets/icons/priority_high.svg"
import PriorityMediumIcon from "@assets/icons/priority_medium.svg"
import ImageIcon from "@assets/icons/image.svg"
import { SyntheticEvent, useState } from "react"
import { useDropzone } from "react-dropzone"

// NOTE: all of this is cringe but i have no more time or will to continue.

// TODO: move in generic component that accepts icon src string
const CloseModalIcon = chakra("div", {
    base: {
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "18px",
        height: "18px",
        backgroundImage: `url("${CloseIcon}")`
    },
})

const Label = chakra("label", {
    base: {
        fontSize: "12px"
    }
})


const CreateRequestIcon = chakra("div", {
    base: {
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "18px",
        height: "18px",
        backgroundImage: `url("${AddIcon}")`
    },
})

const CreateRequestForm = chakra("form", {
    base: {
        display: "flex",
        flexDirection: { base: "column", md: "row" },
        gap: "32px",
    }
})


const ADDRESS_OPTIONS = MOCK_REQUESTS_DATA.map(el => el.address.address)
const CATEGORY_OPTIONS = Object.entries(ERequestCategory).map(([categoryKey]) => i18n.t(`requestCategory.${categoryKey}`))
const REQUEST_PRIORITIES = Object.entries(ERequestPriority).map(([priorityKey, priorityValue]) => ({ value: priorityKey, label: i18n.t(`requestPriority.${priorityValue}`) + `: ${i18n.t(`requestPriorityDescription.${priorityValue}`)}` }))

const StyledSelect = chakra(Select, {
    base: {
        height: "48px",
        color: "#B0B0B0",
        fontSize: "14px",
        width: "full",
        borderRadius: "8px",
        padding: "15.5px 16px",
        fontWeight: 400,
        outline: "1px solid #B0B0B0",
        outlineOffset: "-1px",
        backgroundImage: `url("${ArrowDownIcon}")`,
        paddingRight: "40px",
        backgroundPosition: "calc(100% - 16px) center, 16px center",
        _focus: {
            outlineColor: "black",
            outlineWidth: "2px",
            outlineOffset: "1px"
        }
    },
    variants: {
        icon: {
            [ERequestPriority.CRITICAL]: {
                backgroundImage: `url("${ArrowDownIcon}"), url("${PriorityCriticalIcon}")`,
                paddingLeft: "40px"

            },
            [ERequestPriority.HIGH]: {
                backgroundImage: `url("${ArrowDownIcon}"), url("${PriorityHighIcon}")`,
                paddingLeft: "40px"

            },
            [ERequestPriority.MEDIUM]: {
                backgroundImage: `url("${ArrowDownIcon}"), url("${PriorityMediumIcon}")`,
                paddingLeft: "40px"

            },
            [ERequestPriority.LOW]: {
                backgroundImage: `url("${ArrowDownIcon}"), url("${PriorityLowIcon}")`,
                paddingLeft: "40px"
            },
        }
    }

})

const StyledCheckbox = chakra("input", {
    base: {
        width: "20px",
        height: "20px",
    }
})


const ModalOpenButton = chakra(Button, {
    base: {
        display: "flex",
        alignItems: "center",
        gap: "10px"
    },
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

const StyledTextArea = chakra(Textarea, {
    base: {
        fontSize: "14px",
        border: "1px solid #B0B0B0",
        resize: "none",
        borderRadius: "8px",
        scrollbar: "hidden",
        _placeholder: {
            color: "#B0B0B0",
        }
    }
})


const CreateRequestModal = () => {
    const [files, setFiles] = useState<File[]>([])
    const [currentPriority, setCurrentPriority] = useState(ERequestPriority.LOW)
    const [currentAddress, setCurrentAddress] = useState("")
    const [currentCategory, setCurrentCategory] = useState<ERequestCategory>()

    const onPrioritySelect = (targetOption: string) => {
        const targetPriority = REQUEST_PRIORITIES.find(el => el.label === targetOption)?.value
        if (targetPriority) setCurrentPriority(ERequestPriority[targetPriority])
    }
    const onAddressSelect = (targetOption: string) => {
        const targetAddress = ADDRESS_OPTIONS.find(el => el === targetOption)
        if (targetAddress) setCurrentAddress(targetAddress)
    }
    const onCategorySelect = (targetOption: string) => {
        const targetCategory = CATEGORY_OPTIONS.find(el => el === targetOption)
        if (targetCategory) setCurrentCategory(targetCategory as ERequestCategory)
    }

    const onDrop = (acceptedFiles: File[]) => {
        setFiles((files) => [...files, ...acceptedFiles])
    }
    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    const onSubmit = (event: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const dataObject = Object.fromEntries(formData.entries());
        console.log({ ...dataObject, priority: currentPriority, files, address: currentAddress, category: currentCategory })
    }
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <ModalOpenButton variant="primary" positionVariant="floatingActionButton">
                    <CreateRequestIcon />
                    <Text>Создать новую заявку</Text>
                </ModalOpenButton>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />

                <Dialog.Positioner>
                    <Dialog.Content borderRadius={{ base: 0, md: "15px" }} marginTop={{ base: 0, md: "64px" }} marginBottom={{ base: 0 }} minH={{ base: "100dvh", md: "auto" }} minW={{ base: "100dvw", md: "52.44dvw" }}>
                        <Dialog.Header p={{ base: "", md: "30px 36px 0 36px  " }} display="flex" justifyContent="space-between" alignItems="center">
                            <Dialog.Title fontSize="24px" fontWeight="medium">Создание заявки</Dialog.Title>
                            <Dialog.CloseTrigger asChild>
                                <Button position="inherit" bgColor="white" p="0">
                                    <CloseModalIcon />
                                </Button>
                            </Dialog.CloseTrigger>
                        </Dialog.Header>
                        <Dialog.Body p={{ base: "", md: "32px 36px" }}>
                            <CreateRequestForm id="requestCreateForm" onSubmit={onSubmit}>
                                <Spacer spaceY="46px" w="full">
                                    <Flex gap="8px" flexDirection="column">
                                        <Label htmlFor="address">Аптека</Label>
                                        <StyledSelect value={currentAddress} id="address" name="address" placeholder="Выберите аптеку от которой исходит заявка" options={ADDRESS_OPTIONS} onSelect={onAddressSelect} />
                                    </Flex>
                                    <Flex gap="8px" flexDirection="column">
                                        <Label htmlFor="category">Категория заявки</Label>
                                        <StyledSelect value={currentCategory} paddingY="11.5px" id="category" name="category" placeholder="Холодильники, кондиционеры или другое" options={CATEGORY_OPTIONS} onSelect={onCategorySelect} />
                                        <Flex gap="8px">
                                            <StyledCheckbox id="garantee" name="garantee" type="checkbox" />
                                            <Label htmlFor="garantee">Гарантийный случай?</Label>
                                        </Flex>
                                    </Flex>
                                </Spacer>
                                <Spacer spaceY="24px" w="full">
                                    <Flex flexDirection="column" gap="8px">
                                        <Label htmlFor="theme">Тема заявки</Label>
                                        <StyledTextArea rows={2} h="70px" p="13px 16px" id="theme" name="theme" placeholder="Дайте заявке краткое название: например, сломался холодильник или не работает кондиционер" />
                                    </Flex>
                                    <Flex flexDirection="column" gap="8px">
                                        <Label htmlFor="priority">Приоритет</Label>
                                        <StyledSelect paddingY="12.5px" icon={currentPriority} id="priority" name="priority" options={REQUEST_PRIORITIES.map(el => el.label)} onSelect={onPrioritySelect} />
                                    </Flex>
                                    <Flex flexDirection="column" gap="8px">
                                        <Label htmlFor="description">Описание проблемы</Label>
                                        <StyledTextArea rows={6} h="164px" p="13px 16px" id="description" name="description"
                                            placeholder="Кратко опишите проблему: 

  &bull;  что случилось? 
  &bull;  дата и время произошедшего? 
  &bull;  сколько длится проблема?
  &bull;  насколько она влияет на вашу работу?" />
                                    </Flex>
                                    <Flex flexDirection="column" gap="8px">
                                        <Label htmlFor="files">Прикрепите файлы</Label>
                                        <Box {...getRootProps()} borderRadius="8px" border="2px dashed #B0B0B0" color="#1C1C1C" p="25.5px 16px">
                                            <input {...getInputProps()} />
                                            {files.length ? <Flex gap="10px">
                                                {files.map((el, index) => <Image width="20%" key={index} src={URL.createObjectURL(el)} />)}
                                            </Flex> : <Flex flexDirection="column" gap="8px" alignItems="center">
                                                <Text>Выберите или перетащите фото или файл</Text>
                                                <Image width="24px" src={ImageIcon} />
                                            </Flex>}
                                        </Box>
                                    </Flex>
                                </Spacer>
                            </CreateRequestForm>
                        </Dialog.Body>
                        <Dialog.Footer justifyContent="flex-start">
                            <Button variant="primary" type="submit" form="requestCreateForm">Создать заявку</Button>
                            <Dialog.CloseTrigger asChild position="inherit">
                                <Button variant="outlined" borderColor="black" color="black" bgColor="white">Отмена</Button>
                            </Dialog.CloseTrigger>
                        </Dialog.Footer>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}

export default CreateRequestModal