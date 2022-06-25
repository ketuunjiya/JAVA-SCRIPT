import React from "react";
import avtar from "./../images/logo.jpg";

function Home() {
    return (
        <div className="min-h-screen">
            <div className="container pt-5 d-flex flex-column align-items-center">
                <img src={avtar} width={200} alt="Ketu Unjiya"/>
                <h1>Ketu Unjiya</h1>
                <h4>(App Developer)</h4>
                <p className="text-center border-bottom pb-3">Hello,I'm Ketu unjiya! i am app devloper with the skills of Python,Java,Css,Html.</p>
                <p className="text-center">
                    <span className="d-mobile-block">Email: ketuunjiya573@gmail.com</span>
                    <span className="d-none d-web-contents"> | </span>
                    <span className="d-mobile-block">Phone: +91-7778004027</span>
                </p>
                <p className="text-center">Address: A-201, Aakruti Appartment,near Modi school,in ambika township ,near Nana mava main road, Rajkot</p>
            </div>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-bold pb-3">Skills</h5>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div>
                                            <p className="mb-0">HTML</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "50%" }}>50%</div>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <p className="mb-0">CSS</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "60%" }} >60%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <p className="mb-0">Python</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "50%" }}>50%</div>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <p className="mb-0">Java</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "60%" }} >60%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-bold pb-3">Hobbies</h5>
                                <span class="badge bg-primary me-3 mb-3 p-2">Cricket</span>
                                <span class="badge bg-secondary me-3 mb-3 p-2">Music</span>
                                <span class="badge bg-success me-3 mb-3 p-2">Movie</span>
                                <span class="badge bg-danger me-3 mb-3 p-2">Pool</span>
                                <span class="badge bg-warning text-dark me-3 mb-3 p-2">Traveling</span>
                                <span class="badge bg-info text-dark me-3 mb-3 p-2">Photoshot</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;