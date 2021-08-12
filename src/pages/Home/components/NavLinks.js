import React from "react";
import {Link} from "react-router-dom";
import {LinkRoute} from "components/LinkRoute";
import { ROOT, SCHEDULE, ACCOUNTBOOK } from "navigation/CONSTANTS";

export const NavLinks = () => {
    return(
        <>
            {/* Default Link tag. */}
            <Link to={ROOT}>Root</Link>
            {/* Link tage에 생성되어 사용되는 일반 component */}
            <LinkRoute to={SCHEDULE}> Schedule</LinkRoute>
            <LinkRoute to={ACCOUNTBOOK}> AccountBook</LinkRoute>
        </>
    );
};