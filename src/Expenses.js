import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";

const Expenses=(props)=>{
    const expenseItems=props.data;
    return(
        <Card className="expenses">
            <ExpenseItem 
                date={expenseItems[0].date} 
                title={expenseItems[0].title} 
                price={expenseItems[0].price}
            />
            <ExpenseItem
                date={expenseItems[1].date} 
                title={expenseItems[1].title} 
                price={expenseItems[1].price}
            />
            <ExpenseItem
                date={expenseItems[2].date} 
                title={expenseItems[2].title} 
             price={expenseItems[2].price}
            />
        </Card>
    ) 
};
export default Expenses;