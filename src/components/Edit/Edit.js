import { useForm } from "../../hooks/useForm";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useService } from "../../hooks/useService";
import { gameServiceFactory } from "../../services/gameService";

export default function Edit({
    onGameEditSubmit,
}) {
    const { gameId } = useParams();
    const gameService = useService(gameServiceFactory);
    const [values, changeHandler, onSubmit, changeValues] = useForm({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
    }, onGameEditSubmit);

    useEffect(() => {
        gameService.getOne(gameId)
            .then(result => {
                changeValues(result);
            })
    }, [changeValues, gameId, gameService]);

    return (
        <section id="edit-page" className="auth">
            <form id="edit" method="POST" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={changeHandler}
                    />

                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={values.category}
                        onChange={changeHandler}
                    />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min="1"
                        value={values.maxLevel}
                        onChange={changeHandler}
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeHandler}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>
    )
}
