import {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

const Expenses=(props)=>{
    const [selectedYear , setSelectedYear] = useState("2021");
    
    const handleChangeYear =(newYear)=>{
        setSelectedYear(newYear);
    };
    const expenseItems = props.data.filter((item)=>item.date.getFullYear()===Number( selectedYear));
    return(
        <Card className="expenses">
            <ExpenseFilter selectedYear={selectedYear} onSelectedYearChange={handleChangeYear}/>
            <ExpenseChart data={expenseItems}/>
            {expenseItems.length>0 ?  expenseItems.map((item)=>{
                return (
                    <ExpenseItem date={item.date} price={item.price} title={item.title}/>
                )
            }):(
                <div className="expense_no-data">(No data)</div>
            )};
        </Card>
    ) 
};
export default Expenses;