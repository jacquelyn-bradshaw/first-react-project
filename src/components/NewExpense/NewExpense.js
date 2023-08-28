import React, {useState} from "react"

import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = (props) => {
  const [isFormShowing, setIsFormShowing] = useState(false)

  const saveExpenseDataHandler = (entertedExpenseData) => {
    const expenseData = {
      ...entertedExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    setIsFormShowing(false)
  }

  const startEditingHandler = () => {
    setIsFormShowing(true)
  }

  const stopEditingHandler = () => {
    setIsFormShowing(false)
  }

  return (
    <div className="new-expense">
      {!isFormShowing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isFormShowing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  )
}

export default NewExpense
