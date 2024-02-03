import Image from "next/image";

const Contact = () => {
    return (
    <section className="gradient-form vh-100" id="sectioncont">
    <div className="container py-5 pt-5">
      <div className="row">
        <div className="col-xl-10">
          <div className=" rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-6 position-relative gradient-custom-1">
                <div className=" p-md-5 mx-md-4">

                  <div className="text-center">
                    <h2>Travaillons ensemble !</h2>
                    <p>
                      N'hésitez pas à nous contacter pour toute question, demande de devis ou 
                      simplement pour discuter de votre prochain projet. Nous sommes là pour vous 
                      aider à concrétiser vos idées et à surpasser vos attentes
                    </p>
                  </div>

                  <form>
                    
                    <div className="form-outline mb-4">
                      <input type="email" id="form2Example11" class="form-control"
                        placeholder="Phone number or email address" />
                    </div>

                    <div className="form-outline mb-4">
                      <input type="email" id="form2Example11" class="form-control"
                        placeholder="Phone number or email address" />
                    </div>

                    <div className="form-outline mb-4">
                      <input type="email" id="form2Example11" class="form-control"
                        placeholder="Phone number or email address" />
                    </div>

                    <div className="form-outline mb-4">
                      <input type="email" id="form2Example11" class="form-control"
                        placeholder="Phone number or email address" />
                    </div>

                    <div data-mdb-input-init class="form-outline mb-4  border-primary-subtle">
                      <textarea class="form-control" id="form6Example7" rows="4" placeholder="Votre message"></textarea>
                    </div>

                    <button data-mdb-ripple-init type="button" class="btn btn-primary mb-4">Envoyer</button>

                  </form>

                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center gradient-custom-2 position-absolute">
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <div>
                    <h5>Telephone</h5>
                    <p>+253 77 86 11 43</p>
                    <p>+253 77 22 63 43</p>
                  </div>
                  <div>
                    <h5>Email</h5>
                    <p>safajetdjib@gmail.com</p>
                  </div>
                  <div>
                    <h5>Adresse</h5>
                    <p>Rue de Berne, Djibouti centre-ville</p>
                  </div>
                  <div>
                    <h5>Suivez-nous</h5>
                    <div>
                      <Image
                        src="/icon4.png"
                        width={30}
                        height={30}
                        className="mx-2"
                     
                      />
                      <Image
                        src="/icon5.png"
                        width={30}
                        height={30}
                       
                      />
                      <Image
                        src="/icon6.png"
                        width={30}
                        height={30}
                        className="mx-2"
                    
                      />
                      <Image
                        src="/icon7.png"
                        width={30}
                        height={30}               
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

    );
  };
  
  export default Contact;