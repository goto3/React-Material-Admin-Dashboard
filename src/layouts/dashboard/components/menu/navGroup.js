import * as React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Button, ListItem, Collapse } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { NavLink } from "./navLink";

export const NavGroup = (props) => {
	const { href, icon, title, items, ...others } = props;
	const [active, setActive] = React.useState(false);
	const [open, setOpen] = React.useState(false);
	let location = useLocation();

	React.useEffect(() => {
		const isActive = items.some((item) => (item.href ? location.pathname === item.href : false));
		setActive(isActive);
		setOpen(isActive);
	}, [location.pathname]);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<>
			<ListItem
				disableGutters
				sx={{
					display: "flex",
					mb: 0.5,
					py: 0,
					px: 2,
				}}
				{...others}>
				<Button
					component="a"
					startIcon={icon}
					disableRipple
					sx={{
						backgroundColor: active && "rgba(255,255,255, 0.08)",
						borderRadius: 1,
						color: active ? "secondary.main" : "neutral.300",
						fontWeight: active && "fontWeightBold",
						justifyContent: "flex-start",
						px: 3,
						textAlign: "left",
						textTransform: "none",
						width: "100%",
						"& .MuiButton-startIcon": {
							color: active ? "secondary.main" : "neutral.400",
						},
						"&:hover": {
							backgroundColor: "rgba(255,255,255, 0.08)",
						},
					}}
					onClick={handleClick}>
					<Box sx={{ flexGrow: 1 }}>{title}</Box>
					{open ? <ExpandLess /> : <ExpandMore />}
				</Button>
			</ListItem>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<Box sx={{ ml: 3 }}>
					{items.map((item) => (
						<NavLink key={item.title} icon={item.icon} href={item.href} title={item.title} />
					))}
				</Box>
			</Collapse>
		</>
	);
};

NavGroup.propTypes = {
	icon: PropTypes.node,
	title: PropTypes.string,
};
