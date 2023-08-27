import React, {useState} from 'react'

import ExpenseItem from './ExpenseItem'
import Card from "../UI/Card"
import ExpensesFilter from './ExpensesFilter'

import "./Expenses.css"

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023")

  const filterDataHandler = (enteredFilterData) => {
    setFilteredYear(enteredFilterData)
  }

  const filteredArray = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  let expensesContent = <p>No expenses found.</p>

  if (filteredArray.length > 0) {
    expensesContent = filteredArray.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onFilterValue={filterDataHandler}
        />
        {expensesContent}
      </Card>
    </div>
  )
}

export default Expenses
