export type Campagne = {
  id: string;
  profilId: string;
  periode: "avant-financement" | "apres-financement";
  canaux: string[];
};
