import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="navbarort">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Help Desk</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <Link key="createExplanation" to="/createExplanation" className="nav-link">
                                <li className="nav-item active">
                                    Create Explanation
                        </li>
                            </Link>
                            { /*
                          <Link key="kitapListele" to="/KitapListele" className="nav-link">
                                <li className="nav-item">
                                    Kitap Listele
                        </li>
                            </Link>
                          */ }
                        </ul>
                    </div>
                </nav>
            </div>
            </div>
        );
    }
}

export default Navbar;
