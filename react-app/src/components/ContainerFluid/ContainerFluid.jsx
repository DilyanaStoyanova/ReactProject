import BannerBackground from '../BannerBackground/BannerBackground';
import './ContainerFluid.css';


export default function ContainerFluid() {
    
    return (
        <div className="container-fluid">
            <BannerBackground />
            <div className="row">
                <div className="col-md-6" style="background: #020232;">
                    <div style="display: table; width: 100%; height: 650px;">
                        <div style="display: table-row">
                            <div style="display: table-cell; text-align: center; vertical-align: middle;">
                                <div>
                                    <div>
                                        <img src="/images/Gold_Booking.png" />
                                    </div>
                                    <div style="margin-top: 30px;">
                                        <div className="text-border-block text-gold border-gold">
                                            BOOK NOW
                                        </div>
                                    </div>
                                    <div style="margin-top: 70px;">
                                        Our kittys are very busy so if you want to see them it’s best to book in advance
                                    </div>
                                    <div style="margin-top: 70px;">
                                        <a className="btn catcafe-gold-button" href="/book">BOOK NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6" style="background-image: url(/images/kittenbanner3.jpg); background-position: left 90% ; background-size: ; background-repeat: no-repeat;">
                    <div style="display: table; width: 100%; height: 650px;">
                        <div style="display: table-row">
                            <div style="display: table-cell; text-align: center; vertical-align: middle;">
                                <div>
                                    <div>
                                        <img src="/images/Dark_Our_Mission.png" />
                                    </div>
                                    <div style="margin-top: 30px;">
                                        <div className="text-border-block text-dark border-dark">
                                            OUR MISSION
                                        </div>
                                    </div>
                                    <div className="text-dark" style="margin-top: 70px; text-shadow: 0 0 4px rgba(255, 255, 255, 1);">
                                        Cat Café is a stress free space where cats and humans come along side each other and unwind. You can read our full mission statement here
                                    </div>
                                    <div style="margin-top: 70px;">
                                        <a className="btn catcafe-gold-button" href="/mission-statement">MISSION STATEMENT</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}