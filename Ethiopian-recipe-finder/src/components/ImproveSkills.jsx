export default function ImproveSkills() {
    const list = [
        "Learn New Recipes",
        "Vegetarian & Vegan",
        "Regional Specialties",
        "Festive Foods",
        "Healthy Choices",
        "Street Foods"

]


    


    return (
        <div className="section improve-skills">
            <div className="Col img">
                <img src="/img/gallery/img_10.jpg" alt="" />
            </div>

            <div className="Col typography">
                <h1 className="title">Taste of Habesha</h1>
{list.map((item, index) =>(
    <p className="skill-item" key={index}>{item}</p>
))}
                <button className="btn">
                    SIGNUP NOW
                </button>


            </div>


        </div>
    )
}