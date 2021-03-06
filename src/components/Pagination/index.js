import React from "react"
import propTypes from "prop-types"
import Anilink from 'gatsby-plugin-transition-link/AniLink'

import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && <Anilink to={prevPage} cover direction="left" bg="#16202c" duration={0.6} >← página anterior</Anilink>}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && <Anilink to={nextPage} cover direction="right" bg="#16202c" duration={0.6} >proxima página →</Anilink>}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination