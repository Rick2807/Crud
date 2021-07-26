import React,{useState, useEffect} from 'react'
import {editAction} from '../actions/editProductAction'

//react-router 
import { useHistory } from 'react-router'
//redux
import {useDispatch, useSelector} from 'react-redux'

const EditProduct = () => {
    //local state for this component
    const [product, setProduct] = useState({
        name: '',
        price: ''
    })

    //use dispatch to call the action
    const dispatch = useDispatch(); 
    const history = useHistory(); 

    //get the current item to edit 
    const editProduct = useSelector(state => state.products.editProduct)
    
    //fill up the state automatically 
    useEffect(() => {
       setProduct(editProduct)
    }, [editProduct])

    //overwrite whatever is in the input field
    const onInputChange = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const {name, price} = product

    const startEditing = e => {
        e.preventDefault();

        dispatch(editAction(product))

        history.push('/')
        
    }

    return (
          <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Edit Product
                        </h2>
                        <form
                            onSubmit={startEditing}
                        >
                            <div className="form-group">
                                <label>Product Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Product Name"
                                    className="form-control" 
                                    onChange={onInputChange}
                                    value={name}
                                />
                            </div>
                            <div className="form-group">
                                <label>Product Price</label>
                                <input 
                                    type="number" 
                                    name="price" 
                                    placeholder="Product Price"
                                    className="form-control" 
                                    onChange={onInputChange}
                                    value={price}

                                />
                            </div>
                            <button
                                type="submit" 
                                className="btn btn-primary font-weight-bold d-block w-100">
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProduct
