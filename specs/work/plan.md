# Plan de réalisation : Agence de présence médiatique mesurable

**Branche** : `work` | **Date** : 2026-02-20 | **Spécification** : `specs/work/spec.md`  
**Entrée** : Spécification de fonctionnalité issue de `specs/work/spec.md`

## Résumé

Cette réalisation met en place un parcours de découverte sans connexion forcée,
un questionnaire d'accueil, puis un tableau de bord stable organisé en trois blocs
(influenceurs clés, intelligence de marché, retour sur investissement). Le socle
doit permettre une comparaison avant/après levée de fonds sur plusieurs canaux.

## Contexte technique

**Langage et version** : TypeScript récent pour l'interface et les services  
**Dépendances principales** : React, Tailwind, bibliothèque de composants sobre  
**Stockage** : Supabase (base relationnelle)  
**Vérification** : tests unitaires, tests d'intégration, vérification manuelle guidée  
**Plateforme cible** : application web  
**Type de projet** : application web avec interface et services séparés  
**Objectifs de performance** : affichage initial du tableau de bord en moins de 2 secondes  
**Contraintes** : découverte sans connexion bloquante, structure du tableau de bord stable  
**Échelle visée** : lancement initial pour petites équipes B2B spécialisées

## Contrôle de conformité à la constitution

*PORTE : Doit être validé avant la recherche, puis revalidé après la conception.*

- ✅ Découverte avant connexion respectée par le parcours prévu.
- ✅ Clarté visuelle respectée par les trois blocs lisibles et distincts.
- ✅ Mesure d'impact respectée avec critères mesurables et comparaison avant/après.
- ✅ Données fiables et traçables respectées via stockage persistant et états explicites.
- ✅ Mise en œuvre incrémentale respectée via découpage par priorité utilisateur.

Aucune dérogation n'est nécessaire à ce stade.

## Structure du projet

### Documentation de cette fonctionnalité

```text
specs/work/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── api.yaml
└── checklists/
    └── requirements.md
```

### Code source (racine du dépôt)

```text
frontend/
├── src/
│   ├── composants/
│   ├── pages/
│   ├── services/
│   └── styles/
└── tests/

backend/
├── src/
│   ├── domaines/
│   ├── services/
│   └── api/
└── tests/
```

**Décision de structure** : application web avec séparation interface et services,
pour garder un parcours fluide côté utilisateur et une logique de données claire.

## Suivi de complexité

Aucune violation de constitution détectée, section non applicable.
