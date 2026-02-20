<!--
Rapport de synchronisation
- Changement de version : N/A → 1.0.0
- Principes modifiés : initialisation complète (depuis modèle vide)
- Sections ajoutées : Principes fondamentaux, Contraintes produit et données, Processus de réalisation, Gouvernance
- Sections supprimées : aucune
- Gabarits à mettre à jour :
  - ✅ maasagency/.specify/templates/plan-template.md (cohérent, section de contrôle déjà présente)
  - ✅ maasagency/.specify/templates/spec-template.md (cohérent, scénarios, exigences et résultats mesurables déjà présents)
  - ✅ maasagency/.specify/templates/tasks-template.md (cohérent, ordre de réalisation et tests déjà présents)
  - ✅ maasagency/.codex/prompts/speckit.constitution.md (aucune référence obsolète détectée)
- Suivis : aucun
-->

# Constitution du projet MaaS Codex

## Principes fondamentaux

### I. Découverte avant connexion
Le produit doit toujours privilégier un parcours de découverte avant toute connexion.
La connexion via X est proposée, mais ne doit pas bloquer l'accès initial.

Raison d'être : réduire la friction d'entrée et augmenter le démarrage du parcours.

### II. Clarté visuelle orientée décision
Le tableau de bord doit afficher les informations dans des blocs lisibles et distincts,
centrés sur les influenceurs clés, l'intelligence de marché et le retour sur investissement.
La présentation ne doit pas ressembler à un outil d'analyse standard difficile à lire.

Raison d'être : permettre une prise de décision rapide par des fondateurs non spécialistes.

### III. Mesure concrète de l'impact
Chaque parcours, campagne et recommandation doit être relié à des résultats mesurables.
Toute nouvelle fonctionnalité doit définir au moins un indicateur de succès vérifiable.

Raison d'être : éviter les décisions basées sur des indicateurs de vanité.

### IV. Données fiables et traçables
Les réponses au questionnaire et les extractions de données doivent être conservées de
manière durable dans Supabase, avec des états explicites en cas d'absence ou d'erreur.
Aucune information critique ne doit disparaître silencieusement.

Raison d'être : garantir la continuité opérationnelle et la confiance dans les résultats.

### V. Mise en œuvre incrémentale et vérifiable
Le travail doit être découpé en tranches indépendantes testables, en commençant par la
valeur prioritaire. Toute tâche doit mentionner un chemin de fichier et un critère de fin.

Raison d'être : limiter les régressions et accélérer la livraison utile.

## Contraintes produit et données

1. Les canaux pris en charge pour les campagnes sont : X, LinkedIn, YouTube, Twitch,
   Instagram, Meta, Reddit, Telegram, Discord et Substack.
2. Le questionnaire d'entrée alimente le tableau de bord sans changer sa structure visuelle.
3. L'authentification est simulée par défaut pendant la phase initiale du produit.
4. Les états de bloc doivent afficher « Bientôt disponible » en absence de donnée et « Erreur » en cas d'échec.
5. Toute évolution qui change une décision produit déjà validée doit être signalée,
   contextualisée et confirmée avant exécution.

## Processus de réalisation

1. Toute spécification doit inclure : scénarios utilisateur, cas limites, exigences
   fonctionnelles, entités concernées et résultats mesurables.
2. Tout plan de réalisation doit comporter un contrôle de conformité à cette constitution
   avant la recherche et après la conception.
3. Toute liste de tâches doit respecter l'ordre : base commune, priorité 1, priorité 2,
   priorité 3, finitions transversales.
4. Les vérifications exécutées doivent être consignées dans les messages de suivi.

## Gouvernance

Cette constitution prévaut sur les habitudes locales de rédaction et d'organisation.
Toute demande de modification doit :

1. décrire la règle actuelle ;
2. proposer la nouvelle règle ;
3. justifier l'impact sur le produit et l'exécution ;
4. mettre à jour les gabarits concernés dans le même changement.

Politique de version :
- version majeure : suppression ou redéfinition incompatible d'un principe ;
- version mineure : ajout d'un principe ou d'une contrainte structurante ;
- version corrective : clarification sans changement de sens.

Le contrôle de conformité est obligatoire lors de chaque plan et de chaque revue de changement.

**Version**: 1.0.0 | **Ratifiée**: 2026-02-20 | **Dernière modification**: 2026-02-20
