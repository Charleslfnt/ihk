import React, { Component } from "react";
import Field from '../ContactComponent/Field';  
import Checkbox from '../ContactComponent/Checkbox';  
import Select from '../ContactComponent/Select';  
import emailJs from 'emailjs-com';

class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nom: '',
            prenom: '',
            societe: '',
            email: '',
            message: '',
            select: '',
            checked: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (e) {
        const name = e.target.name
        const type = e.target.type
        const value = type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit (e) {
        e.preventDefault()
        const data = JSON.stringify(this.state)
        console.log(data);
        emailJs.sendForm('service_3r6w34p', 'template_t36834l', e.target, 'ApKEX4FYSBHDAcAFA').then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
        this.setState({
            nom: '',
            prenom: '',
            societe: '',
            email: '',
            message: '',
            select: '',
            checked: false
        })
    }



  render() {
return (
    <>
<div className="banner">
    <h2 className="text-center">CONTACTEZ-NOUS </h2>
    <p>Remplissez le formulaire ci-dessous  où
        utilisez les coordonnées, un expert vous 
        contactera dans les meilleurs délais. </p>
</div>  

<div className="row">
            <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-xs-12 form">
                <form action="#" method="POST" onSubmit={this.handleSubmit}>
                
                    <Field name="nom" value={this.state.nom} onChange={this.handleChange}>Nom :</Field>
                    <Field name="prenom" value={this.state.prenom} onChange={this.handleChange}>Prénom :</Field>
                    <Field name="societe" value={this.state.societe} onChange={this.handleChange}>Société :</Field>
                    <Field name="email" value={this.state.email} onChange={this.handleChange}>Émail :</Field>
                   
                    <Select name="select-sujet" id="select" value={this.state.select} onChange={this.handleChange}>
                    Sujet :
                    </Select>
                    
                    <label htmlFor="message">Votre message :</label>
                    <textarea name="message" placeholder="Écrivez votre message" id="" cols="30" rows="10" value={this.state.message} onChange={this.handleChange}></textarea>
                    <Checkbox name="checkbox" value={this.state.checked} onChange={this.handleChange}>
                    Les informations recueillies à partir de ce formulaire sont strictement à usage interne et réservées au traitement de votre demande - Politique de confidentialité
                    </Checkbox>

                    <button type="submit">Envoyer</button>
                </form>
            </div>
            <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-xs-12">
                <div className="informations">
                    <h3 className="">Nos coordonnées</h3>
                    <h5 className="">Email</h5>
                    <p>info@ihkltd.com</p>
                    <h5 className="">Téléphone</h5>
                    <p>+33 1 42 81 92 45</p>
                    <h5 className="">Adresse</h5>
                    <p>8 Rue Marguerite de  Rochechouart
                        75009 Paris
                        FRANCE</p>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.0172444668383!2d2.3425683157583785!3d48.87694780735374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e4072b47e7f%3A0xc6832c0cffdb66ca!2s8%20Rue%20Marguerite%20de%20Rochechouart%2C%2075009%20Paris!5e0!3m2!1sfr!2sfr!4v1646056809808!5m2!1sfr!2sfr" title="hey" width="400" height="300" allowfullscreen="" loading="lazy"></iframe>
                </div>
           
            </div>
</div></>
                      );
                      }

                      }

    export default Contact;