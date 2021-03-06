import { Helmet } from "react-helmet";
import { Box, Container, Typography } from "@mui/material";
import { SettingsNotifications } from "./components/settings-notifications";
import { SettingsPassword } from "./components/settings-password";

const Settings = () => (
	<>
		<Helmet>
			<title>Settings | React Material Admin Dashboard</title>
		</Helmet>
		<Box
			component="main"
			sx={{
				flexGrow: 1,
				py: 3,
			}}>
			<Container maxWidth="lg">
				<Typography sx={{ mb: 3 }} variant="h4">
					Settings
				</Typography>
				<SettingsNotifications />
				<Box sx={{ pt: 3 }}>
					<SettingsPassword />
				</Box>
			</Container>
		</Box>
	</>
);

export default Settings;
