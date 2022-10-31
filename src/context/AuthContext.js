import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect, createContext } from "react";
import { auth, db } from "./../firebase/firebaseConfig";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState({});
	useEffect(() => {
		const unsub = onAuthStateChanged(auth, async (user) => {
			try {
				if (!user) setCurrentUser({});
				else {
					let docRef = doc(db, "users", user.uid);
					let docSnap = await getDoc(docRef);
					setCurrentUser(docSnap.data());
				}
			} catch (err) {
				console.log(err);
			}
		});
		return () => {
			unsub();
		};
	}, []);
	return (
		<AuthContext.Provider
			value={{
				currentUser,
				setCurrentUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
