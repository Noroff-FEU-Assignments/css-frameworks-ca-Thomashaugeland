function Footer() {
    return (
        <>
            <div className='footerbar'>
                <div class="container text-center position-sticky-bottom bottom-0">
                    <div class="row">
                        <div class="col">
                            <img
                                className="d-block w-25"
                                src={require('./images/share/footer_icons.jpg')}
                                alt="Share"
                            />
                        </div>
                        <div class="col">
                            Hello@yay.com
                        </div>
                        <div class="col">
                            Copyright 2020
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;