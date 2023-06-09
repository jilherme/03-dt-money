import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'

import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSumary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  // reduce permite percorrer um array e reduzi-lo a alguma nova estrutura de dados
  // neste caso, converter o array de transactions num objeto:

  // a variavel summary só vai ser recriada quando o array de transactions for alterado
  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.price
          acc.total += transaction.price
        } else {
          acc.outcome += transaction.price
          acc.total -= transaction.price
        }

        return acc
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [transactions])

  return summary
}
