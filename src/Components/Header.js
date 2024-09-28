import React from "react";
import { NavLink , Link} from "react-router-dom";
function Header(){
    return(
        <>
           <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6"></div>
                            <p className="text-white mb-0">Free hipping over $100 & Free Returns</p>
                        <div className="col-6">
                            <p className="text-end text-white mb-0">Hotmail:<a className="text-white" href="tel:+91 9876543210">+91 9876543210</a></p>
                        </div>
                    </div>
                </div>
           </header>
           <header>
                <div className="header-upper">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-2">
                                <h1>
                                    <Link>
                                        Developer
                                    </Link>
                                </h1>
                            </div>
                            <div className="col-5">

                            </div>
                            <div className="col-5">

                            </div>
                        </div>
                    </div>
                </div>
           </header>
        </>
    );
}
export default Header;