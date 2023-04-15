import { MagnifyingGlass } from "phosphor-react"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SearchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof SearchFormSchema>

import { SearchFormContainer } from "./styles"

export function SearchForm() {
    const { 
        register, 
        handleSubmit, 
        formState: {
        isSubmitting,
    }} = useForm<SearchFormInputs>({
        resolver: zodResolver(SearchFormSchema)
    });

    async function handleSearchTransactions(data: SearchFormInputs) {
        await new Promise(resolve => setTimeout(resolve, 2000))
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