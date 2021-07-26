import React,{useState} from 'react'
import Spinner from './Spinner'
import {useDispatch, useSelector} from 'react-redux'

import  createNewProductAction  from '../actions/productActions'
import {showAlert, hideAlert} from '../actions/alertAction'

const NewProduct = ({history}) => {
     //state of the app 
     const [name, setName] = useState('')
     const [price, setPrice] = useState(0)


    //  get properties from the state
     const loading = useSelector(state => state.products.loading)
     const error = useSelector(state => state.products.error)
     const alert = useSelector(state => state.alert.alert)
     
     

     //use dispatch
     const dispatch = useDispatch();

     //create an arrow function that'll have the action passed as a param inside the dispatch
     const newProductAction = product => dispatch(createNewProductAction(product))
     
     //create a function that'll add a product 
     const addProduct = e =>{
         e.preventDefault()

         //make sure fields are not empty 
         if(name.trim() === '' || price <= 0){ 
             const answer = {
                 msg: 'All fields are mandatory',
                 class: 'alert alert-danger text-center text-uppercase p3'
             }
             dispatch(showAlert(answer))
             return 
        }
         dispatch(hideAlert())
        // call dispatch
         newProductAction({name, price})

         //redirect 
         history.push('/')
     }

    return (
       <div className="row justify-content-center">
           <div className="col-md-8">
           {alert && <p className={alert.class}>{alert.msg}</p>}
               <div className="card">
                   <div className="card-body">
                       <h2 className="text-center mb-4 font-weight-bold">
                           Add New Product
                       </h2>
                       <form
                            onSubmit={addProduct}
                       >
                           <div className="form-group">
                               <label>Product Name</label>
                               <input 
                                    type="text" 
                                    name="name" 
                                    value={name}
                                    placeholder="Product Name"
                                    className="form-control" 
                                    onChange={e => setName(e.target.value)}
                                />
                           </div>
                           <div className="form-group">
                               <label>Product Price</label>
                               <input 
                                    type="number" 
                                    name="price" 
                                    value={price}
                                    placeholder="Product Price"
                                    className="form-control" 
                                    onChange={e => setPrice(+e.target.value)}
                                />
                           </div>
                           <button
                                type="submit" 
                                className="btn btn-primary font-weight-bold d-block w-100">
                                ADD
                           </button>
                       </form>
                       {loading && <Spinner />}
                       {error && <p className="alert alert-danger p2 mt-4 text-center">There was an Error</p>}
                   </div>
               </div>
           </div>
       </div>
    )
}

export default NewProduct
