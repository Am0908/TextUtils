
import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

function Navbar(props) {

    const mystyle = {
        border: "1px solid black"
    }
    return (
        <div>
            <nav style = {mystyle} className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className='container-fluid'>
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item active"> */}
                            {/* <Link className="nav-link" to="/">Home</Link> */}
                            {/* <a className="nav-link" href="/">Home</a> */}
                        {/* </li> */}
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/about">{props.about}</a>
                        </li> */}
                    </ul>
                    <div className='justify-content-end collapse navbar-collapse'>
                        <div className={`form-check form-switch text-${props.textMode}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Add title here",
    about: "About"
}
export default Navbar;