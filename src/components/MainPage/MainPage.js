

function MainPage({user}) {
    return (
        <div>
            <p>Добро пожаловать {user.name} {user.lastname}</p>
        </div>
    );
}

export default MainPage;