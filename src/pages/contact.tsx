import Page from "@/layout/page";
import Section from "@/components/presentation/section";

export default function Contact() {
  return (
    <Page>
      <main>
        <h1>Contact</h1>
        <Section title="Des questions?">
          <p>
            Contactez l'équipe du pôle Système d'Informations du Parc national
            des Ecrins
          </p>
          <dl>
            <dt>Par appel</dt>
            <dd>XX-XX-XX-XX-XX</dd>
            <dt>Par mail</dt>
            <dd>XX@XX.XX</dd>
          </dl>
          <p>
            Si votre question concerne le Dépôt légal de Biodiversité, utilisez
            la documentation et le formulaire de contact sur le{" "}
            <a href="https://depot-legal-biodiversite.naturefrance.fr">
              site dédié
            </a>
            .
          </p>
        </Section>
        <Section title="Discussions">
          <p>
            Inscrivez-vous à{" "}
            <a href="https://framalistes.org/sympa/info/geonature-info">
              la liste de discussion d'information générale du projet
            </a>
            .
          </p>
          <p>
            Pour tout échange ou question technique, reportez-vous aux{" "}
            <a href="https://github.com/PnX-SI/">dépôts GitHub</a> des
            différents projets
          </p>
        </Section>
        <Section title="Utilisateurs">
          <p>
            Consultez la{" "}
            <a
              href="https://lite.framacalc.org/9efn-geonature-users"
              target="_blank"
            >
              liste des utilisateurs
            </a>{" "}
            de GeoNature
          </p>
        </Section>
      </main>
    </Page>
  );
}