import { Button, styled } from '@mui/material'
import React from 'react'

const ButtonComponent = ({type, variant, children, ...props}) => {
  return (
    <StyledButton type='type' variant='variant' {...props} > {children} </StyledButton>
  )
}

export default ButtonComponent



const StyledButton=styled(Button)({
    width:"460px",
    height:"60px",
    backgroundColor:"#121314",
    color:"#FFFFFF"

})