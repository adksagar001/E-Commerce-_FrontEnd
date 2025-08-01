// src/pages/NotFound.js
import React from "react";

const NotFound = () => {
//   return (
//     <div className="text-center mt-5">
//       <h1>404 - Page Not Found</h1>
//       <p>The page you’re looking for doesn’t exist.</p>
//     </div>
    //   );
    return (<main className="main" id="top">
        <div className="px-3">
            <div className="row min-vh-100 flex-center p-5">
                <div className="col-12 col-xl-10 col-xxl-8">
                    <div className="row justify-content-center align-items-center g-5">
                        <div className="col-12 col-lg-6 text-center order-lg-1"><img className="img-fluid w-lg-100 d-dark-none" src="../../assets/spot-illustrations/404-illustration.png" alt="" width="400" /><img className="img-fluid w-md-50 w-lg-100 d-light-none" src="../../assets/img/spot-illustrations/dark_404-illustration.png" alt="" width="540" /></div>
                        <div className="col-12 col-lg-6 text-center text-lg-start"><img className="img-fluid mb-6 w-50 w-lg-75 d-dark-none" src="../../assets/img/spot-illustrations/404.png" alt="" /><img className="img-fluid mb-6 w-50 w-lg-75 d-light-none" src="../../assets/img/spot-illustrations/dark_404.png" alt="" />
                            <h2 className="text-body-secondary fw-bolder mb-3">Page Missing!</h2>
                            <p className="text-body mb-5">But no worries! Our ostrich is looking everywhere <br className="d-none d-sm-block" />while you wait safely. </p><a className="btn btn-lg btn-primary" href="../../index.html">Go Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </main>);
};

export default NotFound;
