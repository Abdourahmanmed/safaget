import style from './navbarstyle.css';
import Links from "./links/Links";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm bg-white p-2 text-dark bg-opacity-25">
            <div className="container-fluid">
              <div className="d-flex align-items-center justify-content-between mb-2 pb-1">
                <i className="fas fa-cubes fa-2x me-4"></i>
                <span className="h2 fw-bold mb-0 text-white">SAFAJET</span>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <div className='nav-res'>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active text-white fw-bold" aria-current="page" href="/">Accueil</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active text-white fw-bold" aria-current="page" href="/about">A propos</a>
                          </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-bold" href="/service">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-bold" href="/contact">Contact</a>
                        </li>
                        {/* <li className="nav-item">
                            <a  href="/contact" className="btn btn-dark" role="button">Rejoin nous</a>
                        </li> */}
                    </ul>
                    <a  href="/contact" className="btn text-white" role="button">Rejoin nous</a>
                </div>
                </div>
            </div>
        </nav>
        )
}
export default Navbar;