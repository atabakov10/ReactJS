import { useState } from 'react'
import { useForm } from '../../hooks/useForm';

export default function Create({
    onCreateGameSubmit,
}) {
    const {values, changeHandler, onSubmit} = useForm({
        title: '',
        category: '',
        maxLevel: '', 
        imageUrl: '',
        summary: '',
    }, onCreateGameSubmit)

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit} method='POST'>
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input value={values.title} type="text" id="title" name="title" placeholder="Enter game title..." onChange={changeHandler} />

                    <label htmlFor="category">Category:</label>
                    <input value={values.category} type="text" id="category" name="category" placeholder="Enter game category..." onChange={changeHandler} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input value={values.maxLevel} type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" onChange={changeHandler} />

                    <label htmlFor="game-img">Image:</label>
                    <input value={values.imageUrl} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." onChange={changeHandler} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={values.summary} onChange={changeHandler}></textarea>
                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    )
}
