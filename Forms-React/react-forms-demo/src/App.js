import './App.css';
import { useEffect, useState} from 'react';

function App() {
    const [username, setUsername] = useState('Pesho')

    useEffect(() => {
        setTimeout(() => {
            setUsername('Gosho');
        }, 3000)
    },[]);

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.traget);

        const username = formData.get('username');

        console.log(username);
    };

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" defaultValue={username} />
                    </div>

                    <div>
                        <input type="submit" value="Send"/>
                    </div>
                </form>
            </header>
        </div>
    );
}

export default App;
