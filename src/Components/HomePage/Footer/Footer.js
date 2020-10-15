import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#FBD062', marginTop: "100px" }}>
            <main className="container-fluid d-flex" style={{ padding: "50px"}} >
                <section className="col-md-6">
                    <h1>Let us handle your project, professionally.</h1>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </section>
                <section className="col-md-6">
                    <form action="">
                        <input className="form-control" type="email" /><br />
                        <input className="form-control" type="companyName" /><br />
                        <textarea className="form-control" style={{
                            width: "100%",
                            height: '277px'
                        }} type="text-area" />
                        <button className="nav-link btn btn-dark text-white" style={{ width: '134px' }}> send</button>
                    </form>
                </section>
            </main>
        </div >
    );
};

export default Footer;