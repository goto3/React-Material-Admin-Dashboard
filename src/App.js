import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "./utils/create-emotion-cache";
import { theme } from "./theme";
import SiteRoutes from "./routes";

const clientSideEmotionCache = createEmotionCache();

function App(props) {
	const { emotionCache = clientSideEmotionCache } = props;

	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<SiteRoutes />
			</ThemeProvider>
		</CacheProvider>
	);
}

export default App;
