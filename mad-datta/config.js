import "dotenv";

const DB_URI =
	process.env.NODE_ENV === "test"
		? "postgresql:///maddatta_test"
		: "postgresql:///maddatta";

export default DB_URI;
