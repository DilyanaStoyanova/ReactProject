import logoBigGold from '../../assets/logo_big_gold.png';
import './BannerBackground.css';

export default function BannerBackground() {

    return (
        <div className="row banner-background">
            <div>
                <div className="logo-container">
                    <img src={logoBigGold} />
                </div>
            </div>
        </div>
    );
}