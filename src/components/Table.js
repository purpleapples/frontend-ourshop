import {useState, useEffect} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { result } from 'lodash';

const Table = (
    {
        rows,
        columns,
        row_ent
    }
) => {

    // props.rows => table.data
    const [data, setData] = useState("");
    useEffect(()=>{
        console.log('table',rows);
        setData(rows);
    },[rows])

    // for other pages
    const sizePerPageList = [
        {text: 'All', value:row_ent}
    ];
    const options = {
        sizePerPageList
    };

    // editor option
    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        clickToEdit: true  // Click to edit cell also
      };
    // cellEdit option
    const cellEdit = {
      mode: 'click'
    };

    return <div>
        {data == null ? (
        <>
            <p> 해당 일자 데이터가 없습니다. </p>
        </>)
        : data && (
            <BootstrapTable 
                keyField='id'
                data={data}
                columns={columns}
                selectRow={selectRow}
                cellEdit={cellEditFactory(cellEdit)}
                striped
                hover
                pagination={paginationFactory()}
            />
        )
        }
        </div>
}

export default Table