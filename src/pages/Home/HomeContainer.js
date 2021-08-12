import React from "react";
import HomeView from "./HomeView";
import {Link} from "react-router-dom";
import {SCHEDULE} from "navigation/CONSTANTS";
import {LinkRoute} from "components/LinkRoute";
import {NavLinks} from "./components/NavLinks";

export function HomeContainer() {
    return (
      <div>
        <NavLinks />
        <HomeView title="Home" />
      </div>
    );
  }
  