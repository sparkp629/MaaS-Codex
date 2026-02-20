import { lireDonneesPubliquesX } from "./connexion-x";

export async function creerProfilFusion(profilId: string, profilLocal?: any) {
  const donneesX = await lireDonneesPubliquesX(profilId);
  return {
    identifiant: profilId,
    donneesX,
    profilLocal: profilLocal ?? null,
  };
}
