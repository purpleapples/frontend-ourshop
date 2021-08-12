// date 검색 bar
import { useState, useRef } from "react";

export const DateSearchBar = (props) => {

    const [period, setPeriod] = useState("week");
    const [date, setDate] = useState(new Date());
    const dateRef = useRef(null);

    
    const _handler_on_date = (e) => {
        setDate(e.target.value);
    }

    const _handler_on_period = (e) => {
        // change input period
        setPeriod(e.target.value);
        const value = e.target.value;
        if(value ==="week"){
            dateRef.current.type = "date";
        }else if(value == "year"){
           // year limitation
           dateRef.current.type='number';
           dateRef.current.min='2021';
           dateRef.current.max='2099';
           dateRef.current.step='1';
           dateRef.current.default='2021';
        }else{
            dateRef.current.type="month";
        }
    }

    const _handler_on_submit = (e) => {    
        e.preventDefault();
        props.searchFunction(date, period);
    }
    return (
        <>
                
         <form onSubmit = {_handler_on_submit}>
            <label class=""> 날짜 : </label>
            <select id='opts' size='1' name='opts' defaultValue="week"  onChange={_handler_on_period}>
                <option value='week' > week</option>
                <option value='month'>month</option>
                <option value='year'>year</option>
            </select>
            <input type='date' name="searchDate" value={date} ref={dateRef} onChange={_handler_on_date} />            
            <input type="Submit" value="검색" />
         </form>

        </>
    );
}