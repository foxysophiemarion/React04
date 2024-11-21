import { Link } from "react-router-dom";

function AboutPage() {
	return (
		<div>
			<h1 className="title">О нас</h1>
			<Link to="/" className="link">Главная</Link>
		</div>

	);
}

export default AboutPage;