import PreviousSearch from "../components/PreviousSearch";
import RecipeCard from "../components/RecipeCard";
export default function Recipes() {
    const recipes = [
        {
            title: "Firfir (fasting)",
            image: "/img/gallery/img_11.jpg",
        },
{
            title: "Beef Sandwich",
            image: "/img/gallery/img_12.jpg",
        },
        {
            title: "Ambasha",
            image: "/img/gallery/img_13.jpg",
        },
        {
            title: "Beyaynetu (fasting)",
            image: "/img/gallery/img_8.jpg",
        },
        {
            title: "Tre Sga (row meet)",
            image: "/img/gallery/img_5.jpg",
        },
        {
            title: "Doro Wot",
            image: "/img/gallery/img_3.jpg",
        },
        {
            title: "Shiro Wot",
            image: "/img/gallery/img_4.jpg"
        }





    ]
    return (
        <div className="container main">
            <PreviousSearch />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
            {recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
            ))}
            </div>
        </div>
    )
}
