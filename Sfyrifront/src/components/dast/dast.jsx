import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { FaCheckCircle, FaSpinner, FaTimesCircle } from "react-icons/fa";

const data = [
	{ name: "Resolved", value: 30 },
	{ name: "In Progress", value: 30 },
	{ name: "Unresolved", value: 30 },
];

const vulnerabilities = [
	{ id: 1, name: "SQL Injection", status: "Resolved" },
	{ id: 2, name: "Cross-Site Scripting", status: "In Progress" },
	{ id: 3, name: "File Inclusion", status: "Unresolved" },
];

const COLORS = ["#a855f7", "#6366f1", "#60a5fa"]; // Bleu marine, Doré, Gris anthracite

const Dast = () => {
	return (
		<div className="container mx-auto">
			<header className="mb-6">
				<h1 className="text-3xl font-bold mb-6 text-gray-800">
					Dynamic Application Security Testing Dashboard
				</h1>
				<hr />
				<hr />
			</header>

			<h2 className="text-2xl font-bold mb-6 text-gray-800">Stats</h2>
			<div className="flex flex-col items-center mb-6">
				<div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
					<PieChart width={600} height={500}>
						<Pie
							data={data}
							nameKey="name"
							cx="50%"
							cy="50%"
							labelLine={false}
							label={({ name, percent }) =>
								`${name}: ${(percent * 100).toFixed(0)}%`
							}
							outerRadius={155}
							fill="#8884d8"
							dataKey="value"
							stroke="#ffffff"
							strokeWidth={2}
							animationBegin={200}
							animationDuration={1500}
							animationEasing="ease-out"
						>
							{data.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index]}
									cursor="pointer" // Change le curseur au survol
								/>
							))}
						</Pie>
						<Legend
							wrapperStyle={{
								bottom: 0,
								left: "60%",
								backgroundColor: "white",
								border: "2px solid #ddd",
								borderRadius: "4px",
								padding: "5px",
								boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
								fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
								fontSize: "10px",
								color: "#333",
								transition: "transform 0.3s ease-in-out",
								transform: "translateY(0)",
							}}
							content={(props) => {
								const { payload } = props;
								return (
									<div className="flex flex-col space-y-2">
										{payload.map((entry, index) => (
											<div
												key={`legend-item-${index}`}
												className="flex items-center hover:transform hover:translate-x-1 transition-transform duration-200"
												style={{
													cursor: "pointer",
												}}
											>
												<span
													className="inline-block w-4 h-4 mr-2 rounded-full"
													style={{ backgroundColor: entry.payload.fill }}
												/>
												<span className="text-sm font-medium">
													{entry.payload.name}
												</span>
											</div>
										))}
									</div>
								);
							}}
						/>
					</PieChart>
				</div>
			</div>

			<div className="overflow-x-auto">
				<h2 className="text-2xl font-bold mb-6 text-gray-800">
					Vulnerabilities List
				</h2>
				<table className="min-w-full table-auto border-separate border-spacing-2 border border-slate-500 rounded-lg drop-shadow-md">
					<thead className="bg-gray-200">
						<tr className="border-b border-gray-300">
							<th className="px-6 py-3 text-left text-gray-600 text-sm font-semibold">
								ID
							</th>
							<th className="px-6 py-3 text-left text-gray-600 text-sm font-semibold">
								Vulnerability
							</th>
							<th className="px-6 py-3 text-left text-gray-600 text-sm font-semibold">
								Status
							</th>
						</tr>
					</thead>
					<tbody>
						{vulnerabilities.map((vuln, index) => (
							<tr
								key={vuln.id}
								className={`border-b border-gray-300 ${
									index % 2 === 0 ? "bg-gray-50" : "bg-white"
								} hover:bg-gray-100`}
							>
								<td className="px-6 py-4 text-gray-800">{vuln.id}</td>
								<td className="px-6 py-4 text-gray-800">{vuln.name}</td>
								<td className="px-6 py-4 text-gray-800 flex items-center space-x-2">
									{vuln.status === "Resolved" && (
										<FaCheckCircle className="text-purple-500" />
									)}
									{vuln.status === "In Progress" && (
										<FaSpinner className="text-indigo-500 animate-spin" />
									)}
									{vuln.status === "Unresolved" && (
										<FaTimesCircle className="text-blue-400" />
									)}
									<span>{vuln.status}</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Dast;
