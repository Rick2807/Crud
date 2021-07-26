import React from 'react'
import {useDispatch} from 'react-redux'
import deleteProductAction from '../actions/deleteProductAction'
import {editProductAction }from '../actions/editProductAction'

import Swal from 'sweetalert2'
import {useHistory} from 'react-router-dom'

const Product = ({product}) => {
    const {name, price, id} = product
     
    const dispatch = useDispatch();
    const history = useHistory()
    
    const deleteProduct = id => {    
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(deleteProductAction(id))
            }
          })   
    }
    //function to redirect 
    const redirectToEditPage = product =>{
        dispatch(editProductAction(product))
        history.push(`/products/edit/${product.id}`)
    }

    return (
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold"> $ {price} </span></td>
            <td className="acciones">
                <button 
                    type="button"
                    onClick={ () => redirectToEditPage(product)}
                    className="btn btn-primary mr-2">
                    Edit
                </button>
                <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteProduct(id)}
                >Delete </button>
            </td>
        </tr>
    )
}

export default Product