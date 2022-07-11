import * as React from "react";
import { Breadcrumbs, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import getRoutes from "./routes";

export default function Breadcrumb(props) {
	const location = useLocation();
	const [currentBreadcrums, setCurrentBreadcrums] = React.useState([]);

	React.useEffect(() => {
		setCurrentBreadcrums(getRoutes(location.pathname));
	}, [location.pathname]);

	return (
		<Breadcrumbs separator="›" aria-label="breadcrumb">
			{currentBreadcrums &&
				currentBreadcrums.map((breadCrum, index) => (
					<Link to={breadCrum.href} key={index} style={{ textDecoration: "none" }}>
						<Button startIcon={breadCrum.icon}>{breadCrum.text}</Button>
					</Link>
				))}
		</Breadcrumbs>
	);
}
