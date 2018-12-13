import Preloader from '../components/Preloader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuotsPopup from '../components/QuotsPopup';
import Header from '../components/Header';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link'

const List = (props) => (
    <div>
        <Header>
        </Header>

        <Navbar data={props.data} isHome={false} />

        <section className="dir-alp dir-pa-sp-top">
            <div className="container">
                <div className="row">
                    <div className="dir-alp-tit">
                        <h1>Property in Chicago</h1>
                        <ol className="breadcrumb">
                            <li><a href="#">Home</a> </li>
                            <li><a href="#">Listing</a> </li>
                            <li className="active">All Property</li>
                        </ol>
                    </div>
                </div>
                <div className="row">
                    <div className="dir-alp-con">
                        <div className="col-md-3 dir-alp-con-left">
                            <div className="dir-alp-con-left-1">
                                <h3>Nearby Listings({props.data.listNearby.length})</h3> </div>
                            <div className="dir-hom-pre dir-alp-left-ner-notb">
                                <ul>
                                    {props.data.listNearby.map((item, i) => {
                                        // Return the element. Also pass key     
                                        return (
                                            <li key={i}>
                                                <a href="listing-details.html">
                                                    <div className="list-left-near lln1"> <img src="../static/images/services/s1.jpeg" alt="" /> </div>
                                                    <div className="list-left-near lln2">
                                                        <h5>{item.title}</h5> <span>{item.subtitle}</span> </div>
                                                    <div className="list-left-near lln3"> <span>{item.star}</span> </div>
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="dir-alp-l3 dir-alp-l-com">
                                <h4>Sub Category Filter</h4>
                                <div className="dir-alp-l-com1 dir-alp-p3">
                                    <form action="#">
                                        <ul>
                                            {props.data.subCategory.map((item, i) => {
                                                // Return the element. Also pass key     
                                                return (
                                                    <li key={i}>
                                                        <input type="checkbox" id={"scf" + (i + 1)} />
                                                        <label htmlFor={"scf" + (i + 1)}>{item.title}</label>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </form> <a href="#!" className="list-view-more-btn">view more</a> </div>
                            </div>
                            <div className="dir-alp-l3 dir-alp-l-com">
                                <h4>Distance</h4>
                                <div className="dir-alp-l-com1 dir-alp-p3">
                                    <form>
                                        <ul>
                                            {props.data.distanceItem.map((item, i) => {
                                                // Return the element. Also pass key     
                                                return (
                                                    <li key={i}>
                                                        <input className="with-gap" name="group1" type="radio" id={"ldis" + (i + 1)} />
                                                        <label htmlFor={"ldis" + (i + 1)}>00 to 02km</label>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </form> <a href="#!" className="list-view-more-btn">view more</a> </div>
                            </div>
                            <div className="dir-alp-l3 dir-alp-l-com">
                                <h4>Ratings</h4>
                                <div className="dir-alp-l-com1 dir-alp-p3">
                                    <form>
                                        <ul>
                                            <li>
                                                <input type="checkbox" className="filled-in" id="lr1" />
                                                <label htmlFor="lr1"> <span className="list-rat-ch"> <span>5.0</span> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> </span>
                                                </label>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="filled-in" id="lr2" />
                                                <label htmlFor="lr2"> <span className="list-rat-ch"> <span>4.0</span> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> </span>
                                                </label>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="filled-in" id="lr3" />
                                                <label htmlFor="lr3"> <span className="list-rat-ch"> <span>3.0</span> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> </span>
                                                </label>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="filled-in" id="lr4" />
                                                <label htmlFor="lr4"> <span className="list-rat-ch"> <span>2.0</span> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> </span>
                                                </label>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="filled-in" id="lr5" />
                                                <label htmlFor="lr5"> <span className="list-rat-ch"> <span>1.0</span> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> </span>
                                                </label>
                                            </li>
                                        </ul>
                                    </form> <a href="#!" className="list-view-more-btn">view more</a> </div>
                            </div>
                        </div>
                        <div className="col-md-9 dir-alp-con-right">
                            <div className="dir-alp-con-right-1">
                                <div className="row">
                                    {props.data.listItem.map((item, i) => {
                                        // Return the element. Also pass key     
                                        return (
                                            <div className="home-list-pop list-spac" key={i}>
                                                <div className="col-md-3 list-ser-img"> <img src="../static/images/services/s10.jpeg" alt="" /> </div>
                                                <div className="col-md-9 home-list-pop-desc inn-list-pop-desc"> <a href="listing-details.html"><h3>{item.title}</h3></a>
                                                    <h4>{item.subtitle}</h4>
                                                    <p>{item.address}</p>
                                                    <div className="list-number">
                                                        <ul>
                                                            <li><img src="../static/images/icon/phone.png" alt="" />{item.telno}</li>
                                                            <li><img src="../static/images/icon/mail.png" alt="" /> {item.email}</li>
                                                        </ul>
                                                    </div> <span className="home-list-pop-rat">4.2</span>
                                                    <div className="list-enqu-btn">
                                                        <ul>
                                                            <li><a href="#!"><i className="fa fa-star-o" aria-hidden="true"></i> Write Review</a> </li>
                                                            <li><a href="#!"><i className="fa fa-commenting-o" aria-hidden="true"></i> Send SMS</a> </li>
                                                            <li><a href="#!"><i className="fa fa-phone" aria-hidden="true"></i> Call Now</a> </li>
                                                            <li><a href="#!" data-dismiss="modal" data-toggle="modal" data-target="#list-quo"><i className="fa fa-usd" aria-hidden="true"></i> Get Quotes</a> </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="row">
                                    <ul className="pagination list-pagenat">
                                        <li className="disabled"><a href="#!!"><i className="material-icons">chevron_left</i></a> </li>
                                        <li className="active"><a href="#!">1</a> </li>
                                        <li className="waves-effect"><a href="#!">2</a> </li>
                                        <li className="waves-effect"><a href="#!">3</a> </li>
                                        <li className="waves-effect"><a href="#!">4</a> </li>
                                        <li className="waves-effect"><a href="#!">5</a> </li>
                                        <li className="waves-effect"><a href="#!">6</a> </li>
                                        <li className="waves-effect"><a href="#!">7</a> </li>
                                        <li className="waves-effect"><a href="#!">8</a> </li>
                                        <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="web-app com-padd">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 web-app-img"> <img src="../static/images/mobile.png" alt="" /> </div>
                    <div className="col-md-6 web-app-con">
                        <h2>Looking htmlFor the Best Service Provider? <span>Get the App!</span></h2>
                        <ul>
                            <li><i className="fa fa-check" aria-hidden="true"></i> Find nearby listings</li>
                            <li><i className="fa fa-check" aria-hidden="true"></i> Easy service enquiry</li>
                            <li><i className="fa fa-check" aria-hidden="true"></i> Listing reviews and ratings</li>
                            <li><i className="fa fa-check" aria-hidden="true"></i> Manage your listing, enquiry and reviews</li>
                        </ul> <span>We'll send you a link, open it on your phone to download the app</span>
                        <form>
                            <ul>
                                <li>
                                    <input type="text" placeholder="+01" /> </li>
                                <li>
                                    <input type="number" placeholder="Enter mobile number" /> </li>
                                <li>
                                    <input type="submit" value="Get App Link" /> </li>
                            </ul>
                        </form>
                        <a href="#"><img src="../static/images/android.png" alt="" /> </a>
                        <a href="#"><img src="../static/images/apple.png" alt="" /> </a>
                    </div>
                </div>
            </div>
        </section>

        <Footer data={props.data} />

        <QuotsPopup />
        <script src="static/js/jquery.min.js"></script>
        <script src="static/js/materialize.min.js" type="text/javascript"></script>
        <script src="static/js/bootstrap.js" type="text/javascript"></script>
        <script src="static/js/custom.js"></script>
    </div>
);
List.getInitialProps = async ({ req }) => {
    const res = await fetch('https://ocr.sunucune.com/api/testAirbnb')
    const json = await res.json()

    //console.log(data);
    //console.log(json.data.listItem)
    return { data: json.data }
}


export default List;