export type EtatBloc = "normal" | "Bientôt disponible" | "Erreur";

export function libelleEtat(etat: EtatBloc): string {
  return etat;
}
