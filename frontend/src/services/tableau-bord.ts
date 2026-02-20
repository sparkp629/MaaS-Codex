export async function chargerTableauBord(profilId: string) {
  return {
    profilId,
    blocs: [
      { nom: "Influenceurs pertinents", etat: "normal" },
      { nom: "Pertinence de marché", etat: "Bientôt disponible" },
      { nom: "Retour sur investissement", etat: "Erreur" },
    ],
  };
}
