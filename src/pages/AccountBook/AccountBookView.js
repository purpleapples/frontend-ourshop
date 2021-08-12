import React from 'react';
import PropTypes from 'prop-types';
import {DataGrid} from "@material-ui/data-grid";
import { SCHEDULE, ROOT } from 'navigation/CONSTANTS';
import {useHistory} from 'react-router-dom';
import {DateSearchBar} from 'components/DateSearchBar';
import Table from 'components/Table';


const AccountBookView = (
    {
        title,
        rows,
        row_ent,
        columns,
        searchFunction,
    }
) => {
    const history = useHistory();
    const goTo = (path) => {
        history.push(path || ROOT);
    }; 
    return (
            <>
            <h2>회계기간</h2>
            <DateSearchBar 
            searchFunction = {searchFunction}
            />
            <Table 
                rows={rows}
                columns={columns}
                row_ent = {row_ent}
            />
            <div>
            </div>
            </>
    );
}

AccountBookView.propTypes = {
    title: PropTypes.string.isRequired
}

export default AccountBookView;
