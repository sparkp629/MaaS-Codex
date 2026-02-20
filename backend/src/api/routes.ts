import { enregistrerProfil, lireProfil } from "../services/stockage";
import { creerProfilFusion } from "../services/profil-fusion";
import { creerCampagne } from "../services/campagnes";
import { ajouterMesure } from "../services/mesures";
import { comparerAvantApres } from "../services/comparaison-financement";

export function routeQuestionnaire(entree: any) {
  return enregistrerProfil(entree);
}

export function routeTableauBord(profilId: string) {
  const profil = lireProfil(profilId);
  return creerProfilFusion(profilId, profil);
}

export function routeCampagnes(entree: any) {
  return creerCampagne(entree);
}

export function routeMesures(campagneId: string, entree: any) {
  return ajouterMesure(campagneId, entree);
}

export function routeComparaison(profilId: string) {
  return comparerAvantApres(profilId);
}
