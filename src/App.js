import React from 'react'
import Header from './components/Header'
import Products from './components/Products'
import NewProduct from './components/NewProduct'
import EditProduct from './components/EditProduct'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// Redux
import {Provider} from 'react-redux'
import store from './store'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="container mt-5">
          {/*Components inside switch will be rendered by accesing its respective url */}
          <Switch>
            <Route exact path="/" component={Products} />  
            <Route exact path="/products/new" component={NewProduct} />
            <Route exact path="/products/edit/:id" component={EditProduct} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App;
