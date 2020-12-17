import React from 'react'
// import moment from 'moment'

function GreetingsWIthTime() {
    let greetings = ''

    //you can replace moment with currDate & hours

    // let hours = moment().format('HH')
    //     OR

    let currDate = new Date()
    let hours = currDate.getHours()

     //hours < 12 && hours >=3 ? (greetings = 'Good Morning') : '' we cant use this coz below lines
    //The ternary operator evaluates to an expression and expressions can't contain a return statement thats why this error shows
    // Expected an assignment or function call and instead saw an expression
    //so for return something you should use if statement

    if(hours < 12 && hours >=3){
        greetings = 'Good Morning'
    }
    else if(hours >=12 && hours < 15){
        greetings = 'Good Afternoon'
    }
    else if(hours >=15 && hours < 20){
        greetings = 'Good Evening'
    }
    else if(hours >=20 && hours < 3){
        greetings = 'Good Night'
    }
   
    
    return (
        <div>
            <h1>{greetings} , Abdur Rakib Rony </h1>
        </div>
    )
}

export default GreetingsWIthTime
