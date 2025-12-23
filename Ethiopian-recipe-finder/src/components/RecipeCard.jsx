import Ayele from "./Ayele"
export default function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <Ayele imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
               <p className="recipe-title"> {recipe.title} </p>
                <p className="recipe-note"> Rediscover the rich spices and traditional tastes of Habesha.</p>
                <a className="view-btn" href="#!">VIEW RECIPE </a>
            </div>


        </div>

    )
}