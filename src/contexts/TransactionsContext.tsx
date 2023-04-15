import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
    id: number;
    category: string;
    createdAt: string;
    description: string;
    price: number;
    type: 'income' | 'outcome';
  }
  

interface TransactionsContextType {
    transactions: Transaction[];
}

interface TransactionsProviderProps {
    children: ReactNode; // ReactNode is a type that accepts any React element
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
    async function loadTransactions() {
      const response = await fetch('http://localhost:3000/transactions')
      const data = await response.json()
  
      setTransactions(data)
    }
  
    useEffect(() => {
      loadTransactions();
    }, [])

    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}