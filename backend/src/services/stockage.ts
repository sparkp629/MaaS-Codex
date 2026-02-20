export type ProfilAccueil = {
  id: string;
  etatAvancement: "en_cours" | "termine";
  secteur: string;
  stadeFinancement: string;
  objectifMedia: string;
  budgetEstime?: string;
  preferenceCanaux: string[];
};

const profils = new Map<string, ProfilAccueil>();

export function enregistrerProfil(profil: ProfilAccueil): ProfilAccueil {
  profils.set(profil.id, profil);
  return profil;
}

export function lireProfil(id: string): ProfilAccueil | undefined {
  return profils.get(id);
}
