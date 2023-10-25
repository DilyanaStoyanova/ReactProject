import '../../App.css';
import './BookNow.css';
import goldBooking from '../../assets/Gold_Booking.png';

export default function BookNow() {

    return (
        <div className="col-md-6">
            <div>
                <img src={goldBooking} />
            </div>
            <div className="text-gold-border">
                BOOK NOW
            </div>
            <div>
                Our kittys are very busy so if you want to see them it’s best to book in advance
            </div>
            <div>
                <a className="btn catcafe-gold-button" href="/book">BOOK NOW</a>
            </div>
        </div>
    );
}