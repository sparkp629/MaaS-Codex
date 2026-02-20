import { Campagne } from "../domaines/campagne";

const campagnes = new Map<string, Campagne>();

export function creerCampagne(campagne: Campagne) {
  campagnes.set(campagne.id, campagne);
  return campagne;
}

export function lireCampagnesParProfil(profilId: string): Campagne[] {
  return Array.from(campagnes.values()).filter((c) => c.profilId === profilId);
}
