import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
        <Header />
        <Summary />

        <TransactionsContainer>
          <SearchForm />

          <TransactionsTable>
            <tbody>
              <tr>
                <td width="45%">Desenvolvimento de site</td>
                <td>
                  <PriceHighlight variant="income">
                  R$ 12.000,00
                  </PriceHighlight>
                </td>
                <td>Venda</td>
                <td>07/04/2023</td>
              </tr>

              <tr>
                <td width="45%">Hamburguer</td>
                <td>
                  <PriceHighlight variant="outcome">
                  - R$ 59,00
                  </PriceHighlight>
                </td>
                <td>Alimentaçao</td>
                <td>10/04/2023</td>
              </tr>

              <tr>
                <td width="45%">Título</td>
                <td>R$ 12.000,00</td>
                <td>Venda</td>
                <td>07/04/2023</td>
              </tr>
            </tbody>
          </TransactionsTable>
        </TransactionsContainer>
    </div>
  )
}