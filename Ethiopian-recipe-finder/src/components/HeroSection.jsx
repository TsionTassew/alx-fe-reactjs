
import Ayele from "./Ayele.jsx";



export default function Herosection() {
const images =[
    
         "/img/gallery/img_1.jpg",
         "/img/gallery/img_2.jpg",
         "/img/gallery/img_3.jpg",
         "/img/gallery/img_4.jpg",
         "/img/gallery/img_5.jpg",
         "/img/gallery/img_6.jpg",
         "/img/gallery/img_7.jpg",
         "/img/gallery/img_8.jpg",
         "/img/gallery/img_9.jpg",
    
]

    return (
        <div className="section hero">
            <div className="Col typography">
                <h1 className="title">Discover Authentic Recipes</h1>
                <p className="info">"Explore the vibrant world of Ethiopian
                    flavors. Simple steps, authentic
                    ingredients, and the stories behind
                    the dishes you love."
                </p>
                <button className="btn">
                    explore now
                </button>


            </div>
            <div className="Col gallery">
                { images.map((src, index) =>(
                   <Ayele key={index} imgSrc={src} pt={"85%"} />
                ))}
               
            </div>

        </div>
    )
}


