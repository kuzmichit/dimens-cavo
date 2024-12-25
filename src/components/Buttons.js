import { useState, useRef } from 'react';

const Buttons = (props) => {

  const btnNext = useRef(null);
  const btnPrev = useRef(null);
  const {formData, currentPage, setCurrentPage, pagesLength} = props;

  const btnNextHandler= () => {
    if (currentPage < pagesLength - 1) {
      setCurrentPage(currentPage + 1);
    }

  };
	
  const btnPrevHandler = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const clazzBtnPrev = currentPage <= 0 ? 'btn-prev disabled = true' : 'btn-prev active'
  const clazzBtnNext = currentPage >= pagesLength-1 ? 'btn-next disabled = true ' : 'btn-next active'
  
  return ( 	
    <div className = "_navbar mt-3 fixed-bottom">
      <button className = { clazzBtnPrev } ref = { btnPrev } onClick = { btnPrevHandler }>Indietro</button>
      <button className = { clazzBtnNext } ref = { btnNext } onClick = { btnNextHandler }>Avanti</button>
    </div>
  )
}

export default Buttons;