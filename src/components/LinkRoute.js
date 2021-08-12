// app 전체에서 사용할 link tage에 대한 어떠한 이름이다.
// 영속적으로 유지하는 것을 추천한다.
// 이 app 안에 route를 가리키는 모든 link tags는 반드시 react-router-dom으로부터 import 되어야 한다.
// 외부 공개 주소를 가리키는 link tag는 반드시 material-ui 로부터 import 되어야 한다. 

import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    linkWrapper: {
        margin: theme.spacing(2),
        display: "inline-block"
    }
}));

export const LinkRoute = props => {
    const classes = useStyles();
    return (
        <Link {...props} className={classes.linkWrapper} >
            {props.children}
        </Link>
    )
}

LinkRoute.propTypes = {
    to: PropTypes.string.isRequired
}
