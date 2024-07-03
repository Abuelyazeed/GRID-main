import { Component } from "react";
import placeImage from "../../../assets/images/details-image.jpg"
import EventBreadcrumb from "../../CommonComponents/breadcrumb/event-details-breadcrumbs";

class EventDetailsPage extends Component{

    state = {
        title: "David Droga Still Has Faith in Online Advertising",
        genre: "fintech, co-working, innovation",
        author: "Ahmed Soliman",
        date: "18-3-2022",
        paragraph1: "Phase llus vitae erat, at tem por mi ris laor port tor quam, at arcu fac sis. Do nec est erat, ullam corper id ligu la quis, ultri cies bibe ndum quam natis, toru non condi men tum frin gilla, elem ent um diam ac fa cili sis massa. Viva mus vel quam risus do nec est erat, ullam corper id ligu la quis, ultri cies bibe ndum quam natis, toru non condi men tum frin gilla pell ente sque nulla id, tem pus ris, phase llus vitae erat, at tem por mi ris laor port tor quam, at arcu fac sis. Do nec est erat, ullam corper id ligu la quis, ultri cies bibe ndum quam natis, toru non condi men tum frin gilla, elem ",
        paragraph2: "Phase llus vitae erat, at tem por mi ris laor port tor quam, at arcu fac sis. Do nec est erat, ullam corper id ligu la quis, ultri cies bibe ndum quam natis, toru non condi men tum frin gilla, elem ent um diam ac fa cili sis massa. Viva mus vel quam risus do nec est erat, ullam corper id ligu la quis, ultri cies bibe ndum quam natis, toru non condi men tum frin gilla pell ente sque nulla id, tem pus ris, phase llus vitae erat, at tem por mi ris laor port tor quam, at arcu fac sis. Do nec est erat, ullam corper id ligu la quis, ultri cies bibe ndum quam natis, toru non condi men tum frin gilla, elem ent um diam ac fa cili sis massa. Viva mus vel quam risus do nec est erat, ullam corper id ligu la quis, ultri cies bibe ndum quam natis, toru non condi men tum frin gilla pell ente sque nulla id, tem pus ris llus vitae erat, at tem por mi vul pu tat risus cons equ at rat ips um quis est place rat ips um quis est volutpat, soda les sus cipit neque morbi eget urna impe dit, pell ente sque."
    };
    
    render() {
        return(
            <>
            <EventBreadcrumb/>
            <div className="container-fluid details-page">
                <div className="row top-content">
                    <div className="col-6">
                        <img className="img-fluid side-image" src={placeImage}></img>
                    </div>
                    <div className="col-6 right-column-top">
                        <p className="genre-text">
                            <span className="line icon-Line"></span> Fintech , Co-working , Innvotation
                        </p>
                        <h1 className="title-text">{this.state.title}</h1>
                        <div className="row article-details">
                            <div className="col-6">
                                <span className="pen icon-Pen"></span>
                                <span className="author-text">{this.state.author}</span>
                            </div>
                            <div className="col-6">
                                <span className="calendar icon-calendar"></span>
                                <span className="date-text">{this.state.date}</span>
                            </div>
                        </div>
                        <p className="sub-title-text">{this.state.paragraph1}</p>
                    </div>
                </div>
                <div className="row main-content">
                    <p>{this.state.paragraph2}</p>
                </div>
            </div>
            </>
        );
    }
}

export default EventDetailsPage;