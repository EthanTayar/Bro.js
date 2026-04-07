import { useMemo, useState } from "react";

export default function App() {
  const commandments = [
    "Tu ne duo point avec un autre si ton bro est disponible.",
    "Tu ne parleras point à l'ex d'un bro sans feu vert clair.",
    "Tu ne lanceras point une game classée en secret.",
    "Tu n'abandonneras point ton bro en pleine soirée.",
    "Tu répondras quand un bro demande un avis sérieux.",
    "Tu ne voleras point une idée déjà appelée par un bro.",
    "Tu ne flexeras point après avoir été carry.",
    "Tu respecteras les plans fixés entre bros.",
    "Tu défendras ton bro en public, puis tu le recadreras en privé.",
    "Tu diras toujours la vérité quand le bro code est en jeu.",
  ];

  const extraLaws = [
    {
      title: "Gaming",
      laws: [
        "Pas de double-up avec un autre duo si ton teammate habituel est connecté.",
        "Pas de ranked à 2 avec un remplaçant sans prévenir.",
        "Si tu tilt, tu annonces la dernière game avant de disparaître.",
      ],
    },
    {
      title: "Relations",
      laws: [
        "Pas de move ambigu sur une personne qu'un bro aime déjà.",
        "Pas de screenshot privé envoyé à d'autres sans accord.",
        "Tu conseilles honnêtement, même si la vérité pique.",
      ],
    },
    {
      title: "Vie quotidienne",
      laws: [
        "Tu ne laisses pas un bro rentrer seul s'il est mal.",
        "Tu n'annules pas au dernier moment sans vraie raison.",
        "Un bro oublié à l'aéroport = faute grave.",
      ],
    },
  ];

  const [question, setQuestion] = useState(
    "Mon duo habituel était connecté mais j'ai lancé une ranked avec un autre mate. Est-ce une trahison ?"
  );

  const [context, setContext] = useState(
    "Contexte : il ne m'avait pas répondu depuis 20 minutes, mais je voyais qu'il était en ligne. On avait dit la veille qu'on jouerait ensemble ce soir."
  );

  const verdict = useMemo(() => {
    const text = `${question} ${context}`.toLowerCase();

    if (
      text.includes("ex") ||
      text.includes("ranked") ||
      text.includes("duo") ||
      text.includes("autre mate") ||
      text.includes("autre duo")
    ) {
      return {
        title: "TRAHISON",
        icon: "❌",
        gravity: "8/10",
        colorClass: "red",
        explanation:
          "Le tribunal estime qu'un engagement prioritaire envers ton bro a été cassé. Selon les lois sacrées du bro code, c'est une faute sérieuse.",
        sanction:
          "Excuses publiques + prochaine session obligatoirement avec le bro lésé.",
      };
    }

    if (
      text.includes("pas répondu") ||
      text.includes("attendu") ||
      text.includes("retard") ||
      text.includes("zone grise")
    ) {
      return {
        title: "ZONE GRISE",
        icon: "⚠️",
        gravity: "4/10",
        colorClass: "orange",
        explanation:
          "La situation est discutable. Tu n'as pas forcément trahi, mais tu aurais dû prévenir ou attendre un peu plus clairement.",
        sanction:
          "Avertissement verbal + message explicatif recommandé.",
      };
    }

    return {
      title: "RESPECT",
      icon: "✅",
      gravity: "1/10",
      colorClass: "green",
      explanation:
        "Aucun article majeur du bro code ne semble violé. Ton comportement reste dans les limites du respect fraternel.",
      sanction: "Aucune sanction. Le conseil salue le fair-play.",
    };
  }, [question, context]);

  return (
    <div className="page">
      <header className="header">
        <div>
          <p className="eyebrow">Unofficial</p>
          <h1 className="brand">Besto Friendo Laws</h1>
        </div>
        <nav className="nav">
          <a href="#commandments">Commandements</a>
          <a href="#tribunal">Tribunal IA</a>
          <a href="#categories">Catégories</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <span className="badge">⚖️ Tribunal non officiel du bro code</span>
          <h2>
            Le site qui juge
            <br />
            <span>les crimes contre les bros</span>
          </h2>
          <p>
            Un site fun où les utilisateurs découvrent les lois sacrées du bro
            code, puis posent une situation à une IA qui rend un verdict selon
            vos propres règles.
          </p>
          <div className="hero-buttons">
            <a href="#tribunal" className="button primary">
              Tester le tribunal
            </a>
            <a href="#commandments" className="button secondary">
              Lire les 10 commandements
            </a>
          </div>
        </div>

        <div className="hero-card">
          <p className="small-label">Exemple de jugement IA</p>
          <div className="verdict-card red">
            <div className="verdict-top">
              <div>
                <p className="small-label">Verdict officiel</p>
                <h3>TRAHISON ❌</h3>
              </div>
              <div className="gravity-box">
                <span>Gravité</span>
                <strong>8/10</strong>
              </div>
            </div>
            <p>
              Tu as lancé une session ranked avec un autre duo alors que ton
              teammate habituel était connecté et disponible. Selon l'article I,
              c'est une entorse majeure au bro code.
            </p>
            <div className="sanction-box">
              <strong>Sanction proposée</strong>
              <span>
                Excuses publiques + prochaine session obligatoirement avec le
                bro lésé.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="commandments" className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Le socle</p>
            <h2>Les 10 commandements</h2>
          </div>
          <p className="section-note">
            Le cœur du produit : des règles mémorables, claires et assez drôles
            pour être partagées.
          </p>
        </div>

        <div className="grid commandments-grid">
          {commandments.map((law, index) => (
            <article key={index} className="card">
              <p className="commandment-number">Commandement {index + 1}</p>
              <p>{law}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="tribunal" className="section">
        <div className="tribunal-layout">
          <div className="panel">
            <p className="eyebrow">Tribunal IA</p>
            <h2>Pose une situation, reçois un verdict</h2>
            <p className="panel-text">
              Pour l'instant, le verdict est simulé avec des règles simples.
              Plus tard, on pourra brancher une vraie IA.
            </p>

            <div className="form-group">
              <label>Ta question</label>
              <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Contexte</label>
              <textarea
                value={context}
                onChange={(e) => setContext(e.target.value)}
              />
            </div>
          </div>

          <div className={`panel verdict-panel ${verdict.colorClass}`}>
            <div className="verdict-top">
              <div>
                <p className="small-label">Verdict actuel</p>
                <h3>
                  {verdict.title} {verdict.icon}
                </h3>
              </div>
              <div className="gravity-box">
                <span>Gravité</span>
                <strong>{verdict.gravity}</strong>
              </div>
            </div>

            <p>{verdict.explanation}</p>

            <div className="sanction-box">
              <strong>Sanction</strong>
              <span>{verdict.sanction}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="section">
        <p className="eyebrow">Extensions</p>
        <h2>Catégories de lois</h2>

        <div className="grid categories-grid">
          {extraLaws.map((category) => (
            <article key={category.title} className="panel">
              <h3>{category.title}</h3>
              <div className="laws-list">
                {category.laws.map((law, index) => (
                  <div key={index} className="mini-card">
                    {law}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
