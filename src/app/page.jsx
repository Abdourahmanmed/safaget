import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const Home = () => {
  const isNavbarVisible = true;
  const isFooterVisible = true;
  const page = true;
  const colors = true;
  return (
    <section>
      <Navbar isVisible={isNavbarVisible} Accueil={page} Acolors={colors} />
      <div className="accueil-img d-flex">
        <div className="container d-flex justify-content-center align-items-start flex-column">
          <h2 className="text-orange fw-bolder mb-4">
            Explorez l'Art de <br /> l'Impression Numérique
          </h2>
          <p className="text-dark mb-5">
            Des créations époustouflantes, une qualité inégalée, Votre Vision,
            <br />
            notre métier. Transformez vos idées en réalité visuelle
            exceptionnelle <br />
            avec notre impression numérique de pointe
          </p>
          <button type="button" href="/about" className="btn1 text-white">
            En savoir plus
          </button>
        </div>
      </div>
      <div className="container-fluid flex-column p-5 bg-orange">
        <div className="row text-center">
          <h3 className="fw-bold text-orange">Safajet</h3>
          <h2 className="fw-bold text-center">
            Transformez vos idées en réalité visuelle <br />
            exceptionnelle avec notre impression <br /> numérique de pointe !
          </h2>
          <p className="text-center">
            Chez Safa Jet, notre engagement envers l'innovation et la qualité se
            reflète dans chacun <br />
            de nos services d'impression numérique.Nous sommes fiers d'offrir
            une gamme complète <br /> de solutions pour répondre à vos besoins
            créatifs et commerciaux. Explorez notre <br />
            palette de services exceptionnels qui transcendent les attentes.
          </p>
        </div>
        <div className="row mt-5 gap-1">
          <div className="col-md-6 mx-auto">
            <h3 className="fw-bolder text-orange pb-5">Pourquoi Safa Jet ?</h3>
            <h2>
              La réponse à vos besoins <br /> d'impression numérique
            </h2>
            <p>
              Chez Safa Jet, nous croyons en la puissance de la créativité et de
              l'innovation pour transformer vos idées en œuvres visuelles
              exceptionnelles. En tant que leader dans le domaine de
              l'impression numérique, nous nous engageons à offrir bien plus que
              des services d'impression standard.
            </p>
            <a className="text-orange text-decoration-none" href="/about">
              En savoir plus →
            </a>
          </div>
          <div className="col-md-5 text-center">
            <Image
              src="/Equipe123.png"
              width={450}
              height={300}
              // layout="responsive"
              className="img-fluid"
              alt="c'est moi"
            />
          </div>
        </div>
      </div>

      <div className="acc-parr">
        <div className="acc-parr-1">
          <h2 className="fs-5 text-orange">Nos Services</h2>
          <p className="fs-5 fw-bold">
            Découvrez l'excellence de nos Services d'impression numérique chez
            Safa Jet
          </p>
        </div>
        <div className="acc-parr-2">
          <p className="">
            Chez Safa Jet, notre engagement envers l'innovation et la qualité se
            reflète dans chacun de nos services d'impression numérique. Nous
            sommes fiers d'offrir une gamme complète de solutions pour répondre
            à vos besoins créatifs et commerciaux.
          </p>
          <a className="icon-link" href="/service">
            En savoir plus
            <svg className="bi" aria-hidden="true"></svg>
          </a>
        </div>
      </div>

      <div className="accT  pb-4">
        <div className="container">
          <h2 className="text-orange">Témoignages Clients</h2>
          <p className="acc-tem-1 ">
            L'engagement envers la satisfaction client chez Safa Jet se traduit
            par une communauté de clients satisfaits. Découvrez ce que nos
            clients ont à dire sur leur expérience avec nous
          </p>

          <div className="container-fluid acct-img">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-sm-12">
                <Image
                  src="/accueil4.jpg"
                  width={235}
                  height={200}
                  className="object-fit-cover"
                  alt="c'est moi"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 p-4">
                <h4 className="fs-5 pb-3 text-white text">
                  "Une Équipe Exceptionnelle"
                </h4>
                <p className="fs-p text-white text">
                  “Safa Jet ne se contente pas de répondre aux attentes, ils les
                  dépassent. Travailler avec eux a été une expérience
                  exceptionnelle, du début à la fin. Leur équipe dévouée et
                  compétente a une manière unique de transformer des concepts en
                  réalité imprimée.”
                </p>
                <h4 className="fs-5 pb-3 text-white text">
                  "Créativité Sans Limite"
                </h4>
                <p className="fs-p text-white text">
                  “La créativité chez Safa Jet est vraiment sans limite. Ils ont
                  une compréhension profonde de notre vision et la traduisent
                  magnifiquement dans chaque impression. C'est un plaisir de
                  collaborer avec une équipe aussi talentueuse.”
                </p>
                <h4 className="fs-5 pb-3 text-white text">
                  "Qualité Inégalée"
                </h4>
                <p className="fs-p text-white text">
                  “La qualité de l'impression chez Safa Jet est inégalée. Chaque
                  détail est pris en compte, et le résultat final est toujours
                  impeccable. Nous avons trouvé en eux un partenaire de
                  confiance pour tous nos besoins d'impression.”
                </p>
                <h4 className="fs-5 pb-3 text-white text">
                  "Réactivité et Professionnalisme"
                </h4>
                <p className="fs-p text-white text">
                  “La réactivité et le professionnalisme de Safa Jet sont
                  vraiment appréciables. Ils comprennent l'importance des délais
                  et font tout pour garantir des livraisons ponctuelles sans
                  compromis sur la qualité. Une entreprise fiable à tous
                  égards.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="acc-realiser">
        <div className="container">
          <h4 className="fs-4 mx-5 mb-3 text-orange">Nos Réalisations</h4>
          <h3 className="fs-3 mx-5 mb-3">
            Découvrez nos réalisations exceptionnelles dans notre Portfolio.
          </h3>
          <p className="fs-p mx-5 mb-5">
            Découvrez notre expertise à travers une collection captivante de
            projets réalisés avec passion et précision. <br /> Notre portfolio
            est le reflet de notre engagement envers l'excellence, illustrant
            comment Safa Jet transforme <br /> les concepts créatifs en
            impressions numériques exceptionnelles.
          </p>
          <div class="content">
            <div class="container rounded">
              <div class="rollers position-relative overflow-hidden">
                <div class="start-roller"></div>
                <div class="wrapper">
                  <div class="items-container roll-LL">
                    <div class="item">
                      <Image
                        src="/service1.jpg"
                        width={200}
                        height={200}
                        alt="c'est moi"
                      />
                    </div>
                    <div class="item">
                      <Image
                        src="/service2.jpg"
                        width={200}
                        height={200}
                        alt="c'est moi"
                      />
                    </div>
                    <div class="item">
                      <Image
                        src="/service3.jpg"
                        width={200}
                        height={200}
                        alt="c'est moi"
                      />
                    </div>
                    <div class="item">
                      <Image
                        src="/service4.jpg"
                        width={200}
                        height={200}
                        alt="c'est moi"
                      />
                    </div>
                    <div class="item">
                      <Image
                        src="/service5.jpg"
                        width={200}
                        height={200}
                        alt="c'est moi"
                      />
                    </div>
                  </div>
                  <div class="items-container roll-RL">
                    <div class="item">
                      <Image
                        src="/service16.jpg"
                        width={200}
                        height={200}
                        alt="c'est moi"
                      />
                    </div>
                    <div class="item">
                      <Image
                        src="/service17.jpg"
                        width={200}
                        height={200}
                        alt="c'est moi"
                      />
                    </div>
                    <div class="item">
                      <Image
                        src="/service18.jpg"
                        width={200}
                        height={200}
                        alt="c'est moi"
                      />
                    </div>
                    <div class="item">
                      <Image
                        src="/service19.jpg"
                        width={200}
                        height={200}
                        alt="c'est moi"
                      />
                    </div>
                    <div class="item">
                      <Image
                        src="/service21.jpg"
                        width={200}
                        height={200}
                        alt="c'est moi"
                      />
                    </div>
                  </div>
                </div>
                <div class="wrapper">
                  <div class="items-container reverse-roll-LL">
                    <div class="item">
                      <Image
                        src="/service6.jpg"
                        width={200}
                        height={200}
                        alt="c'est moi"
                      />
                    </div>
                    <div class="item">
                      <Image
                        src="/service7.jpg"
                        width={200}
                        height={200}
                        alt="c'est moi"
                      />
                    </div>
                    <div class="item">
                      <Image
                        src="/service8.jpg"
                        width={200}
                        height={200}
                        alt="c'est moi"
                      />
                    </div>
                    <div class="item">
                      <Image
                        src="/service9.jpg"
                        width={200}
                        height={200}
                        alt="c'est moi"
                      />
                    </div>
                    <div class="item">
                      <Image
                        src="/service.jpg"
                        width={200}
                        height={200}
                        alt="c'est moi"
                      />
                    </div>
                  </div>
                  <div class="items-container reverse-roll-RL">
                    <div class="item">
                      <Image
                        src="/service10.jpg"
                        width={200}
                        height={200}
                        alt="c'est moi"
                      />
                    </div>
                    <div class="item">
                      <Image
                        src="/service11.jpg"
                        width={200}
                        height={200}
                        alt="c'est moi"
                      />
                    </div>
                    <div class="item">
                      <Image
                        src="/service12.jpg"
                        width={200}
                        height={200}
                        alt="c'est moi"
                      />
                    </div>
                    <div class="item">
                      <Image
                        src="/service13.jpg"
                        width={200}
                        height={200}
                        alt="c'est moi"
                      />
                    </div>
                    <div class="item">
                      <Image
                        src="/service14.jpg"
                        width={200}
                        height={200}
                        alt="c'est moi"
                      />
                    </div>
                    <div class="item">
                      <Image
                        src="/service15.jpg"
                        width={200}
                        height={200}
                        alt="c'est moi"
                      />
                    </div>
                  </div>
                  <div className="end-roller"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="containe-fluid flex-column p-5">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h4>Nos Partenaires de Confiance</h4>
            <h3 className="fs-3 fw-bold">
              Des partenariats solides, une excellence constante
            </h3>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <p className="fs-p">
              Chez Safa Jet, nous sommes fiers de collaborer avec des
              partenaires de confiance qui partagent notre engagement envers
              l'excellence et l'innovation. Ces relations stratégiques
              renforcent notre capacité à offrir des services d'impression
              numérique de premier ordre. Découvrez les entreprises et
              organisations qui font partie de notre réseau de confiance
            </p>
          </div>
        </div>
        <div className="row p-4 gap-5">
          <div className="col-lg-2 col-md-4 col-sm-12 text-center">
            <Image
              src="/logo1.png"
              width={200}
              height={90}
              className="parimg align-self-center"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 text-start">
            <Image
              src="/logo2.png"
              width={400}
              height={70}
              className="parimg align-self-center"
            />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12 text-center">
            <Image
              src="/logo3.png"
              width={140}
              height={140}
              className="parimg"
            />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12 text-center">
            <Image
              src="/logo4.png"
              width={180}
              height={90}
              className="parimg align-self-center"
            />
          </div>
        </div>
        <div className="row p-4 gap-3">
          <div className="col-lg-2 col-md-4 col-sm-12 text-center">
            <Image
              src="/logo5.png"
              width={190}
              height={100}
              className="parimg align-self-center"
            />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12 text-end ">
            <Image
              src="/logo6.png"
              width={150}
              height={100}
              className="parimg align-self-center"
            />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12 text-center">
            <Image
              src="/logo7.png"
              width={100}
              height={100}
              className="parimg"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <Image
              src="/logo8.png"
              width={300}
              height={70}
              className="parimg align-self-center"
            />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12 text-center">
            <Image
              src="/logo9.png"
              width={120}
              height={100}
              className="parimg align-self-center"
            />
          </div>
        </div>
      </div>

      <div className="container mb-50-1 pt-5">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h3 className="fs-2 mb-4 text-orange">Contactez-nous</h3>
            <p>
              Que ce soit pour discuter de vos besoins d'impression numérique,
              obtenir des informations supplémentaires sur nos services, ou pour
              toute autre demande, l'équipe de Safa Jet est à votre disposition.
              N'hésitez pas à nous contacter selon vos préférences :
            </p>
            <div>
              <div className="d-flex align-items-center mb-2">
                <Image
                  src="/icon0.png"
                  width={40}
                  height={40}
                  className="me-2 mb-0"
                />
                <span>Centre-Ville, Rue de Berne, Djibouti</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <Image
                  src="/icon9.png"
                  width={25}
                  height={25}
                  className="me-3"
                />
                <span>+253 77 86 11 43 / +253 77 22 63 43</span>
              </div>
              <div className="d-flex align-items-center">
                <Image
                  src="/icon8.png"
                  width={25}
                  height={25}
                  className="me-3"
                />
                <span>safajetdjib@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <form
              className="shadow-lg p-3 bg-body-tertiary rounded"
              id="formcom"
            >
              <h4 className="text-orange text-uppercase pb-4">
                envoyer un message
              </h4>
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
          </div>
        </div>
      </div>

      <Footer isVisible={isFooterVisible} />
    </section>
  );
};

export default Home;
