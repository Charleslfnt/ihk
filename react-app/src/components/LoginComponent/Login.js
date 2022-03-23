import React from "react";


class Product extends React.Component {
    render () {
        return (
            <div>
                <div className="banner">
                    <h2 className="text-center">SE CONNECTER </h2>
                        <p>Remplissez le formulaire ci-dessous</p>
                </div>  

                <div>
                <form action="#" method="POST">
                    <label for="email">Email :</label>
                    <input type="text" name="email"></input>
                    <label for="password">Mot de passe :</label>
                    <input type="password" name="password"></input>
                    <a href="#" className="text-center">Vous n'êtes pas encore inscrit ? </a>
                    <button type="submit">Se connecter</button>
                </form>
                </div>

            </div>
           
              
        )
    }
}

export default Product;