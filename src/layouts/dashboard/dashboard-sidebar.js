import { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Divider, Drawer, Typography, useMediaQuery } from "@mui/material";
import { ChartBar as ChartBarIcon } from "../../icons/chart-bar";
import { Cog as CogIcon } from "../../icons/cog";
import { Lock as LockIcon } from "../../icons/lock";
import { Selector as SelectorIcon } from "../../icons/selector";
import { ShoppingBag as ShoppingBagIcon } from "../../icons/shopping-bag";
import { User as UserIcon } from "../../icons/user";
import { UserAdd as UserAddIcon } from "../../icons/user-add";
import { Users as UsersIcon } from "../../icons/users";
import { XCircle as XCircleIcon } from "../../icons/x-circle";
import { Logo } from "../../icons/logo";
import { NavGroup } from "./components/menu/navGroup";
import { NavLink } from "./components/menu/navLink";

const menuItems = [
	{
		type: "navLink",
		href: "/",
		icon: <ChartBarIcon fontSize="small" />,
		title: "Dashboard",
	},
	{
		type: "navLink",
		href: "/customers",
		icon: <UsersIcon fontSize="small" />,
		title: "Customers",
	},
	{
		type: "navLink",
		href: "/products",
		icon: <ShoppingBagIcon fontSize="small" />,
		title: "Products",
	},
	{
		type: "navLink",
		href: "/account",
		icon: <UserIcon fontSize="small" />,
		title: "Account",
	},
	{
		type: "navLink",
		href: "/settings",
		icon: <CogIcon fontSize="small" />,
		title: "Settings",
	},
	{
		type: "navGroup",
		icon: <LockIcon fontSize="small" />,
		title: "Start pages",
		items: [
			{
				type: "navLink",
				href: "/login",
				icon: <LockIcon fontSize="small" />,
				title: "Login",
			},
			{
				type: "navLink",
				href: "/register",
				icon: <UserAddIcon fontSize="small" />,
				title: "Register",
			},
		],
	},
	{
		type: "navLink",
		href: "/404",
		icon: <XCircleIcon fontSize="small" />,
		title: "Error",
	},
];

export const DashboardSidebar = (props) => {
	const { open, onClose } = props;
	const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
		defaultMatches: true,
		noSsr: false,
	});

	useEffect(() => {}, []);

	const content = (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					height: "100%",
				}}>
				<div>
					<Box sx={{ p: 3 }}>
						<Link to={"/"}>
							<Logo
								sx={{
									height: 32,
									width: 32,
								}}
							/>
						</Link>
					</Box>
					<Box sx={{ px: 2 }}>
						<Box
							sx={{
								alignItems: "center",
								backgroundColor: "rgba(255, 255, 255, 0.04)",
								cursor: "pointer",
								display: "flex",
								justifyContent: "space-between",
								px: 3,
								py: 1.5,
								borderRadius: 1,
							}}>
							<div>
								<Typography color="inherit" variant="subtitle1">
									Company name
								</Typography>
								<Typography color="neutral.400" variant="body2">
									Business unit
								</Typography>
							</div>
							<SelectorIcon
								sx={{
									color: "neutral.500",
									width: 14,
									height: 14,
								}}
							/>
						</Box>
					</Box>
				</div>
				<Divider
					sx={{
						borderColor: "#2D3748",
						my: 2,
					}}
				/>
				<Box sx={{ flexGrow: 1 }}>
					{menuItems.map((item) =>
						item.type == "navGroup" ? (
							<NavGroup key={item.title} icon={item.icon} title={item.title} items={item.items} />
						) : (
							<NavLink key={item.title} icon={item.icon} href={item.href} title={item.title} />
						)
					)}
				</Box>
				<Divider sx={{ borderColor: "#2D3748" }} />
			</Box>
		</>
	);

	if (lgUp) {
		return (
			<Drawer
				anchor="left"
				open
				PaperProps={{
					sx: {
						backgroundColor: "neutral.900",
						color: "#FFFFFF",
						width: 280,
					},
				}}
				variant="permanent">
				{content}
			</Drawer>
		);
	}

	return (
		<Drawer
			anchor="left"
			onClose={onClose}
			open={open}
			PaperProps={{
				sx: {
					backgroundColor: "neutral.900",
					color: "#FFFFFF",
					width: 280,
				},
			}}
			sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
			variant="temporary">
			{content}
		</Drawer>
	);
};

DashboardSidebar.propTypes = {
	onClose: PropTypes.func,
	open: PropTypes.bool,
};
