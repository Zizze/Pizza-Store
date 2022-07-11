import ContentLoader from "react-content-loader";

const Skeleton = (props) => {
	return (
		<>
			<ContentLoader
				className="pizza-block"
				speed={2}
				width={280}
				height={460}
				viewBox="0 0 280 460"
				backgroundColor="#fbf2df"
				foregroundColor="#f5f5f5"
				{...props}
			>
				<circle cx="139" cy="113" r="110" />
				<rect x="-2" y="236" rx="20" ry="20" width="280" height="29" />
				<rect x="2" y="279" rx="20" ry="20" width="280" height="90" />
				<rect x="123" y="392" rx="20" ry="20" width="152" height="45" />
				<rect x="8" y="396" rx="20" ry="20" width="100" height="35" />
			</ContentLoader>
			<ContentLoader
				speed={2}
				width={280}
				height={460}
				viewBox="0 0 280 460"
				backgroundColor="#fbf2df"
				foregroundColor="#f5f5f5"
				{...props}
			>
				<circle cx="139" cy="113" r="110" />
				<rect x="-2" y="236" rx="20" ry="20" width="280" height="29" />
				<rect x="2" y="279" rx="20" ry="20" width="280" height="90" />
				<rect x="123" y="392" rx="20" ry="20" width="152" height="45" />
				<rect x="8" y="396" rx="20" ry="20" width="100" height="35" />
			</ContentLoader>
			<ContentLoader
				speed={2}
				width={280}
				height={460}
				viewBox="0 0 280 460"
				backgroundColor="#fbf2df"
				foregroundColor="#f5f5f5"
				{...props}
			>
				<circle cx="139" cy="113" r="110" />
				<rect x="-2" y="236" rx="20" ry="20" width="280" height="29" />
				<rect x="2" y="279" rx="20" ry="20" width="280" height="90" />
				<rect x="123" y="392" rx="20" ry="20" width="152" height="45" />
				<rect x="8" y="396" rx="20" ry="20" width="100" height="35" />
			</ContentLoader>
			<ContentLoader
				speed={2}
				width={280}
				height={460}
				viewBox="0 0 280 460"
				backgroundColor="#fbf2df"
				foregroundColor="#f5f5f5"
				{...props}
			>
				<circle cx="139" cy="113" r="110" />
				<rect x="-2" y="236" rx="20" ry="20" width="280" height="29" />
				<rect x="2" y="279" rx="20" ry="20" width="280" height="90" />
				<rect x="123" y="392" rx="20" ry="20" width="152" height="45" />
				<rect x="8" y="396" rx="20" ry="20" width="100" height="35" />
			</ContentLoader>
		</>
	);
};

export default Skeleton;
