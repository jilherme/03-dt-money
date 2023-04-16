import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'

import { TransactionsContext } from '../../../../contexts/TransactionsContext'

import { SearchFormContainer } from './styles'

/*
  Por que um componente renderiza?
  - Hooks changed (mudou estado, contexto, reducer);
  - Props changed (mudou propriedades);
  - Parent component re-rendered (componente pai renderizou);

  Qual o fluxo de renderização?
  1. O React recria o HTML da interface daquele componente;
  2. O React compara o HTML antigo com a recruada;
  3. SE houve alguma mudança, o React atualiza o HTML na tela;

  Memo:
  0. Hookds changedm Props changed (deep comparison)
  0.1: Comparar a versão anterior dos hooks e props com a versão atual;
  0.2: SE mudou algo, ele permite a renderizaçao (fluxo);
 */

const SearchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof SearchFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(SearchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transaçoes"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
