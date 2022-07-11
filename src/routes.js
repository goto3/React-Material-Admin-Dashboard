import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import { DashboardLayout } from "./layouts/dashboard/dashboard-layout";
import DashboardPage from "./pages/dashboard";
import Customers from "./pages/customers";
import NotFound from "./pages/404";
import Account from "./pages/account";
import Login from "./pages/login";
import Register from "./pages/register";
import Products from "./pages/products";
import Settings from "./pages/settings";

const browserHistory = createBrowserHistory();

const SiteRoutes = () => {
	return (
		<BrowserRouter history={browserHistory}>
			<Routes>
				<Route element={<DashboardLayout />}>
					<Route path="/customers" element={<Customers />} />
					<Route path="/account" element={<Account />} />
					<Route path="/products" element={<Products />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/" element={<DashboardPage />} />
					<Route exact path="*" name="Page 404" element={<NotFound />} />
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
};

export default SiteRoutes;
