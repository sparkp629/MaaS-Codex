export function SondageCourt() {
  return (
    <form>
      <label>Stade de financement</label>
      <select><option>Pré-amorçage</option><option>Amorçage</option><option>Croissance</option></select>
      <label>Objectif principal</label>
      <select><option>Visibilité</option><option>Leads</option><option>Crédibilité</option></select>
      <label>Canal prioritaire</label>
      <select><option>X</option><option>LinkedIn</option><option>YouTube</option></select>
      <label>Budget estimé (facultatif)</label>
      <input />
      <label>Contrainte majeure (facultatif)</label>
      <input />
    </form>
  );
}
