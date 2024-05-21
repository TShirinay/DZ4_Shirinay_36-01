import MainPage from "./components/MainPage/MainPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import {useEffect, useState} from "react";


function App() {
    const [user, setUser] = useState({name: '', lastname:''})

    useEffect(() => {
        const userName = prompt('Как вас зовут?')
        const userLastName = prompt('Какая у вас фамилия?')
        setUser({name: userName, lastname: userLastName})
    },[])
    console.log(user)
    return (
        <div>
            {
                user.name === 'John' && user.lastname === 'Johns'?(
                    <MainPage user={user}/>
                ):(
                    <ErrorPage user={user}/>
                )
            }
        </div>
    );
}

export default App;