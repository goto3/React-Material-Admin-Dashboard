import { ChartBar as ChartBarIcon } from "../../../../icons/chart-bar";
import { Users as UsersIcon } from "../../../../icons/users";
import { User as UserIcon } from "../../../../icons/user";
import { Cog as CogIcon } from "../../../../icons/cog";
import InventoryIcon from "@mui/icons-material/Inventory";

const routes = {
	id: "home",
	href: "/",
	text: "Home",
	icon: <ChartBarIcon fontSize="small" />,
	routes: [
		{
			id: "settings",
			href: "/settings",
			text: "Settings",
			icon: <CogIcon fontSize="small" />,
			routes: [],
		},
		{
			id: "account",
			href: "/account",
			text: "Account",
			icon: <UserIcon fontSize="small" />,
			routes: [],
		},
		{
			id: "customers",
			href: "/customers",
			text: "Customers",
			icon: <UsersIcon fontSize="small" />,
			routes: [],
		},
		{
			id: "products",
			href: "/products",
			text: "Products",
			icon: <InventoryIcon fontSize="small" />,
			routes: [],
		},
	],
};

var routeConstruct = [];

export default function getRoutes(pathname) {
	routeConstruct = [];
	searchNode(pathname);
	return routeConstruct;
}

function searchNode(href, currentNode = routes) {
	routeConstruct.push(currentNode);
	if (currentNode.href == href) return true;
	for (let i = 0; i < currentNode.routes.length; i++) {
		const result = searchNode(href, currentNode.routes[i]);
		if (!result) routeConstruct.pop();
		else return true;
	}
}
