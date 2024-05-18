import React from "react";

const Form = ({contact}) => {
  if(contact){
    return (
      <form className="p-5">

      <div className="form-outline mb-4">
        <input type="text" id="form2Example11" class="form-control border-orange"
          placeholder="Nom et Prenom" required />
      </div>

      <div className="form-outline mb-4">
        <input type="text" id="form2Example11" class="form-control border-orange"
          placeholder="Nom de l'entreprise" required />
      </div>

      <div className="form-outline mb-4">
        <input type="tel" id="form2Example11" class="form-control border-orange"
          placeholder="Numéro de téléphone" required />
      </div>

      <div className="form-outline mb-4">
        <input type="email" id="form2Example11" class="form-control border-orange"
          placeholder="Adresse email" required />
      </div>

      <div data-mdb-input-init class="form-outline mb-4  border-primary-subtle">
        <textarea class="form-control border-orange" id="form6Example7" rows="4" placeholder="Parlez-nous de vote demande"></textarea>
      </div>

      <button data-mdb-ripple-init type="button" class="btn btn-orange w-100 mb-4 rounded">Envoyer</button>

    </form>
    )
  }else{
    return (
      <form className="shadow-lg p-3 bg-body-tertiary rounded" id="formcom">
        <h4 className="text-orange text-uppercase pb-4">envoyer un message</h4>
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline border-primary-subtle">
              <input
                type="text"
                id="form6Example1"
                className="form-control"
                placeholder="Nom"
              />
            </div>
          </div>
          <div className="col">
            <div className="form-outline border-primary-subtle">
              <input
                type="text"
                id="form6Example2"
                className="form-control"
                placeholder="Prénom"
              />
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline border-primary-subtle">
              <input
                type="text"
                id="form6Example3"
                className="form-control"
                placeholder="Téléphone"
              />
            </div>
          </div>
          <div className="col">
            <div className="form-outline border-primary-subtle">
              <input
                type="email"
                id="form6Example4"
                className="form-control"
                placeholder="Adresse email"
              />
            </div>
          </div>
        </div>
        <div className="form-outline mb-4 border-primary-subtle">
          <textarea
            className="form-control"
            id="form6Example7"
            rows="4"
            placeholder="Votre message"
          ></textarea>
        </div>
        <button type="button" className="btn btn-orange rounded">
          Envoyer
        </button>
      </form>
    );
  }
};

export default Form;
