import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";

const About = () => {
  const isNavbarVisible = true;
  const isFooterVisible = true;

  return (
    <section>
      <Navbar isVisible={isNavbarVisible} />
      <section className="container pt-5">
        <h1 className="mx-2 mb-5 text-orange">À Propos de Safa Jet</h1>

        <div className="card gradient-orange-1 ">
          <div className="card-body">
            <h5 className="card-title fs-4 fw-bold mb-4 mt-3 text-orange">
              Safa Jet : Nourrissez votre créativité avec des impressions
              exceptionnelles, où chaque détail prend vie et chaque couleur
              raconte une histoire unique.
            </h5>
            <p className="card-text">
              Chez Safa Jet, notre engagement envers l'innovation et la qualité
              se reflète dans chacun de nos services d'impression numérique.
              Nous sommes fiers d'offrir une gamme complète de solutions pour
              répondre à vos besoins créatifs et commerciaux. Explorez notre
              palette de services exceptionnels qui transcendent les attentes.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center flex-column">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <Image src="/icon1.png" width={50} height={50} className="mx-3" />
              <span className="span_title text-orange">Notre Mission</span>
              <p className="mt-3">
                Chez Safa Jet, notre mission est claire : transformer vos idées
                en œuvres d'art imprimées exceptionnelles. Que vous recherchiez
                des impressions grand format qui ne passent pas inaperçues, des
                imprimés personnalisés qui reflètent votre identité, des
                produits promotionnels innovants ou un service de design
                graphique de pointe, nous sommes là pour donner vie à votre
                vision.
              </p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <Image
                src="/about1.jpg"
                width={600}
                height={350}
                className="mb-5"
                id="about-img1"
                alt="c'est moi"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <Image src="/icon2.png" width={50} height={50} className="mx-3" />
              <span className="span_title text-orange">Notre Engagement</span>
              <p className="mt-3">
                Créativité sans Limites : Chaque projet est une opportunité
                d'exprimer notre créativité débordante. Nous repoussons les
                limites pour offrir des solutions uniques et mémorables.{" "}
              </p>
              <p className="mt-3">
                Qualité Inégalée : Nous croyons en l'excellence à chaque étape.
                De la conception à l'impression, la qualité est notre signature.{" "}
              </p>
              <p className="mt-3">
                Partenariat de Confiance : Nous établissons des relations
                solides avec nos clients. Votre succès est notre succès, et nous
                sommes déterminés à être votre partenaire de confiance dans tous
                vos projets d'impression
              </p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <Image
                src="/about1.jpg"
                width={600}
                height={350}
                className="mb-5"
                id="about-img1"
                alt="c'est moi"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <Image src="/icon3.png" width={50} height={50} className="mx-3" />
              <span className="span_title text-orange">Notre Histoire</span>
              <p className="mt-3">
                Depuis notre création, nous avons eu le privilège de travailler
                avec des clients diversifiés, des petites entreprises aux
                grandes marques. Chaque projet nous inspire à repousser les
                frontières de la créativité et à fournir des résultats qui
                dépassent les attentes.
              </p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <Image
                src="/about2.jpg"
                width={600}
                height={350}
                id="about-img1"
                alt="c'est moi"
              />
            </div>
          </div>
        </div>

        <div className="mb-50 container">
          <Form />
        </div>
      </section>
      <Footer isVisible={isFooterVisible} />
    </section>
  );
};

export default About;
