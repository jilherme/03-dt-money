import { useContext } from "react";
import { MagnifyingGlass } from "phosphor-react"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { TransactionsContext } from "../../../../contexts/TransactionsContext";

import { SearchFormContainer } from "./styles"

const SearchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof SearchFormSchema>


export function SearchForm() {
    const { fetchTransactions } = useContext(TransactionsContext)

    const { 
        register, 
        handleSubmit, 
        formState: {
        isSubmitting,
    }} = useForm<SearchFormInputs>({
        resolver: zodResolver(SearchFormSchema)
    });

    async function handleSearchTransactions(data: SearchFormInputs) {
        await fetchTransactions(data.query)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input 
            type="text" 
            placeholder="Busque por transaçoes"
            {...register("query")}
            />

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass />
                Buscar
            </button>
        </SearchFormContainer>
        )
}