import styles from "./Card.module.css";
import CardText from "../cards/CardText";
import events from "../../../assets/images/events.jpg";
import tea from "../../../assets/images/tea.jpg";

function Cards() {
	return (
		<div className={styles.cards_container}>
			<CardText
				titulo={"Eventos"}
				texto={
					"Venha comemorar nessa primavera o Hanami Matsuri, o Festival da Flor de Cerejeira, conosco."
				}
				foto={events}
				alt={"balões japoneses"}
			/>
			<CardText
				titulo={"Gastronomia"}
				texto={"Venha provar nossa culinária baseada no mundo dos animes :3"}
				foto={tea}
				alt={"chá japonês"}
			/>
		</div>
	);
}

export default Cards;
