export function BlocComparaison({ avant, apres }: { avant: number; apres: number }) {
  return (
    <section>
      <h3>Comparaison avant / après financement</h3>
      <p>Avant: {avant}</p>
      <p>Après: {apres}</p>
    </section>
  );
}
