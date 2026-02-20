# Tâches : Agence de présence médiatique mesurable

**Entrée** : documents de conception dans `specs/work/`  
**Prérequis** : `plan.md` (obligatoire), `spec.md` (obligatoire), `research.md`, `data-model.md`, `contracts/api.yaml`, `quickstart.md`

**Organisation** : les tâches sont regroupées par histoire utilisateur afin de livrer des incréments indépendants et vérifiables.

## Format : `[ID] [P?] [Histoire] Description`

- **[P]** : exécutable en parallèle (fichiers différents, sans dépendance directe)
- **[Histoire]** : `US1`, `US2`, `US3`
- Chaque description contient un chemin de fichier précis

## Phase 1 : Mise en place (socle commun)

**Objectif** : installer l’ossature minimale du produit.

- [X] T001 Créer l’arborescence `frontend/src/{pages,composants,services,styles}` et `backend/src/{domaines,services,api}`
- [X] T002 Créer les fichiers de configuration de base dans `frontend/` et `backend/` (scripts de démarrage, contrôle qualité, variables d’environnement)
- [X] T003 [P] Créer la structure de base de données côté Supabase dans `backend/src/domaines/schema.sql`
- [X] T004 [P] Créer les constantes de canaux incluant Meta dans `backend/src/domaines/canaux.ts`

---

## Phase 2 : Fondations (bloquant avant histoires)

**Objectif** : livrer les briques indispensables à toutes les histoires.

- [X] T005 Créer le module d’accès aux données Supabase dans `backend/src/services/stockage.ts`
- [X] T006 Créer le module de connexion X (connexion, lecture profil, lecture publications publiques) dans `backend/src/services/connexion-x.ts`
- [X] T007 Créer le modèle commun des états d’affichage (`normal`, `Bientôt disponible`, `Erreur`) dans `frontend/src/services/etat-bloc.ts`
- [X] T008 Créer les routes serveur communes pour `questionnaire`, `tableau de bord`, `campagnes`, `comparaison` dans `backend/src/api/routes.ts`
- [X] T009 Créer la page d’entrée et le routage général dans `frontend/src/pages/entree.tsx`

**Point de contrôle** : aucune histoire ne démarre avant la fin de T005 à T009.

---

## Phase 3 : Histoire utilisateur 1 — Connexion immédiate + sondage complémentaire (Priorité P1)

**But** : permettre un premier aperçu rapide puis compléter le profil par un sondage court.

**Test indépendant** : un visiteur se connecte, voit un aperçu réel limité, répond à trois questions obligatoires et revient sur un tableau enrichi.

### Réalisation US1

- [X] T010 [P] [US1] Créer la page de connexion X dans `frontend/src/pages/connexion-x.tsx`
- [X] T011 [US1] Implémenter le bouton X visible et actif dans `frontend/src/composants/bouton-connexion-x.tsx`
- [X] T012 [US1] Implémenter la redirection immédiate vers tableau de bord dans `frontend/src/services/redirection.ts`
- [X] T013 [US1] Créer le formulaire de sondage court (3 questions obligatoires fermées + 2 facultatives) dans `frontend/src/composants/sondage-court.tsx`
- [X] T014 [US1] Enregistrer les réponses de sondage dans `backend/src/services/profil-accueil.ts`
- [X] T015 [US1] Fusionner données X et réponses de sondage dans `backend/src/services/profil-fusion.ts`
- [X] T016 [US1] Afficher le bloc “profil entreprise” enrichi dans `frontend/src/composants/bloc-profil.tsx`

**Point de contrôle** : US1 est livrable seule et montre une valeur claire.

---

## Phase 4 : Histoire utilisateur 2 — Tableau de bord lisible, crédible et orienté décision (Priorité P2)

**But** : afficher des blocs distincts, compréhensibles, avec des états explicites.

**Test indépendant** : les trois blocs s’affichent avec données réelles limitées ; les zones manquantes affichent “Bientôt disponible”, les incidents affichent “Erreur”.

### Réalisation US2

- [X] T017 [P] [US2] Créer la page tableau de bord dans `frontend/src/pages/tableau-bord.tsx`
- [X] T018 [US2] Créer le bloc influenceurs pertinents dans `frontend/src/composants/bloc-influenceurs.tsx`
- [X] T019 [US2] Créer le bloc pertinence de marché dans `frontend/src/composants/bloc-pertinence-marche.tsx`
- [X] T020 [US2] Créer le bloc retour sur investissement dans `frontend/src/composants/bloc-retour-investissement.tsx`
- [X] T021 [US2] Implémenter les états visuels explicites dans `frontend/src/composants/etat-donnee.tsx`
- [X] T022 [US2] Implémenter la récupération des blocs depuis le serveur dans `frontend/src/services/tableau-bord.ts`
- [X] T023 [US2] Ajouter les résumés de contenus concurrents (aperçus lisibles) dans `backend/src/services/apercu-contenus.ts`

**Point de contrôle** : US2 reste compréhensible même avec données partielles.

---

## Phase 5 : Histoire utilisateur 3 — Campagnes multi-canaux et comparaison avant/après financement (Priorité P3)

**But** : suivre la progression mesurable de la présence médiatique sur deux périodes.

**Test indépendant** : la même entreprise peut comparer ses indicateurs avant et après financement, canal par canal.

### Réalisation US3

- [X] T024 [P] [US3] Créer le modèle de campagne multi-canaux dans `backend/src/domaines/campagne.ts`
- [X] T025 [US3] Créer le modèle de mesure de performance dans `backend/src/domaines/mesure-performance.ts`
- [X] T026 [US3] Implémenter la création de campagne dans `backend/src/services/campagnes.ts`
- [X] T027 [US3] Implémenter l’enregistrement des mesures dans `backend/src/services/mesures.ts`
- [X] T028 [US3] Implémenter le calcul comparatif avant/après dans `backend/src/services/comparaison-financement.ts`
- [X] T029 [US3] Afficher la comparaison dans `frontend/src/composants/bloc-comparaison.tsx`
- [X] T030 [US3] Ajouter la vue de synthèse multi-canaux incluant Meta dans `frontend/src/composants/bloc-multicanal.tsx`

**Point de contrôle** : US3 complète la promesse commerciale sans casser US1 et US2.

---

## Phase 6 : Finitions transversales

**Objectif** : fiabiliser, clarifier et préparer la démonstration publique.

- [X] T031 [P] Mettre à jour le contrat d’interface dans `specs/work/contracts/api.yaml`
- [X] T032 [P] Mettre à jour le guide de démonstration dans `specs/work/quickstart.md`
- [X] T033 Documenter la stratégie “données réelles minimales + zones en construction” dans `specs/work/research.md`
- [X] T034 Vérifier la cohérence de la constitution avec les décisions produit dans `maasagency/.specify/memory/constitution.md`
- [X] T035 Vérifier le parcours complet avec la liste de contrôle dans `specs/work/checklists/requirements.md`

---

## Dépendances et ordre d’exécution

### Dépendances de phases

- Phase 1 → aucune dépendance
- Phase 2 → dépend de la Phase 1
- Phase 3 (US1) → dépend de la Phase 2
- Phase 4 (US2) → dépend de la Phase 3
- Phase 5 (US3) → dépend de la Phase 4
- Phase 6 → dépend des Phases 3, 4 et 5

### Dépendances entre histoires

- **US1** : socle de démonstration initiale (priorité absolue)
- **US2** : dépend de US1 pour le profil enrichi
- **US3** : dépend de US1 et US2 pour afficher la comparaison complète

---

## Exemples d’exécution en parallèle

### US1

- T010 et T013 peuvent être menées en parallèle (pages/composants distincts).

### US2

- T018, T019 et T020 peuvent être menées en parallèle (blocs distincts).

### US3

- T024 et T025 peuvent être menées en parallèle (modèles distincts).

---

## Stratégie de livraison

### Livraison minimale viable (MVP)

1. Terminer Phase 1
2. Terminer Phase 2
3. Terminer Phase 3 (US1)
4. Vérifier la valeur perçue réelle sur un cas prospect

### Livraison incrémentale

1. Ajouter US2 pour améliorer la crédibilité visuelle et la lisibilité
2. Ajouter US3 pour la preuve de progression avant/après financement
3. Finaliser avec la Phase 6

