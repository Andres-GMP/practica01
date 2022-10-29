import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sectores from "./pages/Sectores";
import Empleados from "./pages/Empleados";
import Tareas from "./pages/Tareas";
import TareasEmpleado from "./pages/TareasEmpleado";

function App() {
	//const [currentUser, setCurrentUser] = useState();
	/* const ProtectedRoute = ({ children }) => {
		if (!currentUser) {
			return <Navigate to="/login" />;
		}
		setCurrentUser("");
		return <>{children}</>;
	}; */
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="admin">
						<Route index element={<Sectores />} />
						<Route path="empleados" element={<Empleados />} />
						<Route path="tareas" element={<Tareas />} />
					</Route>
					<Route path="tareas" element={<TareasEmpleado />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
