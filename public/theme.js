import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
	typography: {
		fontFamily: `"NanumSquareRound", sans-serif`,
	},
	palette: {
		primary: {
			main: "#556cd6",
		},
		secondary: {
			main: "#19857b",
		},
		error: {
			main: red.A400,
		},
		success: {
			main: "#218e16",
		},
		background: {
			default: "transparent",
		},
	},
});

export default theme;
