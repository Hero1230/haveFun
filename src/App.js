import React, { Suspense } from "react";
// React router
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// styles
import styles from "./App.module.scss";
// pages&components
import Navbar from "./components/navigation/Navbar";
import Sidebar from "./components/navigation/sidebar/Sidebar";
import Notification from "./components/notification/Notification";
import Login from "./pages/login/Login";
import Singup from "./pages/signup/Singup";
import NotFound from "./pages/not-found/NotFound";
import GameResult from "./pages/home/game-result/GameResult";
// hooks
import { useNotificationContext } from "./hooks/notification/useNotificationContext";
import { useAuthContext } from "./hooks/auth/useAuthContext";
import { useCurrentGameContex } from "./hooks/games/useCurrentGameContex";
import { useUserDataContext } from "./hooks/data/useUserDataContext";
//game items
import {
	gameOne,
	gameTwo,
	gameThree,
} from "./games-data/scratch-card/data/items";
import Loading from "./components/loading/Loading";
// lazy loading
const Home = React.lazy(() => import("./pages/home/Home"));
const Settings = React.lazy(() => import("./pages/settings/Settings"));
const Profile = React.lazy(() => import("./pages/profile/Profile"));
const ScratchCardList = React.lazy(() =>
	import("./pages/home/games/scratch-card/scratch-card-list/ScratchCardList")
);
const AddTransaction = React.lazy(() =>
	import("./pages/addTransaction/AddTransaction")
);
const Transactions = React.lazy(() =>
	import("./pages/transactions/Transactions")
);
const ScratchCardGame = React.lazy(() =>
	import("./games/scratchCard/ScratchCardGame")
);

function App() {
	const { user, authIsReady } = useAuthContext();
	const { notification, dispatchNotification } = useNotificationContext();
	const { isAllowedToPlay } = useUserDataContext();
	const { showResult } = useCurrentGameContex();

	return (
		<div className={styles.app}>
			{authIsReady && (
				<BrowserRouter>
					{user && <Sidebar />}
					{showResult && <GameResult />}
					<div className={styles.container}>
						<Navbar />
						<Suspense
							fallback={
								<div className={styles["loading-container"]}>
									<Loading />
								</div>
							}>
							<Routes>
								{user ? (
									<>
										<Route path="/" element={<Home />} />
										<Route path="profile/:id" element={<Profile />} />
										<Route
											path="scratch-card-list"
											element={<ScratchCardList />}
										/>
										{isAllowedToPlay ? (
											<>
												<Route
													path="/scratch-card-20"
													element={
														<ScratchCardGame
															items={gameOne}
															length={9}
															options={{
																backGroundColor: "#8d69f1",
																tilesColor: "#8d69f1",
																title: "Scratch me!",
																titleColor: "#fff",
																borderColor: "#000",
															}}
														/>
													}
												/>
												<Route
													path="/scratch-card-50"
													element={
														<ScratchCardGame
															items={gameTwo}
															length={9}
															options={{
																backGroundColor: "#fc466b",
																tilesColor: "#fc466b",
																title: "Scratch me!",
																titleColor: "#fff",
																borderColor: "#000",
															}}
														/>
													}
												/>
												<Route
													path="/scratch-card-100"
													element={
														<ScratchCardGame
															items={gameThree}
															length={9}
															options={{
																backGroundColor: "#3f5efb",
																tilesColor: "#3f5efb",
																title: "Scratch me!",
																titleColor: "#fff",
																borderColor: "#000",
															}}
														/>
													}
												/>
											</>
										) : (
											<>
												<Route
													path="/scratch-card-20"
													element={<Navigate to="/scratch-card-list" />}
												/>
												<Route
													path="/scratch-card-50"
													element={<Navigate to="/scratch-card-list" />}
												/>
												<Route
													path="/scratch-card-100"
													element={<Navigate to="/scratch-card-list" />}
												/>
											</>
										)}
										<Route path="slot-machine" element={<Navigate to="/" />} />
										<Route path="lucky-wheel" element={<Navigate to="/" />} />
										<Route path="transactions" element={<Transactions />} />
										<Route
											path="transactions/add"
											element={<AddTransaction />}
										/>
										<Route path="settings" element={<Settings />} />
										<Route path="*" element={<NotFound />} />
									</>
								) : (
									<>
										<Route path="/" element={<Navigate to="/login" />} />
										<Route
											path="scratch-card"
											element={<Navigate to="/login" />}
										/>
										<Route
											path="scratch-card-list"
											element={<Navigate to="/login" />}
										/>
										<Route
											path="profile/:id"
											element={<Navigate to="/login" />}
										/>
										<Route
											path="/settings"
											element={<Navigate to="/login" />}
										/>
										<Route
											path="transactions"
											element={<Navigate to="/login" />}
										/>
										<Route
											path="transactions/add"
											element={<Navigate to="/login" />}
										/>
									</>
								)}
								{!user ? (
									<>
										<Route path="login" element={<Login />} />
										<Route path="signup" element={<Singup />} />
										<Route path="*" element={<Navigate to="/" />} />
									</>
								) : (
									<>
										<Route path="/login" element={<Navigate to="/" />} />
										<Route path="/signup" element={<Navigate to="/" />} />
									</>
								)}
							</Routes>
						</Suspense>
					</div>
					{notification && (
						<Notification
							notificationObj={notification}
							dispatchNotification={dispatchNotification}
						/>
					)}
				</BrowserRouter>
			)}
		</div>
	);
}

export default App;
