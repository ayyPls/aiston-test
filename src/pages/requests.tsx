import { Box, Flex } from "@chakra-ui/react";
import RequestsTable from "@widgets/requests-table";
import { ReactNode, useMemo, useState } from "react";
import SearchInput from "@shared/ui/input"
import useDebounce from "@shared/hooks/use-debounce";
import MOCK_REQUESTS_DATA from "@shared/const/mock-data";
import { ERequestStatus } from "@shared/types/request";
import Button from "@shared/ui/button";
import RequestsTabs from "@widgets/requests-tabs";
import { chakra } from "@chakra-ui/react";
import RequestCardsList from "@widgets/request-cards-list";
import CreateRequestModal from "@widgets/create-request-modal";

const RequestsPage = (): ReactNode => {
    const [currentStatusTab, setCurrentStatusTab] = useState<ERequestStatus | undefined>(undefined)
    const [searchString, setSearchString] = useState<string>("")
    const debouncedSearchString = useDebounce(searchString.trim())

    const filteredRequests = useMemo(() => {
        return MOCK_REQUESTS_DATA.filter(({ theme, code, status }) => {
            return (currentStatusTab ? status === currentStatusTab : true) && (code.toLowerCase().includes(debouncedSearchString) || theme.toLowerCase().includes(debouncedSearchString))
        }
        )
    }, [debouncedSearchString, currentStatusTab])

    const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const searchString = event.currentTarget.value
        setSearchString(searchString.toLowerCase())
    }

    const handleFilterRequestsByStatusTab = (status?: ERequestStatus) => {
        setCurrentStatusTab(status)
    }

    return <>
        <Box display={{ base: "none", md: "block" }}>
            <Box p={{ base: "25px 19px", md: "21px 40px 0 40px" }}>
                <Flex gap="13px" maxHeight="40px">
                    <SearchInput onChange={handleChangeSearch} name="search" placeholder="Поиск по номеру или теме заявки" />
                    <Button>Экспорт</Button>
                    <CreateRequestModal />
                </Flex>
                <Flex gap="24px" alignItems="center">
                    <RequestsTabs value={currentStatusTab} onChange={handleFilterRequestsByStatusTab} />
                    <chakra.div width="3px" height={"40px"} background="#D9E1EC" />
                    <Button maxHeight="40px">
                        Показать только мои
                    </Button>

                </Flex>
            </Box>
            <chakra.hr color="gray" />
            <Box px={{ base: "19px", md: "40px" }}>
                <RequestsTable data={filteredRequests} />
            </Box>
        </Box>
        <Box display={{ base: "block", md: "none" }} p={{ base: "25px 19px", md: "21px 40px" }}>
            <RequestsTabs value={currentStatusTab} onChange={handleFilterRequestsByStatusTab} />
            <RequestCardsList items={filteredRequests} />
            <CreateRequestModal />
        </Box>
    </>
}

export default RequestsPage