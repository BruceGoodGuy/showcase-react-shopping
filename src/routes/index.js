import React from 'react'
import { Routes, BrowserRouter, Route } from "react-router-dom";

import Main from '../containers/layouts/Main'
// import MainAdmin from '../containers/layouts/MainAdmin'

// views
// import About from '../containers/views/Main/About'
import Home from '../containers/views/Main/Home'
import Products from '../containers/views/Main/Products'
import Me from '../containers/views/Main/Me'
import Product from '../containers/views/Main/Product'


// import Login from '../containers/views/Main/Login'

// admin Views

// import Dashboard from '../containers/views/Admin/Dashboard'
// import Setting from '../containers/views/Admin/Setting'


const routes = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route>
					{/* <Route path='/login' element={Login} /> */}

					{/* 
					<Route path='/admin/:path?' exact>
						<MainAdmin>
							<Route>
								<Route path='/admin' exact element={Dashboard} />
								<Route path='/admin/setting' element={Setting} />
							</Route>
						</MainAdmin>
					</Route> */}

					<Route>
						<Route path="/" element={<Main />}>
							<Route path="/" element={<Home />} />
							<Route path="products" element={<Products />} />
							<Route path="product/:productId" element={<Product />} />
							<Route path="me" element={<Me />} />

							{/* <Route path='/about' element={About} /> */}
						</Route>
					</Route>


				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default routes