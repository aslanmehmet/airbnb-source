const QuotsPopup = () => (
    <section>
        <div className="modal fade dir-pop-com" id="list-quo" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header dir-pop-head">
                        <button type="button" className="close" data-dismiss="modal">×</button>
                        <h4 className="modal-title">Get a Quotes</h4>
                        <i className="fa fa-pencil dir-pop-head-icon" aria-hidden="true"></i>
                    </div>
                    <div className="modal-body dir-pop-body">
                        <form method="post" className="form-horizontal">

                            <div className="form-group has-feedback ak-field">
                                <label className="col-md-4 control-label">Full Name *</label>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="fname" placeholder="" required /> </div>
                            </div>

                            <div className="form-group has-feedback ak-field">
                                <label className="col-md-4 control-label">Mobile</label>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="mobile" placeholder="" /> </div>
                            </div>

                            <div className="form-group has-feedback ak-field">
                                <label className="col-md-4 control-label">Email</label>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="email" placeholder="" /> </div>
                            </div>

                            <div className="form-group has-feedback ak-field">
                                <label className="col-md-4 control-label">Message</label>
                                <div className="col-md-8 get-quo">
                                    <textarea className="form-control"></textarea>
                                </div>
                            </div>

                            <div className="form-group has-feedback ak-field">
                                <div className="col-md-6 col-md-offset-4">
                                    <input type="submit" value="SUBMIT" className="pop-btn" /> </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default QuotsPopup;