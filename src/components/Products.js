import React,{Fragment, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import getProductAction from '../actions/getProductAction' 
import Product from './Product'
import Spinner from './Spinner'


const Products = () => {
    const dispatch = useDispatch(); 

    const loadProducts = () => dispatch(getProductAction())

    const products = useSelector(state => state.products.products)
    const error = useSelector(state => state.products.error)
    const loading= useSelector(state => state.products.loading)
    
    useEffect(() => {
        loadProducts()

    }, []);

    return (
       <Fragment>
            <h2 className="text-center my-5">Product List</h2>
            {error && <p className="font-weight-bold alert alert-danger text-center mt-4">An error has ocurred.</p>}
            {loading && <Spinner />}
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length === 0 ? <tr><td>There are no products</td></tr> :
                        products.map(product =>(
                            <Product
                                key={product.id} 
                                product={product} />
                        ))
                    }
                </tbody>
            </table>
       </Fragment>
    )
}

export default Products
