import React from "react";


class Product extends React.Component {
  render() {
return (
<>
<div className="banner">
            <h2 className="text-center">Nos Produits</h2>
            <p>Fer, Bois, Matériaux, Quincaillerie, Produits 
                chimique, Alimentaire, Autre</p>
        </div>

        <div className="row cat">
            
                <div className="col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                    <img src="img/materiaux.jpg" alt="matériaux"></img>
                    <p className="text-center">Matériaux</p>
                </div>

                <div className="col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                    <img src="img/materiaux.jpg" alt="matériaux"></img>
                    <p className="text-center">Matériaux</p>
                </div>

                <div className="col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                    <img src="img/materiaux.jpg" alt="matériaux"></img> 
                    <p className="text-center">Matériaux</p>
                </div>
            
        </div>

        <div className="row cat">
           
                <div className="col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                    <img src="img/pr-chi.jpg" alt="produits chimiques"></img>
                    <p className="text-center">Produits Chimiques</p>
                </div>

                <div className="col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                    <img src="img/pr-chi.jpg" alt="produits chimiques"></img>
                    <p className="text-center">Produits Chimiques</p>
                </div>

                <div className="col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                    <img src="img/pr-chi.jpg" alt="produits chimiques"></img>
                    <p className="text-center">Produits Chimiques</p>
                </div>
          
        </div>
</>
);
}

}

export default Product;