import NavBar from "../components/sectores/Header";
import Background from "../components/sectores/Background";
import SectorBox from "../components/sectores/SectorBox";
const Sectores = () => {
	return (
		<>
			<body>
				<NavBar></NavBar>
				<Background>
					<SectorBox
						sector="B"
						numTrabajadores="10"
						numTareas="5">
					</SectorBox>
				</Background>
			</body>
		</>
	);
};

export default Sectores;