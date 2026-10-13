import { useMemo, useState } from 'react'
import './App.css'

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

function calculateFutureValue(initialValue, monthlyContribution, annualRate, months) {
  if (months <= 0) {
    return Number(initialValue) || 0
  }

  const monthlyRate = Number(annualRate) / 100 / 12
  const totalContribution = Number(initialValue) + monthlyContribution * months

  if (monthlyRate === 0) {
    return totalContribution
  }

  const accumulated = Number(initialValue) * (1 + monthlyRate) ** months
  const monthlyInvestment =
    monthlyContribution *
    (((1 + monthlyRate) ** months - 1) / monthlyRate) *
    (1 + monthlyRate)

  return accumulated + monthlyInvestment
}

function App() {
  const [initialValue, setInitialValue] = useState(5000)
  const [monthlyContribution, setMonthlyContribution] = useState(1200)
  const [annualRate, setAnnualRate] = useState(8.5)
  const [months, setMonths] = useState(24)
  const [income, setIncome] = useState(6500)
  const [expenses, setExpenses] = useState(3400)

  const result = useMemo(() => {
    const finalValue = calculateFutureValue(
      initialValue,
      monthlyContribution,
      annualRate,
      months,
    )

    const totalInvested = Number(initialValue) + Number(monthlyContribution) * Number(months)
    const earnings = finalValue - totalInvested

    return {
      finalValue,
      totalInvested,
      earnings,
    }
  }, [annualRate, initialValue, monthlyContribution, months])

  const monthlyBalance = income - expenses
  const savingsRate = income > 0 ? (monthlyBalance / income) * 100 : 0

  return (
    <main className="app-shell">
      <section className="calculator-card">
        <header className="topbar">
          <div>
            <p className="eyebrow">Planejamento financeiro</p>
            <h1>Calculadora Financeira</h1>
          </div>
          <span className="badge">Status: saudável</span>
        </header>

        <div className="content-grid">
          <div className="panel">
            <h2>Simulador de investimento</h2>

            <div className="field-grid">
              <label className="field">
                <span>Valor inicial</span>
                <input
                  type="number"
                  value={initialValue}
                  min="0"
                  step="100"
                  onChange={(event) => setInitialValue(Number(event.target.value))}
                />
              </label>

              <label className="field">
                <span>Aporte mensal</span>
                <input
                  type="number"
                  value={monthlyContribution}
                  min="0"
                  step="50"
                  onChange={(event) => setMonthlyContribution(Number(event.target.value))}
                />
              </label>

              <label className="field">
                <span>Taxa anual</span>
                <input
                  type="number"
                  value={annualRate}
                  min="0"
                  step="0.1"
                  onChange={(event) => setAnnualRate(Number(event.target.value))}
                />
              </label>

              <label className="field">
                <span>Tempo (meses)</span>
                <input
                  type="number"
                  value={months}
                  min="1"
                  step="1"
                  onChange={(event) => setMonths(Number(event.target.value))}
                />
              </label>
            </div>
          </div>

          <aside className="panel summary-panel">
            <h2>Resumo</h2>

            <div className="summary-grid">
              <div className="summary-card accent">
                <span>Valor futuro</span>
                <strong>{currencyFormatter.format(result.finalValue)}</strong>
              </div>

              <div className="summary-card">
                <span>Total investido</span>
                <strong>{currencyFormatter.format(result.totalInvested)}</strong>
              </div>

              <div className="summary-card">
                <span>Rendimento</span>
                <strong>{currencyFormatter.format(result.earnings)}</strong>
              </div>

              <div className="summary-card">
                <span>Rentabilidade</span>
                <strong>{Math.max((result.earnings / result.totalInvested) * 100 || 0, 0).toFixed(1)}%</strong>
              </div>
            </div>
          </aside>
        </div>

        <section className="budget-panel">
          <div className="budget-header">
            <h2>Orçamento mensal</h2>
            <span className={`budget-chip ${monthlyBalance >= 0 ? 'positive' : 'negative'}`}>
              {monthlyBalance >= 0 ? 'Sobrou' : 'Falta'} {currencyFormatter.format(Math.abs(monthlyBalance))}
            </span>
          </div>

          <div className="budget-grid">
            <label className="field">
              <span>Receita mensal</span>
              <input
                type="number"
                value={income}
                min="0"
                step="100"
                onChange={(event) => setIncome(Number(event.target.value))}
              />
            </label>

            <label className="field">
              <span>Despesas mensais</span>
              <input
                type="number"
                value={expenses}
                min="0"
                step="100"
                onChange={(event) => setExpenses(Number(event.target.value))}
              />
            </label>
          </div>

          <div className="budget-metrics">
            <div>
              <span>Saldo líquido</span>
              <strong>{currencyFormatter.format(monthlyBalance)}</strong>
            </div>
            <div>
              <span>Taxa de poupança</span>
              <strong>{savingsRate.toFixed(1)}%</strong>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}

export default App
