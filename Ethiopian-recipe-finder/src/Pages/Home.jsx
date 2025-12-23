import Herosection from '../components/Herosection';
import ImproveSkills from '../components/ImproveSkills';
import QuoteSection from '../components/QuoteSection';
import ChiefSection from '../components/ChiefSection';


export default function Home() {
    return (
        <div className="container main">
            <Herosection />
            <ImproveSkills />
            <QuoteSection />
            <ChiefSection />
        </div>


    )
}
