import BannerBackground from '../BannerBackground/BannerBackground';
import BookNow from '../BookNow/BookNow';
import OurMission from '../OurMission/OurMission';
import '../../App.css';
import './ContainerContent.css';


export default function ContainerContent() {

    return (
        <div className="container-fluid">
            <BannerBackground />
            <div className="row">
                <BookNow />
                <OurMission />
            </div>
        </div>
    );
}