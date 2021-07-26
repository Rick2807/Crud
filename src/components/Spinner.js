import React from 'react'
import spinner from './spinner.gif'

const Spinner = () => 
    <React.Fragment>
        <img src={spinner} alt="Loading" style={spinnerStyle}/>
    </React.Fragment>

const spinnerStyle = {
    width: '200px',
    margin: 'auto',
    display: 'block'
}
export default Spinner
