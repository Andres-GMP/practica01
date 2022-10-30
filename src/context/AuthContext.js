import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect, createContext } from "react";
import { auth } from "./../firebase/firebaseConfig";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState({});
	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
		});
		return () => {
			unsub();
		};
	}, []);
	return (
		<AuthContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
