import { BlocInfluenceurs } from "../composants/bloc-influenceurs";
import { BlocPertinenceMarche } from "../composants/bloc-pertinence-marche";
import { BlocRetourInvestissement } from "../composants/bloc-retour-investissement";

export function PageTableauBord() {
  return (
    <main>
      <BlocInfluenceurs />
      <BlocPertinenceMarche />
      <BlocRetourInvestissement />
    </main>
  );
}
