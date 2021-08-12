import AccountBookView from './AccountBookView';
import {useEffect, useState} from 'react';
import {getAccountBook} from 'services/AccountBookService';
import {getYmd} from 'js/Format';

export function AccountBookContainer (){

    const title = "가계부";
    const [date, setDate] = useState();
    const [rows, setRows]  = useState(
         () => {
             const initialState = null;
             return initialState;
        }      
     );
    const [row_ent, setRowEnt] = useState(0);
    const user_id= 1; // receive from useAuth    
    const searchRecord = async (date, week) => {
        let rows_receive = null;
        try{
            rows_receive = await getAccountBook(date, week);
        }catch(error){
            console.log(error);
        }
        console.log("rows get rows",rows_receive);
        setRows(rows_receive);
        setRowEnt(8);
    }

    const columns = [
        { dataField: 'id', text: 'id', width: 90 },
        {
          dataField: 'itemName',
          text: '품목',
          width: 300,
          editable: false,
        },
        {
          dataField: 'count',
          text: '갯수',
          sort: true,
          width: 300,
        },
        {
          dataField: 'total_price',
          text: '지출합계',
          type: 'number',
          sort: true,
          width: 300,
          align:"right"
        },
        {
          dataField: 'expenditureDate',
          text: '지출일',
          description: '물건 산 날',
          width: 400,
          sort:true
        //   valueGetter: (params) =>
        //     `${params.getValue(params.id, 'firstName') || ''} ${
        //       params.getValue(params.id, 'lastName') || ''
        //     }`,
        },
        {
            dataField: "registerYmdt",
            text: "기록등록일",
            description: "기록한 날",
            width:400,
            editable:false,
            formatter: getYmd
        },
        {
          dataField: "updateYmdt",
          text: "갱신일",
          description: "기록변경한 날",
          width:400,
          editable:false,
          formatter: getYmd
      }
    ];
    return(
        <>
        <AccountBookView
         title = {title}
         searchFunction = {searchRecord}
         rows = {rows}
         columns = {columns}
         row_ent={row_ent}/>
        </>
    );
}