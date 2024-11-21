import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div>
			<h1 className="title">Главная страница</h1>
			<Link to="/about" className="link">О нас</Link>
		</div>
	);
}

export default HomePage;