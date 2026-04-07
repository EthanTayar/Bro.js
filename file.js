export default function BroCodeSite() {
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

  const verdicts = [
    {
      title: "TRAHISON",
      icon: "❌",
      text: "Tu as lancé une ranked sans ton bro alors qu'il était dispo. Le tribunal du bro code considère cela comme une faute sérieuse.",
      gravity: "8/10",
    },
    {
      title: "ZONE GRISE",
      icon: "⚠️",
      text: "Tu as joué avec un autre parce que ton bro n'avait pas répondu depuis 5 heures. Tolérable, mais notification recommandée.",
      gravity: "4/10",
    },
    {
      title: "RESPECT",
      icon: "✅",
      text: "Tu as demandé la permission avant d'inviter un autre mate. Aucun article du bro code n'a été violé.",
      gravity: "1/10",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-white/10 bg-zinc-950/80 backdrop-blur sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-zinc-400">Unofficial</div>
            <div className="text-2xl font-bold">Besto Friendo Laws</div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-zinc-300">
            <a href="#commandments" className="hover:text-white">Commandements</a>
            <a href="#tribunal" className="hover:text-white">Tribunal IA</a>
            <a href="#categories" className="hover:text-white">Catégories</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm text-amber-200 mb-6">
                ⚖️ Tribunal non officiel du bro code
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight">
                Le site qui juge
                <span className="block text-amber-300">les crimes contre les bros</span>
              </h1>
              <p className="mt-6 text-lg text-zinc-300 max-w-xl leading-8">
                Un site fun où les utilisateurs découvrent les lois sacrées du bro code, puis posent une situation à une IA qui rend un verdict selon vos propres règles.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#tribunal" className="rounded-2xl bg-white text-zinc-950 px-6 py-3 font-semibold hover:scale-[1.02] transition">Tester le tribunal</a>
                <a href="#commandments" className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white hover:bg-white/5 transition">Lire les 10 commandements</a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30">
              <div className="rounded-[1.5rem] bg-zinc-900 p-5 border border-white/10">
                <div className="text-sm text-zinc-400 mb-3">Exemple de jugement IA</div>
                <div className="rounded-2xl bg-zinc-950 border border-red-400/20 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.25em] text-red-300">Verdict officiel</div>
                      <div className="text-3xl font-black mt-1">TRAHISON ❌</div>
                    </div>
                    <div className="rounded-2xl bg-red-400/10 border border-red-400/20 px-4 py-3 text-center min-w-[110px]">
                      <div className="text-xs text-zinc-400">Gravité</div>
                      <div className="text-2xl font-bold">8/10</div>
                    </div>
                  </div>
                  <p className="mt-5 text-zinc-300 leading-7">
                    Tu as lancé une session ranked avec un autre duo alors que ton teammate habituel était connecté et disponible. Selon l'article I, c'est une entorse majeure au bro code.
                  </p>
                  <div className="mt-5 rounded-2xl bg-white/5 p-4 border border-white/10">
                    <div className="text-sm font-semibold">Sanction proposée</div>
                    <div className="text-zinc-300 mt-1">Excuses publiques + prochaine session obligatoirement avec le bro lésé.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="commandments" className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-zinc-400">Le socle</div>
              <h2 className="text-3xl md:text-5xl font-black mt-2">Les 10 commandements</h2>
            </div>
            <div className="text-sm text-zinc-400 max-w-md">Le cœur du produit: des règles mémorables, claires et assez drôles pour être partagées.</div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {commandments.map((law, index) => (
              <div key={index} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 hover:bg-white/[0.07] transition">
                <div className="text-xs uppercase tracking-[0.25em] text-amber-300">Commandement {index + 1}</div>
                <p className="mt-3 text-lg leading-8 text-zinc-100">{law}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="tribunal" className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="text-sm uppercase tracking-[0.25em] text-zinc-400">Tribunal IA</div>
              <h2 className="text-3xl md:text-5xl font-black mt-2">Pose une situation, reçois un verdict</h2>
              <p className="mt-4 text-zinc-300 leading-8 max-w-2xl">
                Ici, l'utilisateur raconte son cas. Plus tard, ce formulaire pourra être connecté à une vraie IA qui analysera la situation selon vos lois.
              </p>

              <div className="mt-8 space-y-4">
                <input
                  className="w-full rounded-2xl bg-zinc-950 border border-white/10 px-5 py-4 outline-none focus:border-amber-300/50"
                  defaultValue="Ex: Mon duo habituel était connecté mais j'ai lancé une ranked avec un autre mate. Est-ce une trahison ?"
                />
                <textarea
                  className="w-full min-h-40 rounded-2xl bg-zinc-950 border border-white/10 px-5 py-4 outline-none focus:border-amber-300/50"
                  defaultValue="Contexte : il ne m'avait pas répondu depuis 20 minutes, mais je voyais qu'il était en ligne. On avait dit la veille qu'on jouerait ensemble ce soir."
                />
                <button className="rounded-2xl bg-amber-300 text-zinc-950 px-6 py-4 font-bold hover:scale-[1.01] transition">
                  Demander le verdict
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {verdicts.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-2xl font-black">{item.title} {item.icon}</div>
                    <div className="rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 text-sm text-zinc-300">Gravité {item.gravity}</div>
                  </div>
                  <p className="mt-3 text-zinc-300 leading-7">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="categories" className="max-w-7xl mx-auto px-6 py-12 pb-24">
          <div className="text-sm uppercase tracking-[0.25em] text-zinc-400">Extensions</div>
          <h2 className="text-3xl md:text-5xl font-black mt-2">Catégories de lois</h2>
          <div className="grid lg:grid-cols-3 gap-5 mt-8">
            {extraLaws.map((category) => (
              <div key={category.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="text-2xl font-bold">{category.title}</div>
                <div className="mt-4 space-y-3 text-zinc-300">
                  {category.laws.map((law, idx) => (
                    <div key={idx} className="rounded-2xl bg-zinc-950 border border-white/10 p-4 leading-7">{law}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
