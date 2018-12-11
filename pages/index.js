import Fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import json from '../data.json';
import Preloader from '../components/Preloader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuotsPopup from '../components/QuotsPopup';

const Index = (props) => (
  <div>
    <Head>
      <title>World Best Local Directory Website template</title>
      {/*<!-- META TAGS -->*/}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/*<!-- FAV ICON(BROWSER TAB ICON) -->*/}
      <link rel="shortcut icon" href="static/images/fav.ico" type="image/x-icon" />
      {/*<!-- <!-- GOOGLE FONT --> -->*/}
      <link href="https://fonts.googleapis.com/css?family=Poppins%7CQuicksand:500,700" rel="stylesheet" />
      {/*<!-- <!-- FONTAWESOME ICONS --> -->*/}
      <link rel="stylesheet" href="static/css/font-awesome.min.css" />
      {/*<!-- <!-- ALL CSS FILES --> -->*/}
      <link href="static/css/materialize.css" rel="stylesheet" />
      <link href="static/css/style.css" rel="stylesheet" />
      <link href="static/css/bootstrap.css" rel="stylesheet" type="text/css" />
      {/*<!-- <!-- RESPONSIVE.CSS ONLY FOR MOBILE AND TABLET VIEWS --> -->*/}
      <link href="static/css/responsive.css" rel="stylesheet" />
      {/*
              <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
              <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
              <!--[if lt IE 9]>
              
              <script src="static/js/html5shiv.js"></script>
              <script src="static/js/respond.min.js"></script>*/}
      {/*<![endif]-->*/}

    </Head>

    <Preloader />

    <section className="dir3-home-head">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="dir-ho-tl">
              <ul>
                <li>
                  <a href="index-1.html"><img src="static/images/logo.png" alt="" /> </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="dir-ho-tr">
              <ul>
                <li><a href="register.html">{props.translate.register}</a> </li>
                <li><a href="login.html">{props.translate.signin}</a> </li>
                <li><a href="db-listing-add.html"><i className="fa fa-plus" aria-hidden="true"></i> {props.translate.addlisting}</a> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container dir-ho-t-sp">
        <div className="row">
          <div className="dir-hr1 dir-cat-search">
            <div className="dir-ho-t-tit">
              <h1>{props.translate.connectwith}<br />{props.translate.serviceexpert}</h1>
              <p>{props.translate.findb2b}<br /> {props.translate.userrating}</p>
            </div>
            <form className="cate-search-form">
              <div className="input-field">
                <input type="text" id="select-search" className="autocomplete" />
                <label htmlFor="select-search">{props.translate.searchyourserv}</label>
              </div>
              <div className="input-field">
                <input type="text" id="select-city" className="autocomplete" />
                <label htmlFor="select-city">{props.translate.entercity}</label>
              </div>
              <div className="input-field">
                <input type="text" id="select-category" className="autocomplete auto-category" />
                <label htmlFor="select-category">{props.translate.selectcategory}</label>
              </div>
              <div className="input-field">
                {/*`<!--change data -->` */}

                <i className="waves-effect waves-light tourz-sear-btn waves-input-wrapper">
                  <input type="submit" value="search" className="waves-button-input" />
                </i>
              </div>
            </form>
          </div>
        </div>
      </div>

    </section>

    <Navbar data={props.translate}/>

    <section>
      <div className="land-full land-packages">
        <div className="container">
          <div className="com-title">
            <h2>{props.translate.a61} <span>{props.translate.a62}</span></h2>
            <p>{props.translate.a63}</p>
          </div>
          <div className="land-pack">
            <ul>
              <li>
                <div className="land-pack-grid">
                  <div className="land-pack-grid-img">
                    <img src="static/images/services/20.jpeg" alt="" />
                  </div>
                  <div className="land-pack-grid-text">
                    <h4>{props.translate.a64}</h4>
                    <a href="service-booking.html" className="land-pack-grid-btn">{props.translate.a65}</a></div>
                </div>
              </li>
              <li>
                <div className="land-pack-grid">
                  <div className="land-pack-grid-img">
                    <img src="static/images/services/p1.jpg" alt="" />
                  </div>
                  <div className="land-pack-grid-text">
                    <h4>{props.translate.a655}</h4>
                    <a href="service-booking.html" className="land-pack-grid-btn land-pack-grid-btn-blu">{props.translate.a66}</a></div>
                </div>
              </li>
              <li>
                <div className="land-pack-grid">
                  <div className="land-pack-grid-img">
                    <img src="static/images/services/10.jpeg" alt="" />
                  </div>
                  <div className="land-pack-grid-text">
                    <h4>{props.translate.a67}</h4>
                    <a href="service-booking.html" className="land-pack-grid-btn land-pack-grid-btn-yel">{props.translate.a68}</a></div>
                </div>
              </li>
              <li>
                <div className="land-pack-grid">
                  <div className="land-pack-grid-img">
                    <img src="static/images/services/ser5.jpg" alt="" />
                  </div>
                  <div className="land-pack-grid-text">
                    <h4>{props.translate.a69}</h4>
                    <a href="service-booking.html" className="land-pack-grid-btn land-pack-grid-btn-red">{props.translate.a70}</a></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="com-padd com-padd-redu-bot1 pad-bot-red-40">
      <div className="container">
        <div className="row">
          <div className="com-title">
            <h2>{props.translate.a71} <span>{props.translate.a72}</span></h2>
            <p>{props.translate.a73}</p>
          </div>
          <div className="dir-hli">
            <ul>

              <li className="col-md-3 col-sm-6">
                <a href="list.html">
                  <div className="dir-hli-5">
                    <div className="dir-hli-1">
                      <div className="dir-hli-3"><img src="static/images/hci1.png" alt="" /> </div>
                      <div className="dir-hli-4"> </div> <img src="static/images/services/15.jpg" alt="" /> </div>
                    <div className="dir-hli-2">
                      <h4>{props.translate.a74} <span className="dir-ho-cat">{props.translate.a75}</span></h4> </div>
                  </div>
                </a>
              </li>

              <li className="col-md-3 col-sm-6">
                <a href="list-grid.html">
                  <div className="dir-hli-5">
                    <div className="dir-hli-1">
                      <div className="dir-hli-3"><img src="static/images/hci1.png" alt="" /> </div>
                      <div className="dir-hli-4"> </div> <img src="static/images/services/13.jpg" alt="" /> </div>
                    <div className="dir-hli-2">
                      <h4>{props.translate.a76} <span className="dir-ho-cat">{props.translate.a77}</span></h4> </div>
                  </div>
                </a>
              </li>

              <li className="col-md-3 col-sm-6">
                <a href="list.html">
                  <div className="dir-hli-5">
                    <div className="dir-hli-1">
                      <div className="dir-hli-3"><img src="static/images/hci1.png" alt="" /> </div>
                      <div className="dir-hli-4"> </div> <img src="static/images/services/9.jpg" alt="" /> </div>
                    <div className="dir-hli-2">
                      <h4>{props.translate.a78} <span className="dir-ho-cat">{props.translate.a79}</span></h4> </div>
                  </div>
                </a>
              </li>

              <li className="col-md-3 col-sm-6">
                <a href="list-grid.html">
                  <div className="dir-hli-5">
                    <div className="dir-hli-1">
                      <div className="dir-hli-3"><img src="static/images/hci1.png" alt="" /> </div>
                      <div className="dir-hli-4"> </div> <img src="static/images/services/12.jpeg" alt="" /> </div>
                    <div className="dir-hli-2">
                      <h4>{props.translate.a80} <span className="dir-ho-cat">{props.translate.a81}</span></h4> </div>
                  </div>
                </a>
              </li>

              <li className="col-md-3 col-sm-6">
                <a href="list.html">
                  <div className="dir-hli-5">
                    <div className="dir-hli-1">
                      <div className="dir-hli-3"><img src="static/images/hci1.png" alt="" /> </div>
                      <div className="dir-hli-4"> </div> <img src="static/images/services/2.jpeg" alt="" /> </div>
                    <div className="dir-hli-2">
                      <h4>{props.translate.a82} <span className="dir-ho-cat">{props.translate.a822}</span></h4> </div>
                  </div>
                </a>
              </li>

              <li className="col-md-3 col-sm-6">
                <a href="list-grid.html">
                  <div className="dir-hli-5">
                    <div className="dir-hli-1">
                      <div className="dir-hli-3"><img src="static/images/hci1.png" alt="" /> </div>
                      <div className="dir-hli-4"> </div> <img src="static/images/services/6.jpeg" alt="" /> </div>
                    <div className="dir-hli-2">
                      <h4>{props.translate.a83} <span className="dir-ho-cat">{props.translate.a84}</span></h4> </div>
                  </div>
                </a>
              </li>

              <li className="col-md-3 col-sm-6">
                <a href="list.html">
                  <div className="dir-hli-5">
                    <div className="dir-hli-1">
                      <div className="dir-hli-3"><img src="static/images/hci1.png" alt="" /> </div>
                      <div className="dir-hli-4"> </div> <img src="static/images/services/16.jpeg" alt="" /> </div>
                    <div className="dir-hli-2">
                      <h4>{props.translate.a85} <span className="dir-ho-cat">{props.translate.a86}</span></h4> </div>
                  </div>
                </a>
              </li>

              <li className="col-md-3 col-sm-6">
                <a href="list-grid.html">
                  <div className="dir-hli-5">
                    <div className="dir-hli-1">
                      <div className="dir-hli-3"><img src="static/images/hci1.png" alt="" /> </div>
                      <div className="dir-hli-4"> </div> <img src="static/images/services/8.jpeg" alt="" /> </div>
                    <div className="dir-hli-2">
                      <h4>{props.translate.a87} <span className="dir-ho-cat">{props.translate.a88}</span></h4> </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="com-padd com-padd-redu-top">
      <div className="container">
        <div className="row">
          <div className="com-title">
            <h2>{props.translate.a89} <span>{props.translate.a90}</span></h2>
            <p>{props.translate.a91}</p>
          </div>
          <div className="col-md-6">
            <a href="list-lead.html">
              <div className="list-mig-like-com">
                <div className="list-mig-lc-img"> <img src="static/images/listing/home.jpg" alt="" /> </div>
                <div className="list-mig-lc-con">
                  <div className="list-rat-ch list-room-rati"> <span>{props.translate.a92}</span> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> </div>
                  <h5>{props.translate.a93}</h5>
                  <p>{props.translate.a94}</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="list-lead.html">
              <div className="list-mig-like-com">
                <div className="list-mig-lc-img"> <img src="static/images/listing/home2.jpg" alt="" /> </div>
                <div className="list-mig-lc-con list-mig-lc-con2">
                  <h5>{props.translate.a95}</h5>
                  <p>{props.translate.a96}</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="list-lead.html">
              <div className="list-mig-like-com">
                <div className="list-mig-lc-img"> <img src="static/images/listing/home3.jpg" alt="" /> </div>
                <div className="list-mig-lc-con list-mig-lc-con2">
                  <h5>{props.translate.a97}</h5>
                  <p>{props.translate.a98}</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="list-lead.html">
              <div className="list-mig-like-com">
                <div className="list-mig-lc-img"> <img src="static/images/listing/home4.jpg" alt="" /> </div>
                <div className="list-mig-lc-con list-mig-lc-con2">
                  <h5>{props.translate.a99}</h5>
                  <p>{props.translate.a100}</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="list-lead.html">
              <div className="list-mig-like-com">
                <div className="list-mig-lc-img"> <img src="static/images/listing/home1.jpg" alt="" /> </div>
                <div className="list-mig-lc-con list-mig-lc-con2">
                  <h5>{props.translate.a101}</h5>
                  <p>{props.translate.a102}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="com-padd quic-book-ser-full">
      <div className="quic-book-ser">
        <div className="quic-book-ser-inn">
          <div className="quic-book-ser-left">
            <div className="land-com-form">
              <h2>{props.translate.a103}</h2>
              <form>
                <ul>
                  <li>
                    <div className="row">
                      <div className="input-field col s12">
                        <input type="text" className="validate" required />
                        <label>{props.translate.a104}</label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="input-field col s12">
                        <input type="number" className="validate" required />
                        <label>{props.translate.a105}</label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="input-field col s12">
                        <input type="email" className="validate" required />
                        <label>{props.translate.a106}</label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="input-field col s12">
                        <input type="text" id="select-category1" className="autocomplete auto-category" />
                        <label htmlFor="select-category1">{props.translate.a107}</label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="input-field col s12">
                        <input type="submit" value="Send Request" />
                      </div>
                    </div>
                  </li>
                  <li><p>{props.translate.a108} <a href="#">{props.translate.a109}</a></p></li>
                </ul>
              </form>
            </div>
          </div>
          <div className="quic-book-ser-right">
            <div className="hom-cre-acc-left">
              <h3>{props.translate.a110} <span>{props.translate.a111}</span></h3>
              <p>{props.translate.b1}</p>
              <ul>
                <li> <img src="static/images/icon/7.png" alt="" />
                  <div>
                    <h5>{props.translate.b2}</h5>
                    <p>{props.translate.b3}</p>
                  </div>
                </li>
                <li> <img src="static/images/icon/5.png" alt="" />
                  <div>
                    <h5>{props.translate.b4}</h5>
                    <p>{props.translate.b5}</p>
                  </div>
                </li>
                <li> <img src="static/images/icon/6.png" alt="" />
                  <div>
                    <h5>{props.translate.b6}</h5>
                    <p>{props.translate.b7}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section className="com-padd com-padd-redu-bot">
      <div className="container dir-hom-pre-tit">
        <div className="row">
          <div className="com-title">
            <h2>{props.translate.b8} <span>{props.translate.b9}</span></h2>
            <p>{props.translate.b10}</p>
          </div>
          <div className="col-md-6">
            <div>
              <div className="home-list-pop">
                <div className="col-md-3"> <img src="static/images/services/tr1.jpg" alt="" /> </div>
                <div className="col-md-9 home-list-pop-desc"> <a href="automobile-listing-details.html"><h3>{props.translate.b11}</h3></a>
                  <h4>{props.translate.b12}</h4>
                  <p>{props.translate.b13}</p> <span className="home-list-pop-rat">4.2</span>
                  <div className="hom-list-share">
                    <ul>
                      <li><a href="#!"><i className="fa fa-bar-chart" aria-hidden="true"></i> 52</a> </li>
                      <li><a href="#!"><i className="fa fa-heart-o" aria-hidden="true"></i> 32</a> </li>
                      <li><a href="#!"><i className="fa fa-eye" aria-hidden="true"></i> 420</a> </li>
                      <li><a href="#!"><i className="fa fa-share-alt" aria-hidden="true"></i> 570</a> </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="home-list-pop">

                <div className="col-md-3"> <img src="static/images/services/tr2.jpg" alt="" /> </div>

                <div className="col-md-9 home-list-pop-desc"> <a href="property-listing-details.html"><h3>{props.translate.b14}</h3></a>
                  <h4>{props.translate.b15}</h4>
                  <p>{props.translate.b16}</p> <span className="home-list-pop-rat">4.2</span>
                  <div className="hom-list-share">
                    <ul>
                      <li><a href="#!"><i className="fa fa-bar-chart" aria-hidden="true"></i> 52</a> </li>
                      <li><a href="#!"><i className="fa fa-heart-o" aria-hidden="true"></i> 32</a> </li>
                      <li><a href="#!"><i className="fa fa-eye" aria-hidden="true"></i> 420</a> </li>
                      <li><a href="#!"><i className="fa fa-share-alt" aria-hidden="true"></i> 570</a> </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="home-list-pop">

                <div className="col-md-3"> <img src="static/images/services/tr3.jpg" alt="" /> </div>

                <div className="col-md-9 home-list-pop-desc"> <a href="shop-listing-details.html"><h3>{props.translate.b17}</h3></a>
                  <h4>{props.translate.b18}</h4>
                  <p>{props.translate.b19}</p> <span className="home-list-pop-rat">4.2</span>
                  <div className="hom-list-share">
                    <ul>
                      <li><a href="#!"><i className="fa fa-bar-chart" aria-hidden="true"></i> 52</a> </li>
                      <li><a href="#!"><i className="fa fa-heart-o" aria-hidden="true"></i> 32</a> </li>
                      <li><a href="#!"><i className="fa fa-eye" aria-hidden="true"></i> 420</a> </li>
                      <li><a href="#!"><i className="fa fa-share-alt" aria-hidden="true"></i> 570</a> </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="home-list-pop">

                <div className="col-md-3"> <img src="static/images/services/s4.jpeg" alt="" /> </div>

                <div className="col-md-9 home-list-pop-desc"> <a href="list-lead.html"><h3>{props.translate.b20}</h3></a>
                  <h4>{props.translate.b21}</h4>
                  <p>{props.translate.b22}</p> <span className="home-list-pop-rat">4.2</span>
                  <div className="hom-list-share">
                    <ul>
                      <li><a href="#!"><i className="fa fa-bar-chart" aria-hidden="true"></i> 52</a> </li>
                      <li><a href="#!"><i className="fa fa-heart-o" aria-hidden="true"></i> 32</a> </li>
                      <li><a href="#!"><i className="fa fa-eye" aria-hidden="true"></i> 420</a> </li>
                      <li><a href="#!"><i className="fa fa-share-alt" aria-hidden="true"></i> 570</a> </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div>

              <div className="home-list-pop">

                <div className="col-md-3"> <img src="static/images/services/s5.jpeg" alt="" /> </div>

                <div className="col-md-9 home-list-pop-desc"> <a href="list-lead.html"><h3>{props.translate.b23}</h3></a>
                  <h4>{props.translate.b24}</h4>
                  <p>{props.translate.b25}</p> <span className="home-list-pop-rat">4.2</span>
                  <div className="hom-list-share">
                    <ul>
                      <li><a href="#!"><i className="fa fa-bar-chart" aria-hidden="true"></i> 52</a> </li>
                      <li><a href="#!"><i className="fa fa-heart-o" aria-hidden="true"></i> 32</a> </li>
                      <li><a href="#!"><i className="fa fa-eye" aria-hidden="true"></i> 420</a> </li>
                      <li><a href="#!"><i className="fa fa-share-alt" aria-hidden="true"></i> 570</a> </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="home-list-pop">

                <div className="col-md-3"> <img src="static/images/services/s6.jpeg" alt="" /> </div>

                <div className="col-md-9 home-list-pop-desc"> <a href="list-lead.html"><h3>{props.translate.b26}</h3></a>
                  <h4>{props.translate.b27}</h4>
                  <p>{props.translate.b28}</p> <span className="home-list-pop-rat">4.2</span>
                  <div className="hom-list-share">
                    <ul>
                      <li><a href="#!"><i className="fa fa-bar-chart" aria-hidden="true"></i> 52</a> </li>
                      <li><a href="#!"><i className="fa fa-heart-o" aria-hidden="true"></i> 32</a> </li>
                      <li><a href="#!"><i className="fa fa-eye" aria-hidden="true"></i> 420</a> </li>
                      <li><a href="#!"><i className="fa fa-share-alt" aria-hidden="true"></i> 570</a> </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="home-list-pop">

                <div className="col-md-3"> <img src="static/images/services/s7.jpeg" alt="" /> </div>
                <div className="col-md-9 home-list-pop-desc"> <a href="list-lead.html"><h3>{props.translate.b29}</h3></a>
                  <h4>{props.translate.b30}</h4>
                  <p>{props.translate.b31}</p> <span className="home-list-pop-rat">4.2</span>
                  <div className="hom-list-share">
                    <ul>
                      <li><a href="#!"><i className="fa fa-bar-chart" aria-hidden="true"></i> 52</a> </li>
                      <li><a href="#!"><i className="fa fa-heart-o" aria-hidden="true"></i> 32</a> </li>
                      <li><a href="#!"><i className="fa fa-eye" aria-hidden="true"></i> 420</a> </li>
                      <li><a href="#!"><i className="fa fa-share-alt" aria-hidden="true"></i> 570</a> </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="home-list-pop mar-bot-red-0">

                <div className="col-md-3"> <img src="static/images/services/s8.jpg" alt="" /> </div>

                <div className="col-md-9 home-list-pop-desc"> <a href="list-lead.html"><h3>{props.translate.b32}</h3></a>
                  <h4>{props.translate.b33}</h4>
                  <p>{props.translate.b34}</p> <span className="home-list-pop-rat">4.2</span>
                  <div className="hom-list-share">
                    <ul>
                      <li><a href="#!"><i className="fa fa-bar-chart" aria-hidden="true"></i> 52</a> </li>
                      <li><a href="#!"><i className="fa fa-heart-o" aria-hidden="true"></i> 32</a> </li>
                      <li><a href="#!"><i className="fa fa-eye" aria-hidden="true"></i> 420</a> </li>
                      <li><a href="#!"><i className="fa fa-share-alt" aria-hidden="true"></i> 570</a> </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="com-padd sec-bg-white">
      <div className="container">
        <div className="row">
          <div className="com-title">
            <h2>{props.translate.b35} <span>{props.translate.b36}</span></h2>
            <p>{props.translate.b37}</p>
          </div>
          <div className="col-md-6">
            <div className="hom-cre-acc-left">
              <h3>{props.translate.b38} <span>{props.translate.b39}</span></h3>
              <p>{props.translate.b40}</p>
              <ul>
                <li> <img src="static/images/icon/7.png" alt="" />
                  <div>
                    <h5>{props.translate.b41}</h5>
                    <p>{props.translate.b42}</p>
                  </div>
                </li>
                <li> <img src="static/images/icon/5.png" alt="" />
                  <div>
                    <h5>{props.translate.b43}</h5>
                    <p>{props.translate.b44}</p>
                  </div>
                </li>
                <li> <img src="static/images/icon/6.png" alt="" />
                  <div>
                    <h5>{props.translate.b45}</h5>
                    <p>{props.translate.b46}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="hom-cre-acc-left hom-cre-acc-right">
              <form>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="acc-name" type="text" className="validate" />
                    <label htmlFor="acc-name">{props.translate.b47}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="acc-mob" type="number" className="validate" />
                    <label htmlFor="acc-mob">{props.translate.b48}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="acc-mail" type="email" className="validate" />
                    <label htmlFor="acc-mail">{props.translate.b49}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="acc-pass" type="password" className="validate" />
                    <label htmlFor="acc-pass">{props.translate.b50}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 hom-cr-acc-check">
                    <input type="checkbox" id="test5" />
                    <label htmlFor="test5">{props.translate.b51}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12"> <a className="waves-effect waves-light btn-large full-btn" href="#!">Submit Now</a> </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="web-app com-padd">
      <div className="container">
        <div className="row">
          <div className="col-md-6 web-app-img"> <img src="static/images/mobile.png" alt="" /> </div>
          <div className="col-md-6 web-app-con">
            <h2>{props.translate.b52} <span>{props.translate.b53}!</span></h2>
            <ul>
              <li><i className="fa fa-check" aria-hidden="true"></i> {props.translate.b54}</li>
              <li><i className="fa fa-check" aria-hidden="true"></i> {props.translate.b55}</li>
              <li><i className="fa fa-check" aria-hidden="true"></i> {props.translate.b56}</li>
              <li><i className="fa fa-check" aria-hidden="true"></i> {props.translate.b57}</li>
            </ul> <span>{props.translate.b58}</span>
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
            <a href="#"><img src="static/images/android.png" alt="" /> </a>
            <a href="#"><img src="static/images/apple.png" alt="" /> </a>
          </div>
        </div>
      </div>
    </section>

    <Footer data={props.translate} />
              
    <QuotsPopup />

    <script src="static/js/jquery.min.js"></script>
    <script src="static/js/materialize.min.js" type="text/javascript"></script>
    <script src="static/js/bootstrap.js" type="text/javascript"></script>
    <script src="static/js/custom.js"></script>
  </div>
);

Index.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  console.log(json.stargazers_count)
  return { stars: json.stargazers_count }
}

Index.getInitialProps = async ({ req }) => {
  const res = await fetch('https://ocr.sunucune.com/api/testAirbnb')
  const json = await res.json()
  console.log(json)
  return { translate: json.data }
}

export default Index;