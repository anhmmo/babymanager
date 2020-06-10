import React from "react";
import PropTypes from "prop-types";

import { StyledGrid, StyledGridContent } from "../styles/StyledGrid";

const Grid = ({ header, children }) => (
  <StyledGrid>
    <div className="film-option-box">
      <div className="description-title">{header}</div>
      <div className="description-icon">
        <i class="fab fa-hotjar"></i>
      </div>
      <div className="filter-menu">
        <div>name</div>
        <div>year</div>
        <div>genre</div>
        <div>actor</div>
        <div>cast</div>
      </div>
    </div>
    {/* <h1>{header}</h1>*/}
    <StyledGridContent>{children}</StyledGridContent>
  </StyledGrid>
);

Grid.propTypes = {
  header: PropTypes.string,
};

export default Grid;
