import Image from "next/image";
import React from 'react';
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'


const Contact = () => {

  const isNavbarVisible = false;
  const isFooterVisible = false;

  return (
    <section>
      <Navbar isVisible={isNavbarVisible} />
      <section className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 pt-4">
            <a href="/" className="text-orange text-decoration-none pl-5">← Retour à l'acceuil</a>
            <div className="pl-5 mt-5">

              <h2 className="text-orange">Travaillons ensemble !</h2>
              <p>
                N'hésitez pas à nous contacter pour toute question, demande de devis ou
                simplement pour discuter de votre prochain projet. Nous sommes là pour vous
                aider à concrétiser vos idées et à surpasser vos attentes
              </p>
            </div>
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

          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 gradient-orange d-flex align-items-center">
            <div className="text-dark pl-5">
              <div className="pb-4">
                <h5 className="text-orange fw-bold">Telephone</h5>
                <p>+253 77 86 11 43</p>
                <p>+253 77 22 63 43</p>
              </div>
              <div className="pb-4">
                <h5 className="text-orange fw-bold">Email</h5>
                <p>safajetdjib@gmail.com</p>
              </div>
              <div className="pb-4">
                <h5>Adresse</h5>
                <p>Rue de Berne, Djibouti centre-ville</p>
              </div>
              <div className="pb-4">
                <h5 className="text-orange fw-boldt">Suivez-nous</h5>
                <div>
                  <Image
                    src="/icon44.png"
                    width={25}
                    height={25}
                    className="mx-2 text-light"

                  />
                  <Image
                    src="/icon55.png"
                    width={25}
                    height={25}
                    className="text-light"
                  />
                  <Image
                    src="/icon66.png"
                    width={25}
                    height={25}
                    className="mx-2 text-light"

                  />
                  <Image
                    src="/icon77.png"
                    width={25}
                    height={25}
                    className="text-light"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>






      </section>
      <Footer isVisible={isFooterVisible} />
    </section>
  );
};

export default Contact;