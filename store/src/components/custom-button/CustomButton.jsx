import React from 'react'
import './btn.scss';
import { CustomButtonContainer } from './CustomButtonStyle';

const CustomButton = ({children,...props}) => (
  
  <CustomButtonContainer {...props} >
    {children}
  </CustomButtonContainer>
);

export default CustomButton;