// import { Link } from 'react-router-dom'

function GamesList(props) {
    console.log(props.games)

    return (
        <>
            {props.games ? props.games.map((game, idx) => (
                <div key={idx}>
                    
                        <h2>{game.name}</h2>
                     
                </div>
            )) : <h3>LOADING! PLEASE WAIT!</h3>}
        </>
    )
}


export default GamesList