import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function QuoteSection() {
  return (
    <div className="section quote">
      <p className="quote-text">
        <FontAwesomeIcon icon={faQuoteLeft} />  
        One plate, many hands, countless memories—Habesha meals celebrate community, friendship, and family. Sharing isn’t just a custom; it’s the heart of Habesha hospitality, bringing people together through food and tradition.
      </p>
      <p className="quote-author">
        Dr Tsion Tassew
      </p>
    </div>
  );
}
