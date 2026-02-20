export type DonneesX = {
  pseudo: string;
  biographie: string;
  liens: string[];
  publicationsRecentes: string[];
};

export async function lireDonneesPubliquesX(pseudo: string): Promise<DonneesX> {
  return {
    pseudo,
    biographie: "Compte en démonstration",
    liens: ["https://exemple.com"],
    publicationsRecentes: [
      "Annonce produit",
      "Avancement de campagne",
      "Retour utilisateur",
    ],
  };
}
