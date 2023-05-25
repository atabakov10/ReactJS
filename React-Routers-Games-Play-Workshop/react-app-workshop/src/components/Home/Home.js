import { HomeGames } from "./HomeGames";

export const Home = ({
    games,
}) => {
    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                {games.length > 0 ? (<h1>Latest Games</h1>) : (<p className="no-articles">No games yet</p>)}

                {games.length > 0 && games.map(game => <HomeGames key={game._id} {...game} />)}

            </div>
        </section>
    );
}