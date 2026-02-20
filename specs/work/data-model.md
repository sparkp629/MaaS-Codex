# Modèle de données : Agence de présence médiatique mesurable

## Entité : ProfilAccueil

- **Champs** : identifiant, date de création, état d'avancement, secteur, stade de financement,
  objectif média, budget estimé, préférence de canaux.
- **Règles de validation** :
  - secteur obligatoire ;
  - stade de financement obligatoire ;
  - au moins un objectif média ;
  - état d'avancement dans {en cours, terminé}.
- **Transitions d'état** : en cours → terminé.

## Entité : InfluenceurCle

- **Champs** : identifiant, nom public, canaux actifs, score d'affinité, score de conversion,
  statut de disponibilité.
- **Règles de validation** :
  - nom public obligatoire ;
  - au moins un canal actif ;
  - scores bornés de 0 à 100.

## Entité : CampagneMulticanal

- **Champs** : identifiant, profil lié, période (avant ou après levée), liste des canaux,
  date de début, date de fin, objectif principal.
- **Règles de validation** :
  - période obligatoire ;
  - date de début antérieure à date de fin ;
  - au moins un canal actif.

## Entité : MesurePerformance

- **Champs** : identifiant, campagne liée, canal, portée, interactions, clics, coût,
  leads qualifiés, date de mesure.
- **Règles de validation** :
  - canal obligatoire ;
  - valeurs numériques positives ;
  - date de mesure obligatoire.

## Entité : BlocTableauBord

- **Champs** : identifiant, type de bloc (influenceurs, intelligence, retour), état
  d'affichage (normal, vide, indisponible), date de mise à jour.
- **Règles de validation** :
  - type de bloc obligatoire ;
  - état d'affichage obligatoire.

## Relations

- Un ProfilAccueil possède plusieurs CampagneMulticanal.
- Une CampagneMulticanal possède plusieurs MesurePerformance.
- Un InfluenceurCle peut être lié à plusieurs CampagneMulticanal.
- Un tableau de bord contient exactement trois BlocTableauBord.
