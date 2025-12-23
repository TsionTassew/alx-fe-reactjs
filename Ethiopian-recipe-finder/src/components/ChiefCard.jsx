export default function ChiefCard({ chief }) {

    return (
        <div className="chief-card">
            <img src={chief.img} alt="" />
            <div className="chief-card-info">
                <h3 className="chief-card-name">{chief.name} </h3>
                 <p className="chief-cuisine"> {chief.cuisine} </p>

            </div>

        </div>
    )



}