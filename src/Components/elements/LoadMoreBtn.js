import React from "react";
import PropTypes from "prop-types";

import { StyledLoadMoreBtn } from "../styles/StyledLoadMoreBtn";

const LoadMoreBtn = ({ text, callback }) => (
  <StyledLoadMoreBtn type="button" onClick={() => setTimeout(callback, 200)}>
    {text}
  </StyledLoadMoreBtn>
);

LoadMoreBtn.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
};

export default LoadMoreBtn;
