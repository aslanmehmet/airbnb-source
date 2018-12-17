import Preloader from '../components/Preloader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuotsPopup from '../components/QuotsPopup';
import Header from '../components/Header';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link'

const ListDetail = (props) => (
    <div>
        <Header>

        </Header>
        <Navbar data={props.data} isHome={false} />

        <section>
            <div className="v3-list-ql">
                <div className="container">
                    <div className="row">
                        <div className="v3-list-ql-inn">
                            <ul>
                                <li className="active"><a href="#ld-abour"><i className="fa fa-user"></i> About</a>
                                </li>
                                <li><a href="#ld-ser"><i className="fa fa-cog"></i> Services</a>
                                </li>
                                <li><a href="#ld-gal"><i className="fa fa-photo"></i> Gallery</a>
                                </li>
                                <li><a href="#ld-roo"><i className="fa fa-ticket"></i> Room Booking</a>
                                </li>
                                <li><a href="#ld-vie"><i className="fa fa-street-view"></i> 360 View</a>
                                </li>
                                <li><a href="#ld-rew"><i className="fa fa-edit"></i> Write Review</a>
                                </li>
                                <li><a href="#ld-rer"><i className="fa fa-star-half-o"></i> User Review</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="pg-list-1">
            <div className="container">
                <div className="row">
                    <div className="pg-list-1-left"> <a href="#"><h3>{props.data.title}</h3></a>
                        <div className="list-rat-ch"> <span>5.0</span> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> </div>
                        <h4>Express Avenue Mall, Los Angeles</h4>
                        <p><b>Address:</b> 28800 Orchard Lake Road, Suite 180 Farmington Hills, Los Angeles, USA.</p>
                        <div className="list-number pag-p1-phone">
                            <ul>
                                <li><i className="fa fa-phone" aria-hidden="true"></i> +01 1245 2541</li>
                                <li><i className="fa fa-envelope" aria-hidden="true"></i> localdir@webdir.com</li>
                                <li><i className="fa fa-user" aria-hidden="true"></i> johny depp</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pg-list-1-right">
                        <div className="list-enqu-btn pg-list-1-right-p1">
                            <ul>
                                <li><a href="#ld-rew"><i className="fa fa-star-o" aria-hidden="true"></i> Write Review</a> </li>
                                <li><a href="#"><i className="fa fa-commenting-o" aria-hidden="true"></i> Send SMS</a> </li>
                                <li><a href="#"><i className="fa fa-phone" aria-hidden="true"></i> Call Now</a> </li>
                                <li><a href="#" data-dismiss="modal" data-toggle="modal" data-target="#list-quo"><i className="fa fa-usd" aria-hidden="true"></i> Get Quotes</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="list-pg-bg">
            <div className="container">
                <div className="row">
                    <div className="com-padd">
                        <div className="list-pg-lt list-page-com-p">
                            <div className="pglist-p1 pglist-bg pglist-p-com" id="ld-abour">
                                <div className="pglist-p-com-ti">
                                    <h3><span>About</span> Taj Luxury</h3> </div>
                                <div className="list-pg-inn-sp">
                                    <div className="share-btn">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-facebook fb1"></i> Share On Facebook</a> </li>
                                            <li><a href="#"><i className="fa fa-twitter tw1"></i> Share On Twitter</a> </li>
                                            <li><a href="#"><i className="fa fa-google-plus gp1"></i> Share On Google Plus</a> </li>
                                        </ul>
                                    </div>
                                    <p>Taj Luxury Hotels & Resorts presents award winning luxury hotels and resorts in India, Indonesia, Mauritius, Egypt and Saudi Arabia.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution </p>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                                </div>
                            </div>
                            <div className="pglist-p2 pglist-bg pglist-p-com" id="ld-ser">
                                <div className="pglist-p-com-ti">
                                    <h3><span>Services</span> Offered</h3> </div>
                                <div className="list-pg-inn-sp">
                                    <p>Taj Luxury Hotels & Resorts provide 24-hour Business Centre, Clinic, Internet Access Centre, Babysitting, Butler Service in Villas and Seaview Suite, House Doctor on Call, Airport Butler Service, Lobby Lounge </p>
                                    <div className="row pg-list-ser">
                                        <ul>
                                            <li className="col-md-4">
                                                <div className="pg-list-ser-p1"><img src="../static/images/services/ser1.jpg" alt="" /> </div>
                                                <div className="pg-list-ser-p2">
                                                    <h4>Restaurant and Bar</h4> </div>
                                            </li>
                                            <li className="col-md-4">
                                                <div className="pg-list-ser-p1"><img src="../static/images/services/ser2.jpg" alt="" /> </div>
                                                <div className="pg-list-ser-p2">
                                                    <h4>Room Booking</h4> </div>
                                            </li>
                                            <li className="col-md-4">
                                                <div className="pg-list-ser-p1"><img src="../static/images/services/ser3.jpg" alt="" /> </div>
                                                <div className="pg-list-ser-p2">
                                                    <h4>Corporate Events</h4> </div>
                                            </li>
                                            <li className="col-md-4">
                                                <div className="pg-list-ser-p1"><img src="../static/images/services/ser4.jpg" alt="" /> </div>
                                                <div className="pg-list-ser-p2">
                                                    <h4>Wedding Hall</h4> </div>
                                            </li>
                                            <li className="col-md-4">
                                                <div className="pg-list-ser-p1"><img src="../static/images/services/ser5.jpg" alt="" /> </div>
                                                <div className="pg-list-ser-p2">
                                                    <h4>Travel & Transport</h4> </div>
                                            </li>
                                            <li className="col-md-4">
                                                <div className="pg-list-ser-p1"><img src="../static/images/services/ser6.jpg" alt="" /> </div>
                                                <div className="pg-list-ser-p2">
                                                    <h4>All Amenities</h4> </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="pglist-p3 pglist-bg pglist-p-com" id="ld-gal">
                                <div className="pglist-p-com-ti">
                                    <h3><span>Photo</span> Gallery</h3> </div>
                                <div className="list-pg-inn-sp">
                                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                            <li data-target="#myCarousel" data-slide-to="1"></li>
                                            <li data-target="#myCarousel" data-slide-to="2"></li>
                                            <li data-target="#myCarousel" data-slide-to="3"></li>
                                        </ol>

                                        <div className="carousel-inner">
                                            <div className="item active"> <img src="images/slider/1.jpg" alt="Los Angeles" /> </div>
                                            <div className="item"> <img src="images/slider/2.jpg" alt="Chicago" /> </div>
                                            <div className="item"> <img src="images/slider/3.jpg" alt="New York" /> </div>
                                            <div className="item"> <img src="images/slider/4.jpg" alt="New York" /> </div>
                                        </div>
                                        <a className="left carousel-control" href="#myCarousel" data-slide="prev"> <i className="fa fa-angle-left list-slider-nav" aria-hidden="true"></i> </a>
                                        <a className="right carousel-control" href="#myCarousel" data-slide="next"> <i className="fa fa-angle-right list-slider-nav list-slider-nav-rp" aria-hidden="true"></i> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="pglist-p3 pglist-bg pglist-p-com" id="ld-roo">
                                <div className="pglist-p-com-ti">
                                    <h3><span>Room</span> Booking</h3> </div>
                                <div className="list-pg-inn-sp">
                                    <div className="home-list-pop list-spac list-spac-1 list-room-mar-o">
                                        <div className="col-md-3"> <img src="images/room/1.jpg" alt="" /> </div>
                                        <div className="col-md-9 home-list-pop-desc inn-list-pop-desc list-room-deta"> <a href="#!"><h3>Ultra Deluxe Rooms</h3></a>
                                            <div className="list-rat-ch list-room-rati"> <span>5.0</span> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> </div>
                                            <div className="list-room-type list-rom-ami">
                                                <ul>
                                                    <li>
                                                        <p><b>Amenities:</b> </p>
                                                    </li>
                                                    <li><img src="images/icon/a7.png" alt="" /> Wi-Fi</li>
                                                    <li><img src="images/icon/a4.png" alt="" /> Air Conditioner </li>
                                                    <li><img src="images/icon/a3.png" alt="" /> Swimming Pool</li>
                                                    <li><img src="images/icon/a2.png" alt="" /> Bar</li>
                                                    <li><img src="images/icon/a5.png" alt="" /> Bathroom</li>
                                                    <li><img src="images/icon/a6.png" alt="" /> TV</li>
                                                    <li><img src="images/icon/a9.png" alt="" /> Spa</li>
                                                    <li><img src="images/icon/a10.png" alt="" /> Music</li>
                                                    <li><img src="images/icon/a11.png" alt="" /> Parking</li>
                                                </ul>
                                            </div> <span className="home-list-pop-rat list-rom-pric">$940</span>
                                            <div className="list-enqu-btn">
                                                <ul>
                                                    <li><a href="#!"><i className="fa fa-usd" aria-hidden="true"></i> Get Quotes</a> </li>
                                                    <li><a href="#!"><i className="fa fa-commenting-o" aria-hidden="true"></i> Send SMS</a> </li>
                                                    <li><a href="#!"><i className="fa fa-phone" aria-hidden="true"></i> Call Now</a> </li>
                                                    <li><a href="#!"><i className="fa fa-usd" aria-hidden="true"></i> Book Now</a> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pglist-p3 pglist-bg pglist-p-com" id="ld-vie">
                                <div className="pglist-p-com-ti">
                                    <h3><span>360 </span> Degree View</h3> </div>
                                <div className="list-pg-inn-sp list-360">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1497026654798!6m8!1m7!1sIId_fF3cldIAAAQ7LuSTng!2m2!1d5.553927350344909!2d-0.2005543181775732!3f189.99!4f0!5f0.7820865974627469" allowFullScreen></iframe>
                                </div>
                            </div>

                            <div className="pglist-p3 pglist-bg pglist-p-com" id="ld-rew">
                                <div className="pglist-p-com-ti">
                                    <h3><span>Write Your</span> Reviews</h3> </div>
                                <div className="list-pg-inn-sp">
                                    <div className="list-pg-write-rev">
                                        <form className="col">
                                            <p>Writing great reviews may help others discover the places that are just apt htmlFor them. Here are a few tips to write a good review:</p>
                                            <div className="row">
                                                <div className="col s12">
                                                    <fieldset className="rating">
                                                        <input type="radio" id="star5" name="rating" value="5" />
                                                        <label className="full" htmlFor="star5" title="Awesome - 5 stars"></label>
                                                        <input type="radio" id="star4half" name="rating" value="4 and a half" />
                                                        <label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
                                                        <input type="radio" id="star4" name="rating" value="4" />
                                                        <label className="full" htmlFor="star4" title="Pretty good - 4 stars"></label>
                                                        <input type="radio" id="star3half" name="rating" value="3 and a half" />
                                                        <label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
                                                        <input type="radio" id="star3" name="rating" value="3" />
                                                        <label className="full" htmlFor="star3" title="Meh - 3 stars"></label>
                                                        <input type="radio" id="star2half" name="rating" value="2 and a half" />
                                                        <label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
                                                        <input type="radio" id="star2" name="rating" value="2" />
                                                        <label className="full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
                                                        <input type="radio" id="star1half" name="rating" value="1 and a half" />
                                                        <label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
                                                        <input type="radio" id="star1" name="rating" value="1" />
                                                        <label className="full" htmlFor="star1" title="Sucks big time - 1 star"></label>
                                                        <input type="radio" id="starhalf" name="rating" value="half" />
                                                        <label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
                                                    </fieldset>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <input id="re_name" type="text" className="validate" />
                                                    <label htmlFor="re_name">Full Name</label>
                                                </div>
                                                <div className="input-field col s6">
                                                    <input id="re_mob" type="number" className="validate" />
                                                    <label htmlFor="re_mob">Mobile</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <input id="re_mail" type="email" className="validate" />
                                                    <label htmlFor="re_mail">Email id</label>
                                                </div>
                                                <div className="input-field col s6">
                                                    <input id="re_city" type="text" className="validate" />
                                                    <label htmlFor="re_city">City</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <textarea id="re_msg" className="materialize-textarea"></textarea>
                                                    <label htmlFor="re_msg">Write review</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12"> <a className="waves-effect waves-light btn-large full-btn" href="#!">Submit Review</a> </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="pglist-p3 pglist-bg pglist-p-com" id="ld-rer">
                                <div className="pglist-p-com-ti">
                                    <h3><span>User</span> Reviews</h3> </div>
                                <div className="list-pg-inn-sp">
                                    <div className="lp-ur-all">
                                        <div className="lp-ur-all-left">
                                            <div className="lp-ur-all-left-1">
                                                <div className="lp-ur-all-left-11">Excellent</div>
                                                <div className="lp-ur-all-left-12">
                                                    <div className="lp-ur-all-left-13"></div>
                                                </div>
                                            </div>
                                            <div className="lp-ur-all-left-1">
                                                <div className="lp-ur-all-left-11">Good</div>
                                                <div className="lp-ur-all-left-12">
                                                    <div className="lp-ur-all-left-13 lp-ur-all-left-Good"></div>
                                                </div>
                                            </div>
                                            <div className="lp-ur-all-left-1">
                                                <div className="lp-ur-all-left-11">Satisfactory</div>
                                                <div className="lp-ur-all-left-12">
                                                    <div className="lp-ur-all-left-13 lp-ur-all-left-satis"></div>
                                                </div>
                                            </div>
                                            <div className="lp-ur-all-left-1">
                                                <div className="lp-ur-all-left-11">Below Average</div>
                                                <div className="lp-ur-all-left-12">
                                                    <div className="lp-ur-all-left-13 lp-ur-all-left-below"></div>
                                                </div>
                                            </div>
                                            <div className="lp-ur-all-left-1">
                                                <div className="lp-ur-all-left-11">Below Average</div>
                                                <div className="lp-ur-all-left-12">
                                                    <div className="lp-ur-all-left-13 lp-ur-all-left-poor"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lp-ur-all-right">
                                            <h5>Overall Ratings</h5>
                                            <p><span>4.5 <i className="fa fa-star" aria-hidden="true"></i></span> based on 242 reviews</p>
                                        </div>
                                    </div>
                                    <div className="lp-ur-all-rat">
                                        <h5>Reviews</h5>
                                        <ul>
                                            <li>
                                                <div className="lr-user-wr-img"> <img src="images/users/2.png" alt="" /> </div>
                                                <div className="lr-user-wr-con">
                                                    <h6>Jacob Michael <span>4.5 <i className="fa fa-star" aria-hidden="true"></i></span></h6> <span className="lr-revi-date">19th January, 2017</span>
                                                    <p>Good service... nice and clean rooms... very good spread of buffet and friendly staffs. Located in heart of city and easy to reach any places in a short distance. </p>
                                                    <ul>
                                                        <li><a href="#!"><span>Like</span><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><span>Dis-Like</span><i className="fa fa-thumbs-o-down" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><span>Report</span> <i className="fa fa-flag-o" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><span>Comments</span> <i className="fa fa-commenting-o" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><span>Share Now</span>  <i className="fa fa-facebook" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-google-plus" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-twitter" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-linkedin" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-youtube" aria-hidden="true"></i></a> </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="lr-user-wr-img"> <img src="images/users/3.png" alt="" /> </div>
                                                <div className="lr-user-wr-con">
                                                    <h6>Gabriel Elijah <span>5.0 <i className="fa fa-star" aria-hidden="true"></i></span></h6> <span className="lr-revi-date">21th July, 2016</span>
                                                    <p>The hotel is clean, convenient and good value htmlFor money. Staff are courteous and helpful. However, they need more training to be efficient.</p>
                                                    <ul>
                                                        <li><a href="#!"><span>Like</span><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><span>Dis-Like</span><i className="fa fa-thumbs-o-down" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><span>Report</span> <i className="fa fa-flag-o" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><span>Comments</span> <i className="fa fa-commenting-o" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><span>Share Now</span>  <i className="fa fa-facebook" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-google-plus" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-twitter" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-linkedin" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-youtube" aria-hidden="true"></i></a> </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="lr-user-wr-img"> <img src="images/users/4.png" alt="" /> </div>
                                                <div className="lr-user-wr-con">
                                                    <h6>Luke Mason <span>4.2 <i className="fa fa-star" aria-hidden="true"></i></span></h6> <span className="lr-revi-date">21th March, 2018</span>
                                                    <p>Too much good experience with hospitality, cleanliness, facility and privacy and good value htmlFor money... To keep mind relaxing... Keep it up... </p>
                                                    <ul>
                                                        <li><a href="#!"><span>Like</span><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><span>Dis-Like</span><i className="fa fa-thumbs-o-down" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><span>Report</span> <i className="fa fa-flag-o" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><span>Comments</span> <i className="fa fa-commenting-o" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><span>Share Now</span>  <i className="fa fa-facebook" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-google-plus" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-twitter" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-linkedin" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-youtube" aria-hidden="true"></i></a> </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="lr-user-wr-img"> <img src="images/users/5.png" alt="" /> </div>
                                                <div className="lr-user-wr-con">
                                                    <h6>Kevin Jack <span>3.6 <i className="fa fa-star" aria-hidden="true"></i></span></h6> <span className="lr-revi-date">21th Aug, 2018</span>
                                                    <p>I am deaf. Bar is closed and Restaurant is okay ... It should be more decoration as beautiful. I enjoyed swimming top floor and weather is good</p>
                                                    <ul>
                                                        <li><a href="#!"><span>Like</span><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><span>Dis-Like</span><i className="fa fa-thumbs-o-down" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><span>Report</span> <i className="fa fa-flag-o" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><span>Comments</span> <i className="fa fa-commenting-o" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><span>Share Now</span>  <i className="fa fa-facebook" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-google-plus" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-twitter" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-linkedin" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-youtube" aria-hidden="true"></i></a> </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="lr-user-wr-img"> <img src="images/users/6.png" alt="" /> </div>
                                                <div className="lr-user-wr-con">
                                                    <h6>Nicholas Tyler <span>4.4 <i className="fa fa-star" aria-hidden="true"></i></span></h6> <span className="lr-revi-date">21th Aug, 2018</span>
                                                    <p>Overall, it was good experience. Rooms were spacious and they were kept very clean and tidy. Room service was good.</p>
                                                    <ul>
                                                        <li><a href="#!"><span>Like</span><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><span>Dis-Like</span><i className="fa fa-thumbs-o-down" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><span>Report</span> <i className="fa fa-flag-o" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><span>Comments</span> <i className="fa fa-commenting-o" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><span>Share Now</span>  <i className="fa fa-facebook" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-google-plus" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-twitter" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-linkedin" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-youtube" aria-hidden="true"></i></a> </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="list-pg-rt">
                            <div className="pglist-p3 pglist-bg pglist-p-com">
                                <div className="pglist-p-com-ti pglist-p-com-ti-right">
                                    <h3><span>Listing</span> Guarantee</h3> </div>
                                <div className="list-pg-inn-sp">
                                    <div className="list-pg-guar">
                                        <ul>
                                            <li>
                                                <div className="list-pg-guar-img"> <img src="../static/images/icon/g1.png" alt="" /> </div>
                                                <h4>Service Guarantee</h4>
                                                <p>Upto 6 month of service</p>
                                            </li>
                                            <li>
                                                <div className="list-pg-guar-img"> <img src="../static/images/icon/g2.png" alt="" /> </div>
                                                <h4>Professionals</h4>
                                                <p>100% certified professionals</p>
                                            </li>
                                            <li>
                                                <div className="list-pg-guar-img"> <img src="../static/images/icon/g3.png" alt="" /> </div>
                                                <h4>Insurance</h4>
                                                <p>Upto $5,000 against damages</p>
                                            </li>
                                        </ul> <a className="waves-effect waves-light btn-large full-btn list-pg-btn" href="#!" data-dismiss="modal" data-toggle="modal" data-target="#list-quo">Quick Enquiry</a> </div>
                                </div>
                            </div>
                            <div className="pglist-p3 pglist-bg pglist-p-com">
                                <div className="pg-list-user-pro"> <img src="../static/images/users/8.png" alt="" /> </div>
                                <div className="list-pg-inn-sp">
                                    <div className="list-pg-upro">
                                        <h5>Kevin Jack</h5>
                                        <p>Member since July 2017</p> <a className="waves-effect waves-light btn-large full-btn list-pg-btn" href="#!">Contact User</a> </div>
                                </div>
                            </div>
                            <div className="pglist-p3 pglist-bg pglist-p-com">
                                <div className="pglist-p-com-ti pglist-p-com-ti-right">
                                    <h3><span>Our</span> Location</h3> </div>
                                <div className="list-pg-inn-sp">
                                    <div className="list-pg-map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6290413.804893654!2d-93.99620524741552!3d39.66116578737809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b2d386f6e2619%3A0x7f15825064115956!2sIllinois%2C+USA!5e0!3m2!1sen!2sin!4v1469954001005" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="pglist-p3 pglist-bg pglist-p-com">
                                <div className="pglist-p-com-ti pglist-p-com-ti-right">
                                    <h3><span>Other</span> Informations</h3> </div>
                                <div className="list-pg-inn-sp">
                                    <div className="list-pg-oth-info">
                                        <ul>
                                            <li>Today Shop <span className="green-bg">open</span> </li>
                                            <li>Experience <span>16</span> </li>
                                            <li>Parking <span>yes</span> </li>
                                            <li>Smoking <span>yes</span> </li>
                                            <li>Pool Table <span>yes</span> </li>
                                            <li>Take Out <span>yes</span> </li>
                                            <li>Good htmlFor Groups <span>yes</span> </li>
                                            <li>Accepts All Cards <span>yes</span> </li>
                                            <li>Open Time <span>09:00am</span> </li>
                                            <li>Close Time <span>10:00pm</span> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="list-mig-like">
                                <div className="list-ri-spec-tit">
                                    <h3><span>You might</span> like this</h3> </div>
                                <a href="#!">
                                    <div className="list-mig-like-com">
                                        <div className="list-mig-lc-img"> <img src="../static/images/listing/1.jpg" alt="" /> <span className="home-list-pop-rat list-mi-pr">$720</span> </div>
                                        <div className="list-mig-lc-con">
                                            <div className="list-rat-ch list-room-rati"> <span>4.0</span> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> </div>
                                            <h5>Holiday Inn Express</h5>
                                            <p>Illinois City,</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#!">
                                    <div className="list-mig-like-com">
                                        <div className="list-mig-lc-img"> <img src="../static/images/listing/2.jpg" alt="" /> <span className="home-list-pop-rat list-mi-pr">$420</span> </div>
                                        <div className="list-mig-lc-con">
                                            <div className="list-rat-ch list-room-rati"> <span>3.0</span> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> </div>
                                            <h5>InterContinental</h5>
                                            <p>Illinois City,</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#!">
                                    <div className="list-mig-like-com">
                                        <div className="list-mig-lc-img"> <img src="../static/images/listing/3.jpg" alt="" /> <span className="home-list-pop-rat list-mi-pr">$380</span> </div>
                                        <div className="list-mig-lc-con">
                                            <div className="list-rat-ch list-room-rati"> <span>5.0</span> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> </div>
                                            <h5>Staybridger Suites</h5>
                                            <p>Illinois City,</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="web-app com-padd">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 web-app-img"> <img src="images/mobile.png" alt="" /> </div>
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
                        <a href="#"><img src="images/android.png" alt="" /> </a>
                        <a href="#"><img src="images/apple.png" alt="" /> </a>
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

ListDetail.getInitialProps = async ({ req }) => {
    const res = await fetch('http://localhost:3001/api/testAirbnb')
    const json = await res.json()
    let otelDetail = ""
/*
    if(req.params.title === 'Andru Modular Kitchen'){
        otelDetail = json.data.otel1Detail;
    }else{
        otelDetail= json.data.otel2Detail;
    }
     */
    return { data: otelDetail}
   
}

export default ListDetail;