import Fetch from 'isomorphic-unfetch';

class Navbar extends React.Component{
    render(){
        return(
            //This page home active hom3-top-menu
            <section id="myID" className={"bottomMenu " + (this.props.isHome ? 'hom3-top-menu' : "dir-il-top-fix")} >
            <div className="container top-search-main">
                <div className="row">
                    <div className="ts-menu">
                        <div className="ts-menu-1">
                            <a href="index-1.html"><img src="../static/images/aff-logo.png" alt="" /> </a>
                        </div>
                        <div className="ts-menu-2"><a href="#" className="t-bb">{this.props.data.allpages} <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                            <div className="cat-menu cat-menu-1">
                                <div className="dz-menu">
                                    <div className="dz-menu-inn">
                                        <h4>{this.props.data.frontpages}</h4>
                                        <ul>
                                            <li><a href="index-1.html">{this.props.data.home1}</a></li>
                                            <li><a href="index-2.html">{this.props.data.home2}</a></li>
                                            <li><a href="index-3.html">{this.props.data.home3}</a></li>
                                            <li><a href="list.html">{this.props.data.alllisting}</a></li>
                                            <li><a href="listing-details.html">{this.props.data.listingdetails} </a> </li>
                                            <li><a href="price.html">{this.props.data.addlisting}</a> </li>
                                            <li><a href="list-lead.html">{this.props.data.leadlisting}</a></li>
                                            <li><a href="list-grid.html">{this.props.data.listinggridview}</a></li>
                                        </ul>
                                    </div>
                                    <div className="dz-menu-inn">
                                        <h4>{this.props.data.frontendpages}</h4>
                                        <ul>
                                            <li><a href="new-business.html"> {this.props.data.newlisting} </a> </li>
                                            <li><a href="nearby-listings.html">{this.props.data.nearbylisting}</a> </li>
                                            <li><a href="customer-reviews.html"> {this.props.data.customerreviews}</a> </li>
                                            <li><a href="trendings.html"> {this.props.data.toptrending}</a> </li>
                                            <li><a href="how-it-work.html"> {this.props.data.a1}</a> </li>
                                            <li><a href="advertise.html"> {this.props.data.a2}</a> </li>
                                            <li><a href="price.html"> {this.props.data.a3}</a> </li>
                                        </ul>
                                    </div>
                                    <div className="dz-menu-inn">
                                        <h4>{this.props.data.a4}</h4>
                                        <ul>
                                            <li><a href="about-us.html">{this.props.data.a5}</a> </li>
                                            <li><a href="customer-reviews.html">{this.props.data.a6}</a> </li>
                                            <li><a href="contact-us.html"> {this.props.data.a7}</a> </li>
                                            <li><a href="blog.html"> {this.props.data.a8}</a> </li>
                                            <li><a href="blog-content.html"> {this.props.data.a9}</a> </li>
                                            <li><a href="elements.html"> {this.props.data.a10} </a> </li>
                                            <li><a href="shop-listing-details.html">{this.props.data.a11} </a> </li>
                                            <li><a href="property-listing-details.html"> {this.props.data.a12} </a> </li>
                                        </ul>
                                    </div>
                                    <div className="dz-menu-inn">
                                        <h4>{this.props.data.a13}</h4>
                                        <ul>
                                            <li><a href="dashboard.html"> {this.props.data.a14}</a> </li>
                                            <li><a href="db-invoice.html"> {this.props.data.a15}</a> </li>
                                            <li><a href="db-setting.html">{this.props.data.a16}</a> </li>
                                            <li><a href="db-all-listing.html">{this.props.data.a17}</a> </li>
                                            <li><a href="db-listing-add.html"> {this.props.data.a18}</a> </li>
                                            <li><a href="db-review.html"> {this.props.data.a19}</a> </li>
                                            <li><a href="db-payment.html"> {this.props.data.a20} </a> </li>
                                        </ul>
                                    </div>
                                    <div className="dz-menu-inn">
                                        <h4>{this.props.data.a21}</h4>
                                        <ul>
                                            <li><a href="register.html">{this.props.data.a22}</a> </li>
                                            <li><a href="login.html"> {this.props.data.a23}</a> </li>
                                            <li><a href="forgot-pass.html"> {this.props.data.a24}</a> </li>
                                            <li><a href="db-message.html"> {this.props.data.a25}</a> </li>
                                            <li><a href="db-my-profile.html">{this.props.data.a26}</a> </li>
                                            <li><a href="db-post-ads.html">{this.props.data.a27}</a> </li>
                                            <li><a href="db-invoice-download.html"> {this.props.data.a28} </a> </li>
                                        </ul>
                                    </div>
                                    <div className="dz-menu-inn lat-menu">
                                        <h4>{this.props.data.a29}</h4>
                                        <ul>
                                            <li><a target="_blank" href="admin.html"> {this.props.data.a30}</a> </li>
                                            <li><a target="_blank" href="admin-all-listing.html">{this.props.data.a31}</a> </li>
                                            <li><a target="_blank" href="admin-all-users.html"> {this.props.data.a32}</a> </li>
                                            <li><a target="_blank" href="admin-analytics.html"> {this.props.data.a33}</a> </li>
                                            <li><a target="_blank" href="admin-ads.html"> {this.props.data.a34}</a> </li>
                                            <li><a target="_blank" href="admin-setting.html"> {this.props.data.a35} </a> </li>
                                            <li><a target="_blank" href="admin-payment.html"> {this.props.data.a36} </a> </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="dir-home-nav-bot">
                                    <ul>
                                        <li>{this.props.data.a37} <span>{this.props.data.a38}</span> </li>
                                        <li><a href="advertise.html" className="waves-effect waves-light btn-large"><i className="fa fa-bullhorn"></i>{this.props.data.a39} </a>
                                        </li>
                                        <li><a href="db-listing-add.html" className="waves-effect waves-light btn-large"><i className="fa fa-bookmark"></i> {this.props.data.a40} </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
    
                        <div className="ts-menu-3">
                            <div className="">
                                <form className="tourz-search-form tourz-top-search-form">
                                    <div className="input-field">
                                        <input type="text" id="top-select-city" className="autocomplete" />
                                        <label htmlFor="top-select-city">{this.props.data.a41} </label>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" id="top-select-search" className="autocomplete" />
                                        <label htmlFor="top-select-search" className="search-hotel-type">{this.props.data.a42} </label>
                                    </div>
                                    <div className="input-field">
                                        {/*`<!--change data -->` */}
                                        <i className="waves-effect waves-light tourz-top-sear-btn waves-input-wrapper">
                                            <input type="submit" value="" className="waves-button-input" />
                                        </i>
                                    </div>
                                </form>
                            </div>
                        </div>
    
                        <div className="ts-menu-4">
                            <div className="v3-top-ri">
                                <ul>
                                    <li><a href="login.html" className="v3-menu-sign"><i className="fa fa-sign-in"></i> {" "+ this.props.data.a43 + " "} </a> </li>
                                    <li>
                                        <a href="db-listing-add.html" className="v3-add-bus">
                                            <i className="fa fa-plus" aria-hidden="true"></i> {this.props.data.a44 } 
                                        </a> 
                                    </li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="ts-menu-5"><span><i className="fa fa-bars" aria-hidden="true"></i></span> </div>
    
                        <div className="mob-right-nav" data-wow-duration="0.5s">
                            <div className="mob-right-nav-close"><i className="fa fa-times" aria-hidden="true"></i> </div>
                            <h5>{this.props.data.a45} </h5>
                            <ul className="mob-menu-icon">
                                <li><a href="price.html">{this.props.data.a46} </a> </li>
                                <li><a href="#!" data-toggle="modal" data-target="#register">{this.props.data.a47} </a> </li>
                                <li><a href="#!" data-toggle="modal" data-target="#sign-in">{this.props.data.a48} </a> </li>
                            </ul>
                            <h5>{this.props.data.a49} </h5>
                            <ul>
                                <li><a href="list.html"><i className="fa fa-angle-right" aria-hidden="true"></i> {this.props.data.a50} </a> </li>
                                <li><a href="list.html"><i className="fa fa-angle-right" aria-hidden="true"></i> {this.props.data.a51} </a> </li>
                                <li><a href="list.html"><i className="fa fa-angle-right" aria-hidden="true"></i> {this.props.data.a52} </a> </li>
                                <li><a href="list.html"><i className="fa fa-angle-right" aria-hidden="true"></i> {this.props.data.a53} </a> </li>
                                <li><a href="list.html"><i className="fa fa-angle-right" aria-hidden="true"></i> {this.props.data.a54}  </a> </li>
                                <li><a href="list.html"><i className="fa fa-angle-right" aria-hidden="true"></i> {this.props.data.a55} </a> </li>
                                <li><a href="list.html"><i className="fa fa-angle-right" aria-hidden="true"></i> {this.props.data.a56} </a> </li>
                                <li><a href="list.html"><i className="fa fa-angle-right" aria-hidden="true"></i> {this.props.data.a57} </a> </li>
                                <li><a href="list.html"><i className="fa fa-angle-right" aria-hidden="true"></i> {this.props.data.a58} </a> </li>
                                <li><a href="list.html"><i className="fa fa-angle-right" aria-hidden="true"></i> {this.props.data.a59} </a> </li>
                                <li><a href="list.html"><i className="fa fa-angle-right" aria-hidden="true"></i> {this.props.data.a60} </a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Navbar;