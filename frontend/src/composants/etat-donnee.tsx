import { EtatBloc } from "../services/etat-bloc";

export function EtatDonnee({ etat }: { etat: EtatBloc }) {
  return <small>{etat}</small>;
}
