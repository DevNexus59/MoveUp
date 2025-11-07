import "./MentionsLegales.css";

function MentionsLegales() {

  const SITE_NAME = "MoveUp";
  const SITE_URL = "https://www.moveup.fr";
  const PUBLISHER_NAME = "Leah François";
  const PUBLISHER_ADDRESS = "12 rue Cavalloti, 75018 Paris, France";
  const PUBLISHER_NATIONALITY = "Irlandaise (Irlande)";
  const PUBLISHER_BIRTH_ISO = "1996-05-25";
  const HOST_NAME = "Shopify Inc. (à confirmer)";
  const HOST_ADDRESS = "Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA";
  const HOST_PHONE = "(+1) 650 253 0000";
  const DPO_NAME = "Aurélie Dumotier";
  const DPO_EMAIL = "moveup@moveup.com";
  const DPO_PHONE = "+33 6 06 06 06 06";
  const DPO_ADDRESS = "11 rue Pasteur, 75012 Paris, France";
  const DPO_CNIL_NUMBER = "1734585";

  const CONTACT_PHONE = "+33 6 66 66 66 66";
  const CONTACT_EMAIL = "moveup@moveup.com";
  const CONTACT_POSTAL = PUBLISHER_ADDRESS;

  return (
    <main className="mentionlgl">
      <h1>Informations légales — {SITE_NAME}</h1>
      <p>
        Ce document regroupe les <strong>Mentions légales</strong>, les{" "}
        <strong>Conditions Générales d'Utilisation (CGU)</strong>, la{" "}
        <strong>Politique de confidentialité (RGPD)</strong>, la{" "}
        <strong>Politique cookies</strong> et les{" "}
        <strong>Conditions Générales de Vente (CGV)</strong> du site{" "}
        <a href={SITE_URL}>{SITE_URL}</a>.
      </p>

      <nav aria-label="Sommaire">
        <ol>
          <li><a href="#mentions">Mentions légales</a></li>
          <li><a href="#cgu">CGU — Conditions d'utilisation</a></li>
          <li><a href="#confidentialite">Politique de confidentialité (RGPD)</a></li>
          <li><a href="#cookies">Politique cookies</a></li>
          <li><a href="#cgv">CGV — Conditions de vente</a></li>
        </ol>
      </nav>

      <section id="mentions" aria-labelledby="mentions-title">
        <h2 id="mentions-title">Mentions légales</h2>
        <p>
          Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance
          dans l'économie numérique, il est précisé aux utilisateurs du site{" "}
          <strong>{SITE_NAME}</strong> l'identité des intervenants.
        </p>

        <h3>Édition du site</h3>
        <p>
          Le présent site, accessible à l'URL{" "}
          <a href={SITE_URL}>{SITE_URL.replace("https://", "www.")}</a> (le « Site »), est édité par&nbsp;:
        </p>
        <address>
          <div><strong>{PUBLISHER_NAME}</strong></div>
          <div>{PUBLISHER_ADDRESS}</div>
          <div>Nationalité : {PUBLISHER_NATIONALITY}</div>
          <div>
            Né(e) le{" "}
            <time dateTime={PUBLISHER_BIRTH_ISO}>
              {new Date(PUBLISHER_BIRTH_ISO).toLocaleDateString("fr-FR")}
            </time>
          </div>
        </address>

        <h3>Hébergement</h3>
        <p>
          Le Site est hébergé par <strong>{HOST_NAME}</strong>, situé{" "}
          <strong>{HOST_ADDRESS}</strong> (téléphone : {HOST_PHONE}).
        </p>

        <h3>Directeur de la publication</h3>
        <p>Le Directeur de la publication est <strong>{PUBLISHER_NAME}</strong>.</p>

        <h3>Nous contacter</h3>
        <ul>
          <li>Téléphone : <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE}</a></li>
          <li>Email : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
          <li>Courrier : <address>{CONTACT_POSTAL}</address></li>
        </ul>
      </section>


      <section id="cgu" aria-labelledby="cgu-title">
        <h2 id="cgu-title">Conditions générales d'utilisation (CGU)</h2>

        <h3>2. Conditions générales d'utilisation du site et des services proposés</h3>
        <p>
          Le Site constitue une œuvre de l'esprit protégée par le Code de la Propriété Intellectuelle
          et les réglementations internationales applicables. Le Client ne peut en aucune manière
          réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du Site.
        </p>
        <p>
          L'utilisation du site <a href={SITE_URL}>{SITE_URL}</a> implique l'acceptation pleine et entière
          des présentes conditions générales d'utilisation. Elles sont susceptibles d'être modifiées à tout
          moment ; les utilisateurs sont donc invités à les consulter régulièrement.
        </p>
        <p>
          Le site est normalement accessible à tout moment. Une interruption pour maintenance technique peut
          toutefois être décidée ; nous nous efforcerons alors de communiquer préalablement les dates et heures
          d'intervention. Le site est mis à jour régulièrement ; les mentions légales peuvent être modifiées
          à tout moment et s'imposent à l'utilisateur.
        </p>

        <h3>3. Description des services fournis</h3>
        <p>
          Le site <a href={SITE_URL}>{SITE_URL}</a> a pour objet de fournir une information concernant
          l'ensemble des activités de {SITE_NAME}. Malgré nos soins, nous ne saurions être tenus responsables
          des omissions, inexactitudes ou carences de mise à jour, qu'elles soient de notre fait ou du fait
          de tiers partenaires.
        </p>
        <p>
          Toutes les informations sont données à titre indicatif et sont susceptibles d'évoluer. Les contenus
          ne sont pas exhaustifs et sont fournis sous réserve de modifications depuis leur mise en ligne.
        </p>

        <h3>4. Limitations contractuelles sur les données techniques</h3>
        <p>
          Le site utilise notamment la technologie JavaScript. L'utilisateur s'engage à accéder au site avec
          un matériel récent, exempt de virus, et un navigateur à jour. L'hébergeur assure une haute disponibilité
          mais peut interrompre le service pour maintenance, amélioration d'infrastructure, défaillance ou trafic
          anormal.
        </p>

        <h3>5. Propriété intellectuelle et contrefaçons</h3>
        <p>
          {SITE_URL} est propriétaire des droits de propriété intellectuelle et détient les droits d'usage sur
          l'ensemble des éléments du site (textes, images, graphismes, logos, vidéos, icônes, sons), sauf mention
          contraire. Toute reproduction/adaptation est interdite sans autorisation écrite préalable.
        </p>

        <h3>6. Limitations de responsabilité</h3>
        <p>
          {SITE_URL} agit en tant qu'éditeur et est responsable des contenus publiés, sous réserve des limites
          légales. Nous ne saurions être responsables des dommages directs/indirects causés au matériel de
          l'utilisateur lors de l'accès au site, résultant notamment d'un matériel inadapté, d'un bug ou d'une
          incompatibilité.
        </p>
        <p>
          Des espaces interactifs (ex. formulaire de contact) peuvent être proposés. Nous nous réservons le droit
          de supprimer sans mise en demeure tout contenu contrevenant à la loi (données personnelles, propos
          racistes, injurieux, diffamatoires ou pornographiques…), et d'engager la responsabilité civile et/ou
          pénale de l'utilisateur si nécessaire.
        </p>

        <h3>7. Gestion des données personnelles</h3>
        <p>
          Les règles de traitement des données sont détaillées dans la section{" "}
          <a href="#confidentialite">Politique de confidentialité</a>.
        </p>

        <h3>8. Notification d'incident — Sécurité</h3>
        <p>
          Malgré nos efforts, aucune méthode de transmission/stockage n'est totalement sûre. En cas de violation
          de données, nous informerons les utilisateurs concernés conformément aux obligations légales.
        </p>

        <h3>9. Liens hypertextes, cookies et balises internet</h3>
        <p>
          Le site peut contenir des liens vers d'autres sites ; nous n'en contrôlons pas le contenu et déclinons
          toute responsabilité à ce titre. La gestion des cookies et balises est décrite dans la section{" "}
          <a href="#cookies">Politique cookies</a>.
        </p>

        <h3>10. Droit applicable et attribution de juridiction</h3>
        <p>
          Le droit français s'applique. À défaut de résolution amiable, compétence attribuée aux tribunaux
          territorialement compétents. 
        </p>
      </section>


      <section id="confidentialite" aria-labelledby="conf-title">
        <h2 id="conf-title">Politique de confidentialité (RGPD)</h2>

        <h3>Responsable de traitement &amp; DPO</h3>
        <p>
          Responsable : <strong>{PUBLISHER_NAME}</strong>, {PUBLISHER_ADDRESS}. DPO :{" "}
          <strong>{DPO_NAME}</strong> — <a href={`mailto:${DPO_EMAIL}`}>{DPO_EMAIL}</a> — {DPO_PHONE} —{" "}
          {DPO_ADDRESS}. Désignation CNIL : {DPO_CNIL_NUMBER}.
        </p>

        <h3>Données traitées, finalités et bases légales</h3>
        <ul>
          <li>Navigation (logs, pages vues, cookies) — intérêt légitime / consentement.</li>
          <li>Compte/commande (identité, coordonnées, facturation) — exécution du contrat / obligations légales.</li>
          <li>Contact/support — intérêt légitime / mesures précontractuelles.</li>
          <li>Prospection — consentement (ou intérêt légitime B2B selon cas).</li>
        </ul>

        <h3>Destinataires &amp; transferts</h3>
        <p>
          Accès restreint aux équipes habilitées et à nos sous-traitants (hébergement, paiement, emailing, mesure
          d'audience), soumis à confidentialité et sécurité. En cas de transferts hors UE, nous utilisons les
          mécanismes légaux (clauses types, mesures complémentaires).
        </p>

        <h3>Durées de conservation</h3>
        <ul>
          <li>Compte/commande : pendant la relation puis archivage légal.</li>
          <li>Prospection : 3 ans après dernier contact.</li>
          <li>Cookies : selon nature (cf. Politique cookies).</li>
          <li>Logs sécurité : quelques mois selon finalité.</li>
        </ul>

        <h3>Vos droits</h3>
        <p>
          Droits d'accès, rectification, effacement, opposition, limitation, portabilité, directives post-mortem.
          Exercice auprès du DPO : <a href={`mailto:${DPO_EMAIL}`}>{DPO_EMAIL}</a>. Réclamation possible auprès de la{" "}
          <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noreferrer">CNIL</a>.
        </p>
      </section>

      <section id="cookies" aria-labelledby="cookies-title">
        <h2 id="cookies-title">Politique cookies</h2>

        <h3>Qu'est-ce qu'un cookie ?</h3>
        <p>
          Un « cookie » est un fichier déposé sur votre terminal lors de la consultation du site. Certains
          sont strictement nécessaires au fonctionnement et ne requièrent pas de consentement.
        </p>

        <h3>Consentement &amp; vos choix</h3>
        <p>
          À votre première visite, un bandeau permet d'<strong>accepter</strong>,{" "}
          <strong>refuser</strong> ou <strong>paramétrer</strong> les cookies non essentiels, avec la
          même simplicité. Vous pouvez modifier vos choix à tout moment via « Paramétrer les cookies » en pied de page.
        </p>

        <h3>Liste des cookies (à compléter)</h3>
        <ul>
          <li>ex. <code>_ga</code> (Google Analytics) — mesure d'audience — 13 mois — consentement.</li>
          <li>ex. <code>session_id</code> — authentification — durée de session — intérêt légitime.</li>
        </ul>
      </section>


      <section id="cgv" aria-labelledby="cgv-title">
        <h2 id="cgv-title">Conditions Générales de Vente (CGV)</h2>

        <h3>Objet</h3>
        <p>
          Les présentes conditions régissent les ventes réalisées par {SITE_NAME} (« le Vendeur ») auprès
          de consommateurs et/ou professionnels (« le Client »).
        </p>

        <h3>Produits/Services</h3>
        <p>
          Les caractéristiques essentielles et les prix sont précisés sur les fiches produit et/ou devis.
          Les visuels n'ont pas de valeur contractuelle.
        </p>

        <h3>Commande</h3>
        <p>
          La commande est ferme après validation du paiement et confirmation par email. Nous nous réservons
          le droit de refuser toute commande anormale ou de mauvaise foi.
        </p>

        <h3>Prix &amp; paiement</h3>
        <p>
          Prix en EUR, toutes taxes comprises sauf mention contraire. Moyens de paiement indiqués lors de la
          commande. Facture émise à l'adresse fournie.
        </p>

        <h3>Livraison / Exécution</h3>
        <p>
          Délais indicatifs ; transfert des risques selon remise effective. En cas de retard anormal, vous
          pouvez demander l'annulation et le remboursement dans le cadre légal.
        </p>

        <h3>Droit de rétractation (consommateurs)</h3>
        <p>
          14 jours à compter de la réception (exclusions légales à adapter : biens personnalisés, services
          pleinement exécutés avant fin de délai, contenus numériques non fournis sur support matériel après
          consentement, etc.).
        </p>

        <h3>Garanties légales</h3>
        <p>
          Garantie légale de conformité et des vices cachés selon le droit applicable.
        </p>

        <h3>Responsabilité</h3>
        <p>
          Le Vendeur n'est responsable que des dommages directs et prévisibles résultant d'un manquement
          contractuel dûment prouvé.
        </p>

        <h3>Données personnelles</h3>
        <p>
          Voir <a href="#confidentialite">Politique de confidentialité</a>.
        </p>

        <h3>Médiation / Service client</h3>
        <p>
          Contact : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. {DPO_CNIL_NUMBER}
        </p>

        <h3>Droit applicable — Juridiction</h3>
        <p>
          Droit français. Compétence des juridictions françaises, sans priver le consommateur des règles
          protectrices de son pays de résidence.
        </p>
      </section>
    </main>
  );
}

export default MentionsLegales;