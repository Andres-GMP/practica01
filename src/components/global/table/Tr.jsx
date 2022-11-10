const Tr = ({ data, onClick, tableData }) => {
	return (
		<tr
			className="text-left bg-gray-100 border-b-2 border-b-white hover:bg-sky-100 cursor-pointer"
			onClick={() => onClick(data)}
		>
			{tableData.length !== 0 &&
				tableData.map((el, i) => (
					<td
						key={i + 1}
						className={`p-2 ${i === 0 ? "text-left" : "text-center"}`}
					>
						{el}
					</td>
				))}
		</tr>
	);
};

export default Tr;
