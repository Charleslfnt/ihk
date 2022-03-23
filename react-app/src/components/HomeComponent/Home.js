import React from "react";
import { Routes, Route, Link } from "react-router-dom";
class Home extends React.Component {
    render() {
return(
    <><div className="banner">
        <h2 className="text-center">IMPORT-EXPORT</h2>
        <p>Fer, Bois, Matériaux, Quincaillerie, Produits
            chimique, Alimentaire, Autre</p>    
    </div>
    <section className="rows">

            <div className="row first">
                <div className="col-6 left">
                    <div>
                        <h2 className="">QUI SOMMES-NOUS ?</h2>
                        <p>Depuis plus de 20 ans, IHK assure le négoce de produits tels que : Matériaux de construction (fer à béton, cornières, tôles ondulées, profilés...) mais nous commercialisons également d'autres produits tels que :
                            Acier, Quincaillerie, Bois, Revêtement sol (carrelage, parquet,…) et plafond, Sanitaire, Produits Chimiques</p>
                    </div>

                </div>
                <div className="d-none d-lg-block col-6  ">
                    <img className="img-fluid" src="img/illustration_1.png" alt=""></img>
                </div>
            </div>

            <div className="row second">
                <div className="d-none d-lg-block col-6 left">
                    <img className="" src="img/bridge_illustration.png" alt=""></img>
                </div>
                <div className="col-6 right">
                    <div>
                        <h2 className="">NOS PRINCIPAUX MARCHÉS SE SITUENT </h2>
                        <p>l'Océan Indien (Madagascar, Réunion, L'Ile Maurice, Mayotte, Les Comores) l'Afrique (Mozambique, Tanzanie, Kenya, Gabon, Sénégal, Cameroun...). l'Europe (France et DOM, Belgique). Asie</p>
                    </div>

                </div>

            </div>

            <div className="row three">
                <div className="col-6 left">
                    <div>
                        <h2 className="">DES FOURNISSEURS AUX 4 COINS DU MONDE</h2>
                        <p>Europe (CEE, Turquie, Roumanie,..)

                            Asie (Inde, Chine, Malaysie..)

                            Amérique du Sud.</p>
                    </div>

                </div>
                <div className="d-none d-lg-block col-6 ">
                    <img className="img-fluid" src="img/illustation_world.png"></img>
                </div>
            </div>


        </section><section>
            <div className="greens">
                <div className="row">
                    <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                    <img src="img/green_1.png" alt="green"></img>
                    <p>Commande rapide</p>
                    </div>
                    <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                    <img src="img/green_2.png" alt="green"></img>
                    <p>Suivi sécurisé</p>
                    </div>
                    <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                    <img src="img/green_3.png" alt="green"></img>
                    <p>Livré dans les temps</p>
                    </div>
                </div>
            </div>
        </section></>
                    )
           }
        }

export default Home;

              
