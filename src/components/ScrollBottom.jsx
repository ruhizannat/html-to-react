import React from 'react'
import { FaAngleUp } from 'react-icons/fa';
import {  animateScroll as scroll} from 'react-scroll'

export default function ScrollBottom() {
  return (
   <FaAngleUp className='scrollToTop' onClick={() =>scroll.scrollToTop()} />
  )
}
