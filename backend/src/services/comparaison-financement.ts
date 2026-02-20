import { lireCampagnesParProfil } from "./campagnes";

export function comparerAvantApres(profilId: string) {
  const campagnes = lireCampagnesParProfil(profilId);
  const avant = campagnes.filter((c) => c.periode === "avant-financement").length;
  const apres = campagnes.filter((c) => c.periode === "apres-financement").length;
  return { profilId, avant, apres };
}
