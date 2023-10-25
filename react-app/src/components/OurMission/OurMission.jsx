import darkOurMission from '../../assets/Dark_Our_Mission.png';
import '../../App.css';

export default function OurMission() {

    return (
        <div className='col-md-6 second-section'>
            <div>
                <img src={darkOurMission} />
            </div>
            <div>
                <div className="text-border-block text-dark border-dark">
                    OUR MISSION
                </div>
            </div>
            <div className="text-dark">
                Cat Café is a stress free space where cats and humans come along side each other and unwind. You can read our full mission statement here
            </div>
            <div>
                <a className="btn catcafe-gold-button" href="/mission-statement">MISSION STATEMENT</a>
            </div>
        </div>
    );
}