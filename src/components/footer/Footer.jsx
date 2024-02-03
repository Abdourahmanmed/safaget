import Image from "next/image";

const Footer = () => {
    return (

      <div className="bg-body-tertiary text-center text-lg-start pt-5" id="footer">
        <div className="container p-4">
          <div className="row">       
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Menu</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/" class="text-body">Accueil</a>
                </li>
                <li>
                  <a href="/service" class="text-body">Service</a>
                </li>
                <li>
                  <a href="/about" class="text-body">A propos</a>
                </li>
                <li>
                  <a href="/contact" class="text-body">Contact</a>
                </li>
              </ul>
            </div>
          
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0">Service</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!" class="text-body">Impressions Grand Format</a>
                </li>
                <li>
                  <a href="#!" class="text-body">Imprimés Personnalisés</a>
                </li>
                <li>
                  <a href="#!" class="text-body">Produits Promotionnels</a>
                </li>
                <li>
                  <a href="#!" class="text-body">Design Graphique et Personnalisation</a>
                </li>
              </ul>
            </div>
          
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 pe-5">
              <h5 className="text-uppercase">Contact</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <Image
                    src="/icon4.png"
                    width={20}
                    height={20}
                  />
                  <span className="span_title1">Notre Histoire</span>
                </li>
                <li>
                  <Image
                      src="/icon9.png"
                      width={20}
                      height={20}
                    />
                    <span className="span_title1">Notre Histoire</span>
                </li>
                <li>
                  <Image
                      src="/icon8.png"
                      width={20}
                      height={20}
                    />
                    <span className="span_title1">Notre Histoire</span>
                </li>
                <li>
                  <Image
                      src="/icon5.png"
                      width={20}
                      height={20}
                    />
                    <span className="span_title1 me-3">Notre Histoire</span>
                    <Image
                      src="/icon6.png"
                      width={20}
                      height={20}
                    />
                    <span className="span_title1">Notre Histoire</span>
                </li>
              </ul>
            </div>
          
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <ul className="list-unstyled">
                <div className="form-outline form-white mb-4">
                  <label className="form-label" for="typeEmailX">Email</label>
                  <input type="email" id="typeEmailX" class="form-control form-control-lg border-0 h4 pb-2 mb-4 text-danger border-bottom border-danger" />
                </div>
                <li>
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
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center p-3">
          ©2024 Safa Jet. All rights reserved.
        </div>
      </div>
    );
  };
  
  export default Footer;