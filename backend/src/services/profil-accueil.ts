import { enregistrerProfil, ProfilAccueil } from "./stockage";

export function enregistrerReponsesSondage(donnees: ProfilAccueil) {
  return enregistrerProfil(donnees);
}
