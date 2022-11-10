import { useContext } from "react";
import {
	BrowserRouter,
	Navigate,
	Route,
	Routes,
	Outlet,
	useLocation,
} from "react-router-dom";
import AuthContext from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sectores from "./pages/Sectores";
import Empleados from "./pages/Empleados";
import Tareas from "./pages/Tareas";
import TareasEmpleado from "./pages/TareasEmpleado";

function App() {
	const { currentUser } = useContext(AuthContext);

	const ProtectedRoute = ({ admin }) => {
		const location = useLocation();
		if (!currentUser.uid) {
			return <Navigate to="/" replace state={{ from: location, admin }} />;
		}
		return <Outlet />;
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Login />} />
					<Route element={<ProtectedRoute admin />}>
						<Route path="admin">
							<Route index element={<Home />} />
							<Route path="sectores" element={<Sectores />} />
							<Route path="empleados" element={<Empleados />} />
							<Route path="tareas" element={<Tareas />} />
						</Route>
					</Route>
					<Route element={<ProtectedRoute />}>
						<Route path="tareas" element={<TareasEmpleado />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
