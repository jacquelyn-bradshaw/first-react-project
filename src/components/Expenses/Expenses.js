import React, {useState} from 'react'

import ExpensesList from './ExpensesList'
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

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onFilterValue={filterDataHandler}
        />
        <ExpensesList expenses={filteredArray}/>
      </Card>
    </div>
  )
}

export default Expenses
