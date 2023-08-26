import React, {useState} from 'react'

import ExpenseItem from './ExpenseItem'
import Card from "../UI/Card"
import ExpensesFilter from './ExpensesFilter'

import "./Expenses.css"

const Expenses = (props) => {
const [filteredYear, setFilteredYear] = useState("2020")

  const filterDataHandler = (enteredFilterData) => {
    setFilteredYear(enteredFilterData)
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onFilterValue={filterDataHandler}
        />
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
