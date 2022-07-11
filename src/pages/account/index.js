import { Helmet } from "react-helmet";
import { Box, Container, Grid, Typography } from "@mui/material";
import { AccountProfile } from "./components/account-profile";
import { AccountProfileDetails } from "./components/account-profile-details";

const Account = () => (
	<>
		<Helmet>
			<title>Account | React Material Admin Dashboard</title>
		</Helmet>
		<Box
			component="main"
			sx={{
				flexGrow: 1,
				py: 3,
			}}>
			<Container maxWidth="lg">
				<Typography sx={{ mb: 3 }} variant="h4">
					Account
				</Typography>
				<Grid container spacing={3}>
					<Grid item lg={4} md={6} xs={12}>
						<AccountProfile />
					</Grid>
					<Grid item lg={8} md={6} xs={12}>
						<AccountProfileDetails />
					</Grid>
				</Grid>
			</Container>
		</Box>
	</>
);

export default Account;