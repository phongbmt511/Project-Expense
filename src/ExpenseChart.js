import "./ExpenseChart.css";
const ExpenseChart=(props)=>{
    const getPercent = (value,maxValue)=>{
        if(maxValue===0){
            return 0;
        }
        return (value/maxValue)*100;
    }
    const dataPoint=[
        {label : "Jan" , value:0},
        {label : "Feb" , value:0},
        {label : "Mar" , value:0},
        {label : "Apr" , value:0},
        {label : "May" , value:0},
        {label : "Jun" , value:0},
        {label : "Jul" , value:0},
        {label : "Aug" , value:0},
        {label : "Sep" , value:0},
        {label : "Oct" , value:0},
        {label : "Nov" , value:0},
        {label : "Dec" , value:0},
    ];
    let maxValue = 0;
    
    props.data.forEach((expenseItem)=>{
        const month =expenseItem.date.getMonth(); //Jun-->0 , Dec-->11
        dataPoint[month].value += expenseItem.price ;
        if(dataPoint[month].value>maxValue){
            maxValue=dataPoint[month].value;
        }
        
    });
    
    return(
        <div className="chart">
            {
                dataPoint.map(point=> 
                    <div className="chart-bar">
                        <div className="chart-bar_inner">
                            <div className="chart-bar_fill" style={{height : getPercent(point.value,maxValue)+"%"}}></div>
                        </div>
                        
                        <div className="chart-bar_label">{point.label}</div>
                    </div>

                )
            }
        </div>
    )
};
export default ExpenseChart;