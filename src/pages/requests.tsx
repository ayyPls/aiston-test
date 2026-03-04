import { Flex, Spacer } from "@chakra-ui/react";
import RequestsTable from "@widgets/requests-table";
import { ReactNode, useMemo, useState } from "react";
import SearchInput from "@shared/ui/input"
import useDebounce from "@shared/hooks/use-debounce";
import MOCK_REQUESTS_DATA from "@shared/const/mock-data";
import { ERequestStatus } from "@shared/types/request";
import Button from "@shared/ui/button";
import HorizontalLine from "@shared/ui/hr";
import { useTranslation } from "react-i18next";


const RequestsPage = (): ReactNode => {
    const { t } = useTranslation()
    const [searchString, setSearchString] = useState<string>("")
    const debouncedSearchString = useDebounce(searchString.trim())
    
    const filteredRequests = useMemo(() => {
        return MOCK_REQUESTS_DATA.filter((request) => request.code.includes(debouncedSearchString) || request.theme.includes(debouncedSearchString))
    }, [debouncedSearchString])
    
    const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const searchString = event.currentTarget.value
        setSearchString(searchString)
    }

    return <Spacer spaceY="21px">
        <Flex gap="13px" maxHeight="40px">
            <SearchInput onChange={handleChangeSearch} name="search" placeholder="Поиск по номеру или теме заявки"/>
            <Button>Экспорт</Button>
            <Button variant="primary">Создать новую заявку</Button>
        </Flex>
        {/* filters */} 
        <Flex gap="10px">
            {/* TODO: use i18n to set name strings to enum values? */}
            {Object.keys(ERequestStatus).map((status) => {
                return <Button key={status}>{t(`requestStatus.${status}`)}</Button>
            })}
            <Button variant="primary">Все статусы</Button>
        </Flex>
        <HorizontalLine />
        <RequestsTable data={filteredRequests} />
    </Spacer>
}

export default RequestsPage