import React from "react";
import { Routes, Route, Link } from "react-router-dom";
class Footer extends React.Component {
    render() {
return(
<footer>
    
    <hr></hr>
<div>
    <p className="text-center logo"><Link to="/" className="title">IHK LTD</Link></p>
    <p className="text-center">IHK LTD votre entreprise spécialisée dans l'import-export de matériaux depuis 20 ans.</p>
</div>
<div className="row">
    <div className="col-12 col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <h3 className="text-center">Services</h3>
        <p  className="text-center"><Link to="/contact" title="contact">Contactez-nous</Link></p>
        <p  className="text-center"><a href="https://www.safranprestige.fr" title="Safran Prestige">Safran Prestige</a></p>
    </div>

    <div className="col-12 col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <h3 className="text-center">Nos politiques</h3>
        <p  className="text-center"><a href="#">Politiques de confidentialité</a></p>
    </div>

    <div className="col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <h3 className="text-center">Coordonnées</h3>
        <p className="text-center">8 rue de Marguerite de Rochechouart</p>
        <p className="text-center">75019 Paris</p>
        <p className="text-center">+33 1 42 81 92 45</p>
        <p className="text-center">info@ihkltd.com</p>
    </div>
</div>
    <p className="text-center">© 2022, Tout droits réservés</p>
</footer>
    )
    }

}

export default Footer;