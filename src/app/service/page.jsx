import Image from "next/image";
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'


const Service = () => {

  const isNavbarVisible = true;
  const isFooterVisible = true;

  return (

    <section >
      <Navbar isVisible={isNavbarVisible} />
      <div className="d-flex justify-content-between align-items-center container-fluid h-custom">
        <div className="serv-img">
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
          <div className="service-02">
            <div className="service-2">
              <h3 className="mb-5 mt-5 ms-4 fw-bold">
                Impressions Grand Format
              </h3>
              <div className="card1">

                <div className="main-conteiner">
                  <Image
                    src="/service16.jpg"
                    width={350}
                    height={100}
                    className="main-img"
                  />
                  <div className="overlay">
                    <h6>
                      Créez un impact visuel remarquable avec nos affiches publicitaires grand format. Que ce soit pour promouvoir un événement, présenter un produit ou renforcer la visibilité de votre marque, nos affiches captivent l'attention et transmettent votre message avec éclat.
                    </h6>
                    <h5>
                      Événements
                      <br />
                      Produits
                      <br />
                      Marque
                    </h5>
                  </div>
                </div>
                <div className="main-conteiner">
                  <Image
                    src="/service17.jpg"
                    width={350}
                    height={100}
                    className="main-img"
                  />
                  <div className="overlay">
                    <h6>Créez un impact visuel remarquable avec nos affiches publicitaires grand format. Que ce soit pour promouvoir un événement, présenter un produit ou renforcer la visibilité de votre marque, nos affiches captivent l'attention et transmettent votre message avec éclat.</h6>
                    <h5>
                      Salons et Foires
                      <br />
                      Présentations
                      <br />
                      Promotion d'Entreprise
                    </h5>
                  </div>
                </div>
                <div className="main-conteiner">
                  <Image
                    src="/service20.jpg"
                    width={350}
                    height={100}
                    className="main-img"
                  />
                  <div className="overlay">
                    <h6>
                      Transformez vos espaces avec nos impressions murales sur mesure. Du bureau à la salle d'exposition, créez une ambiance unique avec des œuvres artistiques, des messages inspirants ou la mise en valeur de votre identité visuelle. Laissez vos murs raconter votre histoire.
                    </h6>
                    <h5>
                      Décoration d'Intérieur
                      <br />
                      Identité Visuelle
                      <br />
                      Personnalisation d'Espaces
                    </h5>
                  </div>
                </div>
              </div>
              <div className="card2">

                <div className="main-conteiner">
                  <Image
                    src="/service18.jpg"
                    width={350}
                    height={100}
                    className="main-img"
                  />
                  <div className="overlay">
                    <h6>
                      Faites une impression mémorable lors de salons et expositions avec nos stands personnalisés. De la conception à la réalisation, chaque détail est pensé pour refléter l'essence de votre entreprise. Attirez l'attention et créez des connexions significatives avec un stand qui se démarque.
                    </h6>
                    <h5>
                      Événements Professionnels
                      <br />
                      Salons et Foires
                      <br />
                      Marketing Événementiel
                    </h5>
                  </div>
                </div>
                <div className="main-conteiner">
                  <Image
                    src="/service19.jpg"
                    width={350}
                    height={100}
                    className="main-img"
                  />
                  <div className="overlay">
                    <h6>
                      Faites briller votre message avec nos panneaux publicitaires sur mesure. De la conception percutante à la visibilité maximale, chaque panneau est une déclaration extérieure qui attire l'attention et renforce votre présence.
                    </h6>
                    <h5>
                      Publicité Extérieure
                      <br />
                      Campagnes de Sensibilisation
                      <br />
                      Communication de Marque
                    </h5>
                  </div>
                </div>
                <div className="main-conteiner">
                  <Image
                    src="/service21.jpg"
                    width={350}
                    height={100}
                    className="main-img"
                  />
                  <div className="overlay">
                    <h6>
                      Donnez vie à votre vitrine avec nos adhésifs sur mesure. Des promotions saisonnières aux éléments de branding, créez un impact visuel puissant sur vos clients. Nos adhésifs pour vitrines transforment chaque surface en une toile d'expression créative.
                    </h6>
                    <h5>
                      Boutiques et Commerces
                      <br />
                      Campagnes Promotionnelles
                      <br />
                      Identité Visuelle
                    </h5>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="service-2">
            <h3 className="mb-5 mt-5 ms-4 fw-bold">
              Imprimés Personnalisés
            </h3>
            <div>
              <div className="card1">

                <div className="main-conteiner">
                  <Image
                    src="/service10.jpg"
                    width={350}
                    height={100}
                    className="main-img"
                  />
                  <div className="overlay">
                    <h6>
                      Marquez une première impression mémorable avec nos cartes de visite personnalisées. Alliant design élégant et qualité exceptionnelle, nos cartes renforcent votre professionnalisme et laissent une empreinte durable. Chaque carte est une invitation à la connexion.
                    </h6>
                    <h5>
                      Networking Professionnel
                      <br />
                      Présentation Personnelle
                      <br />
                      Identité de Marque
                    </h5>
                  </div>
                </div>
                <div className="main-conteiner">
                  <Image
                    src="/service13.jpg"
                    width={350}
                    height={100}
                    className="main-img"
                  />
                  <div className="overlay">
                    <h6>
                      Communiquez efficacement avec nos brochures informatives sur mesure. Du contenu captivant à une mise en page impeccable, chaque brochure est conçue pour informer et séduire. Donnez à votre audience une expérience de lecture engageante.</h6>
                    <h5>
                      Présentations Commerciales
                      <br />
                      Documentations Produits
                      <br />
                      Campagnes Marketing
                    </h5>
                  </div>
                </div>
                <div className="main-conteiner">
                  <Image
                    src="/service12.jpg"
                    width={350}
                    height={100}
                    className="main-img"
                  />
                  <div className="overlay">
                    <h6>
                      Libérez votre créativité avec nos flyers uniques. Du design percutant aux messages accrocheurs, chaque flyer est une invitation à l'action. Faites la promotion de vos événements, promotions et offres spéciales avec un impact visuel mémorable.
                    </h6>
                    <h5>
                      Événements Locaux
                      <br />
                      Campagnes Promotionnelles
                      <br />
                      Publicités Ciblées
                    </h5>
                  </div>
                </div>

              </div>
              <div className="card2">

                <div className="main-conteiner">
                  <Image
                    src="/service11.jpg"
                    width={350}
                    height={100}
                    className="main-img"
                  />
                  <div className="overlay">
                    <h6>
                      Créez l'anticipation avec nos invitations uniques. Du design élégant aux détails personnalisés, chaque invitation est conçue pour évoquer l'excitation de votre événement. Laissez une première impression inoubliable et suscitez l'enthousiasme.
                    </h6>
                    <h5>
                      Événements Spéciaux
                      <br />
                      Soirées VIP
                      <br />
                      Célébrations Uniques
                    </h5>
                  </div>
                </div>
                <div className="main-conteiner">
                  <Image
                    src="/service14.jpg"
                    width={350}
                    height={100}
                    className="main-img"
                  />
                  <div className="overlay">
                    <h6>
                      Capturez vos idées avec style grâce à nos carnets et blocs-notes personnalisés. Du cuir luxueux aux designs uniques, chaque pièce est une invitation à la créativité. Offrez à votre audience une expérience d'écriture distinctive et mémorable.
                    </h6>
                    <h5>
                      Cadeaux d'Entreprise
                      <br />
                      Prises de Notes Élégantes
                      <br />
                      Articles Promotionnels Haut de Gamme
                    </h5>
                  </div>
                </div>
                <div className="main-conteiner">
                  <Image
                    src="/service15.jpg"
                    width={350}
                    height={100}
                    className="main-img"
                  />
                  <div className="overlay">
                    <h6>
                      Organisez votre année avec style grâce à nos calendriers personnalisés. Du design créatif aux fonctionnalités pratiques, chaque calendrier est une fusion d'esthétique et d'utilité. Offrez à vos clients et partenaires un outil quotidien unique et mémorable.
                    </h6>
                    <h5>
                      Cadeaux d'Affaires
                      <br />
                      Marketing de Fin d'Année
                      <br />
                      Promotion de Marque Annuelle
                    </h5>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="service-2">
            <h3 className="mb-5 mt-5 ms-4 fw-bold">
              Produits Promotionnels
            </h3>
            <div>
              <div className="card1">

                <div className="main-conteiner">
                  <Image
                    src="/service4.jpg"
                    width={350}
                    height={100}
                    className="main-img"
                  />
                  <div className="overlay">
                    <h6>
                      Portez votre identité avec fierté grâce à nos t-shirts personnalisés. De la conception originale à la qualité du textile, chaque t-shirt est une toile pour exprimer votre style et votre message. Faites passer votre marque à travers la mode.
                    </h6>
                    <h5>
                      Merchandising d'Entreprise
                      <br />
                      Événements d'Équipe
                      <br />
                      Campagnes Promotionnelles
                    </h5>
                  </div>
                </div>
                <div className="main-conteiner">
                  <Image
                    src="/service5.jpg"
                    width={350}
                    height={100}
                    className="main-img"
                  />
                  <div className="overlay">
                    <h6>
                      Savourez chaque gorgée avec nos mugs et tasses personnalisés. De la conception créative à la qualité durable, chaque tasse est une expérience tactile et visuelle. Transformez votre pause-café en un moment de branding unique.</h6>
                    <h5>
                      Cadeaux d'Entreprise
                      <br />
                      Événements Promotionnels
                      <br />
                      Merchandising de Marque
                    </h5>
                  </div>
                </div>
                <div className="main-conteiner">
                  <Image
                    src="/service6.jpg"
                    width={350}
                    height={100}
                    className="main-img"
                  />
                  <div className="overlay">
                    <h6>
                      Écrivez votre histoire avec nos stylos personnalisés. Alliant élégance et praticité, chaque stylo est une déclaration de votre marque. Offrez un outil d'écriture raffiné et mémorable à vos clients, partenaires et employés.
                    </h6>
                    <h5>
                      Cadeaux d'Affaires
                      <br />
                      Événements Corporatifs
                      <br />
                      Articles Promotionnels
                    </h5>
                  </div>
                </div>

              </div>
              <div className="card2">

                <div className="main-conteiner">
                  <Image
                    src="/service7.jpg"
                    width={350}
                    height={100}
                    className="main-img"
                  />
                  <div className="overlay">
                    <h6>
                      Soyez la tête d'affiche avec nos casquettes et chapeaux promotionnels. Du style moderne à la visibilité de votre logo, chaque pièce est conçue pour attirer l'attention. Faites de votre tête un espace promotionnel unique.
                    </h6>
                    <h5>
                      Événements en Extérieur
                      <br />
                      Campagnes de Marque
                      <br />
                      Merchandising de Mode
                    </h5>
                  </div>
                </div>
                <div className="main-conteiner">
                  <Image
                    src="/service9.jpg"
                    width={350}
                    height={100}
                    className="main-img"
                  />
                  <div className="overlay">
                    <h6>
                      Affrontez la pluie avec style grâce à nos parapluies personnalisés. Du design moderne à la robustesse face aux intempéries, chaque parapluie est une déclaration de votre marque même sous la pluie. Offrez une protection élégante à vos clients.</h6>
                    <h5>
                      Cadeaux d'Entreprise
                      <br />
                      Événements en Extérieur
                      <br />
                      Articles Promotionnels de Saison
                    </h5>
                  </div>
                </div>
                <div className="main-conteiner">
                  <Image
                    src="/service8.jpg"
                    width={350}
                    height={100}
                    className="main-img"
                  />
                  <div className="overlay">
                    <h6>
                      Emportez votre marque partout avec nos porte-clés publicitaires. Du design créatif à la praticité quotidienne, chaque porte-clés est une opportunité de rappeler votre message. Offrez un accessoire pratique et mémorable à vos clients.
                    </h6>
                    <h5>
                      Cadeaux d'Entreprise
                      <br />
                      Événements Promotionnels
                      <br />
                      Merchandising de Marque
                    </h5>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="service-2">
            <h3 className="mb-5 mt-5 pl-5 fw-bold">
              Design Graphique et Personnalisation

            </h3>
            <div className="row gap-3 d-flex align-items-center justify-content-center">

              <div className="col-sm-12 col-md-12 col-lg-3">
                <Image
                  src="/service2.jpg"
                  width={350}
                  height={100}
                  layout="responsive"
                  className="main-img"
                />
                <div className="overlay">
                  <h6>
                    Façonnez l'essence de votre entreprise avec notre service de conception de logo. Du concept initial à la version finale, chaque logo est créé sur mesure pour représenter votre identité unique. Donnez vie à votre marque avec un logo distinctif et mémorable.
                  </h6>
                  <h5>
                    Nouvelles Entreprises
                    <br />
                    Refonte d'Identité
                    <br />
                    Différenciation de Marque
                  </h5>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-3">
                <Image
                  src="/service1.jpg"
                  width={350}
                  height={100}
                  layout="responsive"
                  className="main-img"
                />
                <div className="overlay">
                  <h6>
                    Explorez le pouvoir narratif de nos magazines personnalisés. De la mise en page artistique aux contenus captivants, chaque page raconte une histoire unique. Offrez à votre audience une expérience de lecture immersive avec des magazines qui captivent et engagent.</h6>
                  <h5>
                    Publications d'Entreprise
                    <br />
                    Magazines Promotionnels
                    <br />
                    Contenu Éditorial
                  </h5>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-3">
                <Image
                  src="/service3.jpg"
                  width={350}
                  height={100}
                  layout="responsive"
                  className="main-img"
                />
                <div className="overlay">
                  <h6>
                    Élevez votre présence avec notre service de stratégie marketing imprimé. Des campagnes ciblées aux supports promotionnels, chaque stratégie est conçue pour maximiser votre visibilité. Intégrez le pouvoir de l'impression dans votre stratégie globale de marketing.
                  </h6>
                  <h5>
                    Campagnes Promotionnelles
                    <br />
                    Lancement de Produits
                    <br />
                    Accroître la Notoriété de Marque
                  </h5>
                </div>
              </div>
            </div>




          </div>
        </div>
      </div>

      <form className="shadow-lg p-3 mb-5 bg-body-tertiary rounded mb-50 container" id="formcom">

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
              <input type="text" id="form6Example1" className="form-control" placeholder="Telephone" />
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
        <button data-mdb-ripple-init type="button" class="btn btn-primary mb-4 rounded">Envoyer</button>
      </form>


      <Footer isVisible={isFooterVisible} />
    </section>
  );
};

export default Service;