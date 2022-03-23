import React from "react";

class About extends React.Component {
    render() {
        return (
            <><div className="banner">
                <h2 className="text-center">Nos Groupes IHK</h2>
                <p>Matériaux, Immobillier, Location Auto, Épices</p>
            </div>
            <div className="groups row">
                <div className=" col-12 col-xl-3 col-lg-3 col-md-6-col-sm-12 col-xs-12">
                <div className="group">
                   <p className="text-center group-title">IHK Ltd</p>
                   <p className="text-center">Société principale d'import - export de matériaux de construction</p>
                   </div>
                </div>

                <div className=" col-12 col-xl-3 col-lg-3 col-md-6-col-sm-12 col-xs-12">
                <div className="group">
                   <p className="text-center group-title">IHK Immo</p>
                   <p className="text-center">Location Immobilière en Ile de France</p>
                   </div>
                </div>

                <div className=" col-12 col-xl-3 col-lg-3 col-md-6-col-sm-12 col-xs-12">
                    <div className="group">
                   <p className="text-center group-title">IHK Auto</p>
                   <p className="text-center">Location voiture / fourgon en Ile de France</p>
                   </div>
                </div>

                <div className=" col-12 col-xl-3 col-lg-3 col-md-6-col-sm-12 col-xs-12 text-center">
                <div className="group">
                   <p className="text-center group-title">Safran Prestige</p>
                   <p className="text-center">E-commerce de vente d'épices en tout genre</p>
                   <a href="https://www.safranprestige.fr" title="Safran Prestige">Notre site</a>
                   </div>
                </div>

                </div></>
            
        )
    }
}

export default About;