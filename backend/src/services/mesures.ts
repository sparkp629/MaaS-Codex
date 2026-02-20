import { MesurePerformance } from "../domaines/mesure-performance";

const mesures = new Map<string, MesurePerformance[]>();

export function ajouterMesure(campagneId: string, mesure: MesurePerformance) {
  const existantes = mesures.get(campagneId) ?? [];
  const maj = [...existantes, { ...mesure, campagneId }];
  mesures.set(campagneId, maj);
  return maj;
}

export function lireMesures(campagneId: string) {
  return mesures.get(campagneId) ?? [];
}
