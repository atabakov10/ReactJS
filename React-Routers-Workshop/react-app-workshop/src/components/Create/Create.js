import React from 'react'
import { useState } from 'react'

export default function Create({
    onCreateGameSubmit,
}) {
    const [values, setValues] = useState({
        title: '',
        category: '',
        maxLevel: '', 
        imageUrl: '',
        summary: '',
    })

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onCreateGameSubmit(values);
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input value={values.title} type="text" id="title" name="title" placeholder="Enter game title..." onChange={onChangeHandler} />

                    <label htmlFor="category">Category:</label>
                    <input value={values.category} type="text" id="category" name="category" placeholder="Enter game category..." onChange={onChangeHandler} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input value={values.maxLevel} type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" onChange={onChangeHandler} />

                    <label htmlFor="game-img">Image:</label>
                    <input value={values.imageUrl} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." onChange={onChangeHandler} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={values.summary} onChange={onChangeHandler}></textarea>
                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    )
}
