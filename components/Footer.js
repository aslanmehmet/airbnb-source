import Fetch from 'isomorphic-unfetch';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer id="colophon" className="site-footer clearfix">
                    <div id="quaternary" className="sidebar-container " role="complementary">
                        <div className="sidebar-inner">
                            <div className="widget-area clearfix">
                                <div id="azh_widget-2" className="widget widget_azh_widget">
                                    <div data-section="section">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-sm-4 col-md-3 foot-logo"> <img src="static/images/foot-logo.png" alt="logo" />
                                                    <p className="hasimg">{this.props.data.b59}</p>
                                                    <p className="hasimg">{this.props.data.b60}</p>
                                                </div>
                                                <div className="col-sm-4 col-md-3">
                                                    <h4>{this.props.data.b61}</h4>
                                                    <ul className="two-columns">
                                                        <li> <a href="advertise.html">{this.props.data.b62}</a> </li>
                                                        <li> <a href="about-us.html">{this.props.data.b63}</a> </li>
                                                        <li> <a href="customer-reviews.html">{this.props.data.b64}</a> </li>
                                                        <li> <a href="how-it-work.html">{this.props.data.b65} </a> </li>
                                                        <li> <a href="add-listing.html">{this.props.data.b66}</a> </li>
                                                        <li> <a href="#!">{this.props.data.b67}</a> </li>
                                                        <li> <a href="#!">{this.props.data.b68}</a> </li>
                                                        <li> <a href="#!">{this.props.data.b69}</a> </li>
                                                        <li> <a href="#!">{this.props.data.b70} </a> </li>
                                                        <li> <a href="trendings.html">{this.props.data.b71}</a> </li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-4 col-md-3">
                                                    <h4>{this.props.data.b72}</h4>
                                                    <ul className="two-columns">
                                                        <li> <a href="#!">{this.props.data.b73}</a> </li>
                                                        <li> <a href="#!">{this.props.data.b74}</a> </li>
                                                        <li> <a href="#!">{this.props.data.b75}</a> </li>
                                                        <li> <a href="#!">{this.props.data.b76} </a> </li>
                                                        <li> <a href="#!">{this.props.data.b77}</a> </li>
                                                        <li> <a href="#!">{this.props.data.b78}</a> </li>
                                                        <li> <a href="#!">{this.props.data.b79}</a> </li>
                                                        <li> <a href="#!">{this.props.data.b80}</a> </li>
                                                        <li> <a href="#!">{this.props.data.b81} </a> </li>
                                                        <li> <a href="#!">{this.props.data.b82}</a> </li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-4 col-md-3">
                                                    <h4>{this.props.data.b83}</h4>
                                                    <ul className="two-columns">
                                                        <li> <a href="#!">{this.props.data.b84}</a> </li>
                                                        <li> <a href="#!">{this.props.data.b85}</a> </li>
                                                        <li> <a href="#!">{this.props.data.b86}</a> </li>
                                                        <li> <a href="#!">{this.props.data.b87} </a> </li>
                                                        <li> <a href="#!">{this.props.data.b88}</a> </li>
                                                        <li> <a href="#!">{this.props.data.b89}</a> </li>
                                                        <li> <a href="#!">{this.props.data.b90}</a> </li>
                                                        <li> <a href="#!">{this.props.data.b91}</a> </li>
                                                        <li> <a href="#!">{this.props.data.b92} </a> </li>
                                                        <li> <a href="#!">{this.props.data.b92}</a> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-section="section" className="foot-sec2">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h4>{this.props.data.b93}</h4>
                                                    <p className="hasimg"> <img src="static/images/payment.png" alt="payment" /> </p>
                                                </div>
                                                <div className="col-sm-4">
                                                    <h4>{this.props.data.b94}</h4>
                                                    <p>{this.props.data.b95}</p>
                                                    <p> <span className="strong">{this.props.data.b96} </span> <span className="highlighted">{this.props.data.b97}</span> </p>
                                                </div>
                                                <div className="col-sm-5 foot-social">
                                                    <h4>{this.props.data.b98}</h4>
                                                    <p>{this.props.data.b99}</p>
                                                    <ul>
                                                        <li><a href="#!"><i className="fa fa-facebook" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-google-plus" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-twitter" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-linkedin" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-youtube" aria-hidden="true"></i></a> </li>
                                                        <li><a href="#!"><i className="fa fa-whatsapp" aria-hidden="true"></i></a> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </footer>

                <section className="copy">
                    <div className="container">
                        <p>copyrights © 2017 RN53Themes.net. &nbsp;&nbsp;All rights reserved. </p>
                    </div>
                </section>
            </div>
        )
    }
}


export default Footer;