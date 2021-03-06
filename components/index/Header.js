import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: "sticky",
		backgroundColor: "white",
	},
	header: {
		height: "65px",
		marginTop: "2%",
		"& .MuiTouchRipple-root span": {
			backgroundColor: "#FFF",
		},
		fontWeight: 100,
	},
	mobileBox: {
		display: "flex",
	},
	logoButton: {
		margin: "0 auto",
		bottom: "45px",
		display: "flex",
		justifyContent: "center",
		width: "100px",
		transition: "0.5s",
		"&:hover": {
			color: "#218e16",
			backgroundColor: "#FFF",
		},
	},
	list: {
		fontSize: "7vw",
		fontWeight: 200,
		padding: "10px",
		width: "250px",
	},
	hover: {
		height: "75px",
		fontWeight: 70,
		marginLeft: 20,
		transition: "0.5s",
		"&:hover": {
			color: "#218e16",
			backgroundColor: "#FFF",
			transform: "translateY(-5px)",
		},
	},
	mobileHover: {
		display: "block",
		fontWeight: 70,
		"&:hover": {
			color: "#218e16",
			backgroundColor: "#FFF",
		},
	},
	home: {
		transition: "0.5s",
		"&:hover": {
			color: "#218e16",
			backgroundColor: "#FFF",
			transform: "translateY(-5px)",
		},
	},
}));

const Header = (props) => {
	const router = useRouter();
	const classes = useStyles();
	const [mobile, setMobile] = useState(null);
	const [navBar, setNavBar] = useState({ left: false });
	const divide = 800;

	useEffect(() => {
		if (mobile === null) {
			window.innerWidth < divide ? setMobile(true) : setMobile(false);
		} else {
			window.addEventListener(
				"resize",
				function () {
					window.innerWidth < divide
						? setMobile(true)
						: setMobile(false);
				},
				{ passive: true }
			);
		}
	});

	const moveToAbout = () => {
		if (router.pathname !== "/") {
			router.push("/");
		} else {
			props.toAbout(true);
		}
	};

	const moveToSkill = () => {
		if (router.pathname !== "/") {
			router.push("/");
		} else {
			props.toSkill(true);
		}
	};

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setNavBar({ ...navBar, [anchor]: open });
	};

	const list = (anchor) => (
		<div
			className={classes.list}
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<div>
				<Button className={classes.mobileHover} onClick={moveToAbout}>
					About
				</Button>
				<Button className={classes.mobileHover} onClick={moveToSkill}>
					Skill
				</Button>
				<Button className={classes.mobileHover} href="../blog">
					Blog
				</Button>
				<Button
					className={classes.mobileHover}
					href="https://github.com/Young-Jin1003"
				>
					Github
				</Button>
			</div>
		</div>
	);

	return (
		<Container style={{ maxWidth: "1100px" }}>
			<AppBar
				elevation={0}
				color="transparent"
				className={classes.appBar}
			>
				<div className={classes.header}>
					{mobile ? (
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<IconButton
									color="inherit"
									onClick={toggleDrawer("left", true)}
									className={classes.home}
								>
									<MenuIcon />
								</IconButton>
								<Button className={classes.logoButton} href="/">
									<span style={{ color: "#218e16" }}>
										DEV
									</span>
									&nbsp;Hong
								</Button>
								<Drawer
									anchor={"left"}
									open={navBar.left}
									onClose={toggleDrawer("left", false)}
								>
									{list("left")}
								</Drawer>
							</Grid>
						</Grid>
					) : (
						<Grid
							container
							spacing={2}
							style={{ marginTop: "1px" }}
						>
							<Button
								href="/"
								className={classes.home}
								style={{ marginLeft: "2.2%" }}
							>
								<span style={{ color: "#218e16" }}>DEV</span>
								&nbsp;Hong
							</Button>
							<div
								style={{
									display: "flex",
									marginLeft: "auto",
									marginRight: "9%",
								}}
							>
								<Button
									className={classes.hover}
									onClick={moveToAbout}
								>
									About
								</Button>
								<Button
									className={classes.hover}
									onClick={moveToSkill}
								>
									Skill
								</Button>
								<Button
									className={classes.hover}
									href="../blog"
								>
									Blog
								</Button>
								<Button
									className={classes.hover}
									href="https://github.com/HONGVELOPER"
								>
									Github
								</Button>
							</div>
						</Grid>
					)}
				</div>
				<Divider style={{ backgroundColor: "#218e16" }} />
				<Drawer
					anchor={"left"}
					open={navBar.left}
					onClose={toggleDrawer("left", false)}
				>
					{list("left")}
				</Drawer>
			</AppBar>
		</Container>
	);
};

export default Header;
