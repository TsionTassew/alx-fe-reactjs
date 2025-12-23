import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function PreviousSearch() {
  const searches = [
    "Injera", "Doro Wat", "Kitfo", "Tibs", "Shiro", "Gomen", "Berbere Spiced Lentils"
  ];

  return (
    <div> 
      <div className="previous-searches section"> 
        <h2>Previous Searches</h2>
        <div className="previous-searches-container">
          {searches.map((search, index) => (
            <div className="search-item" key={index}>
              {search}
            </div>
          ))}
        </div>
        
        <div className="search-box"> 
          <input type="text" placeholder="search..." />
          <button className="btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div> 

      </div> 
    </div> 
  );
}