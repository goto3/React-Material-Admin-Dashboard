import * as React from "react";
import { Box, Container } from "@mui/material";
import { CustomerListResults } from "./components/customer-list-results";
import { CustomerListToolbar } from "./components/customer-list-toolbar";
import { customers } from "../../__mocks__/customers";

const Customers = () => {
	React.useEffect(() => {}, []);

	return (
		<>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					py: 3,
				}}>
				<Container maxWidth={false}>
					<CustomerListToolbar />
					<Box sx={{ mt: 3 }}>
						<CustomerListResults customers={customers} />
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default Customers;
