import Image from "next/image";

const Service = () => {
    return (
    
        <section>
          <div className="d-flex justify-content-between align-items-center container-fluid h-custom">
            <div>
              <Image
                src="/service.jpg"
                width={500}
                height={500}
                className="mb-5 me-5"
              />
            </div>
            <div className="service-1">
                <h1>Nos Services d'Impression Numérique</h1>
                <p>
                  Découvrez l'art de l'impression numérique chez Safa Jet. De la grandeur des 
                  impressions grand format à la personnalisation minutieuse de chaque 
                  document, explorez une gamme complète de services conçus pour 
                  transformer vos idées en œuvres imprimées exceptionnelles. Chaque service 
                  est imprégné de notre engagement envers la créativité, la qualité inégalée et 
                  la satisfaction client. Explorez notre offre diversifiée et faites de chaque projet 
                  une expérience unique
                </p>
            </div>
          </div>

          <div className="ser-par">
            <div>
              <div className="ser-par1">
                <h2 className="mb-5">
                  Exploration Créative : Nos Services d'Impression
                </h2>
                <p className="fs-p">
                  Découvrez une symphonie d'impressions chez Safa Jet. De la conception unique de logos à l'éclat des bannières grand format, 
                  plongez dans notre gamme de services qui transforment l'ordinaire en extraordinaire. Chaque service est conçu avec soin, guidé par 
                  notre passion pour l'excellence. Explorez nos options variées, où chaque impression devient une œuvre d'art en soi
                </p>
              </div>
              <div className="service-2">
                <h3 className="mb-5 mt-5 ms-4 fw-bold">
                  Impressions Grand Format
                </h3>
                <div className="service-2">
                <div className="card1">
                  <Image
                        src="/service16.jpg"
                        width={350}
                        height={200}
                        className="mx-3"
                      />
                        <Image
                        src="/service17.jpg"
                        width={350}
                        height={200}
                        className="mx-3"
                      />
                        <Image
                        src="/service20.jpg"
                        width={350}
                        height={200}
                        className="mx-3"
                      />
                </div>
                <div class="card2">
                  <Image
                          src="/service18.jpg"
                          width={350}
                          height={200}
                          className="mx-3"
                        />
                          <Image
                          src="/service19.jpg"
                          width={350}
                          height={200}
                          className="mx-3"
                        />
                          <Image
                          src="/service21.jpg"
                          width={350}
                          height={200}
                          className="mx-3"
                    />
                </div>
                </div>
              </div>
              <div className="service-2">
                <h3 className="mb-5 mt-5 ms-4 fw-bold">
                  Imprimés Personnalisés
                </h3>
                <div>
                <div className="card1">
                  <Image
                      src="/service10.jpg"
                      width={350}
                      height={200}
                      className="mx-3"
                    />
                      <Image
                      src="/service13.jpg"
                      width={350}
                      height={200}
                      className="mx-3"
                    />
                      <Image
                      src="/service12.jpg"
                      width={350}
                      height={200}
                      className="mx-3"
                    />
                </div>
                <div className="card2">
                  <Image
                      src="/service11.jpg"
                      width={350}
                      height={200}
                      className="mx-3"
                    />
                      <Image
                      src="/service14.jpg"
                      width={350}
                      height={200}
                      className="mx-3"
                    />
                      <Image
                      src="/service15.jpg"
                      width={350}
                      height={200}
                      className="mx-3"
                    />
                </div>
                </div>
              </div>
              <div className="service-2">
                <h3 className="mb-5 mt-5 ms-4 fw-bold">
                  Produits Promotionnels
                </h3>
                <div>
                <div className="card1">
                <Image
                    src="/service4.jpg"
                    width={350}
                    height={200}
                    className="mx-3"
                  />
                    <Image
                    src="/service5.jpg"
                    width={350}
                    height={200}
                    className="mx-3"
                  />
                    <Image
                    src="/service6.jpg"
                    width={350}
                    height={200}
                    className="mx-3"
                  />
                </div>
                <div class="card2">
                <Image
                    src="/service8.jpg"
                    width={350}
                    height={200}
                    className="mx-3"
                  />
                    <Image
                    src="/service9.jpg"
                    width={350}
                    height={200}
                    className="mx-3"
                  />
                    <Image
                    src="/service7.jpg"
                    width={350}
                    height={200}
                    className="mx-3"
                  />
                </div>
                </div>
              </div>
              <div className="service-2">
                <h3 className="mb-5 mt-5 ms-4 fw-bold">
                  Design Graphique et Personnalisation
                </h3>
                <div className="card1">
                  <Image
                    src="/service2.jpg"
                    width={350}
                    height={200}
                    className="mx-3"
                  />
                    <Image
                    src="/service1.jpg"
                    width={350}
                    height={200}
                    className="mx-3"
                  />
                    <Image
                    src="/service3.jpg"
                    width={350}
                    height={200}
                    className="mx-3"
                  />
                </div>
              </div>
            </div>
          </div>

          <form  className="shadow-lg p-3 mb-5 bg-body-tertiary rounded" id="formcom">
 
          <div className="row mb-4">
            <div className="col">
              <div data-mdb-input-init class="form-outline  border-primary-subtle">
                <input type="text" id="form6Example1" className="form-control" placeholder="Nom" />
              </div>
            </div>
            <div className="col">
              <div data-mdb-input-init class="form-outline  border-primary-subtle">
                <input type="text" id="form6Example2" class="form-control" placeholder="Prenom" />
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col">
              <div data-mdb-input-init class="form-outline  border-primary-subtle">
                <input type="text" id="form6Example1" className="form-control"  placeholder="Telephone"/>
              </div>
            </div>
            <div className="col">
              <div data-mdb-input-init class="form-outline  border-primary-subtle">
                <input type="text" id="form6Example2" class="form-control" placeholder="Adresse email" />
              </div>
            </div>
          </div>
          <div data-mdb-input-init class="form-outline mb-4  border-primary-subtle">
            <textarea class="form-control" id="form6Example7" rows="4" placeholder="Votre message"></textarea>
          </div>
          <button data-mdb-ripple-init type="button" class="btn btn-primary mb-4">Envoyer</button>
        </form>


        </section>

      );
  };
  
  export default Service;