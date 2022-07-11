import * as React from "react";
import { Helmet } from "react-helmet";
import { Box, Container, Grid, Pagination } from "@mui/material";
import { products } from "../../__mocks__/products";
import { ProductListToolbar } from "./components/product-list-toolbar";
import { ProductCard } from "./components/product-card";

const Products = () => {
	React.useEffect(() => {}, []);

	return (
		<>
			<Helmet>
				<title>Products | React Material Admin Dashboard</title>
			</Helmet>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					py: 3,
				}}>
				<Container maxWidth={false}>
					<ProductListToolbar />
					<Box sx={{ pt: 3 }}>
						<Grid container spacing={3}>
							{products.map((product) => (
								<Grid item key={product.id} lg={4} md={6} xs={12}>
									<ProductCard product={product} />
								</Grid>
							))}
						</Grid>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							pt: 3,
						}}>
						<Pagination color="primary" count={3} size="small" />
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default Products;
