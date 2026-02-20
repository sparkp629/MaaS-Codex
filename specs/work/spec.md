# Feature Specification: Agence de présence médiatique mesurable

**Feature Branch**: `work`  
**Created**: 2026-02-20  
**Status**: Draft  
**Input**: User description: "Plateforme de service logiciel d'analyse de présence médiatique pour une agence spécialisée aidant des jeunes pousses de haute technologie et de défense, avec découverte avant connexion, questionnaire d'accueil, tableau de bord stable, authentification simulée par défaut et conservation des données dans Supabase."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Découvrir la valeur sans blocage de connexion (Priority: P1)

En tant que visiteur, je veux parcourir l'offre et répondre à un questionnaire d'accueil sans obligation de connexion, afin de voir rapidement un premier tableau de bord utile.

**Why this priority**: Cette étape conditionne l'entrée dans le parcours et la conversion des visiteurs en prospects qualifiés.

**Independent Test**: Le parcours est validé si un visiteur non connecté peut ouvrir la page, répondre au questionnaire et voir un tableau de bord alimenté par ses réponses.

**Acceptance Scenarios**:

1. **Given** un visiteur non connecté, **When** il arrive sur la page d'accueil, **Then** il voit une invitation claire à découvrir le service et un bouton de connexion X non bloquant.
2. **Given** un visiteur non connecté, **When** il termine le questionnaire d'accueil, **Then** il obtient un tableau de bord personnalisé sans être forcé de se connecter.

---

### User Story 2 - Lire des blocs d'information distincts et compréhensibles (Priority: P2)

En tant que fondateur, je veux un tableau de bord lisible qui présente les influenceurs clés, l'intelligence de marché et le retour sur investissement dans des blocs distincts, afin de décider vite où investir mes efforts.

**Why this priority**: La valeur perçue dépend de la compréhension immédiate des informations critiques.

**Independent Test**: Le parcours est validé si les trois blocs sont visibles, distinguables et compréhensibles, y compris en cas de données manquantes.

**Acceptance Scenarios**:

1. **Given** des données disponibles, **When** le tableau de bord s'affiche, **Then** les blocs influenceurs clés, intelligence de marché et retour sur investissement sont clairement séparés.
2. **Given** des données absentes pour un bloc, **When** l'utilisateur consulte la page, **Then** un message explicite d'état vide ou indisponible est affiché sans casser la lecture globale.

---

### User Story 3 - Piloter des campagnes avant et après levée de fonds (Priority: P3)

En tant qu'équipe d'agence, je veux suivre les résultats de campagnes sur plusieurs canaux avant et après levée de fonds, afin de démontrer une progression mesurable de la présence médiatique.

**Why this priority**: C'est le cœur de la promesse commerciale de l'agence spécialisée.

**Independent Test**: Le parcours est validé si des campagnes multi-canales peuvent être suivies par période et reliées à un résultat mesurable.

**Acceptance Scenarios**:

1. **Given** des campagnes actives sur plusieurs canaux, **When** les données de performance sont mises à jour, **Then** le tableau de bord montre une évolution comparable entre avant et après levée de fonds.
2. **Given** un canal temporairement indisponible, **When** le tableau de bord se met à jour, **Then** les autres canaux restent consultables avec un signal clair sur le canal indisponible.

### Edge Cases

- Le visiteur quitte le questionnaire en cours : les réponses déjà fournies sont conservées et il peut reprendre plus tard.
- La connexion X échoue : le mode découverte reste disponible sans interruption.
- Un canal externe devient indisponible : seule la section concernée signale l'incident.
- Les réponses du questionnaire sont incohérentes : l'utilisateur reçoit une demande de correction claire avant validation.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST permettre un parcours de découverte complet sans connexion obligatoire.
- **FR-002**: System MUST afficher dès l'accueil un bouton de connexion X et un message de découverte prioritaire.
- **FR-003**: System MUST collecter les réponses du questionnaire d'accueil et les utiliser pour alimenter le tableau de bord.
- **FR-004**: System MUST conserver la même structure visuelle de tableau de bord avant et après le questionnaire.
- **FR-005**: System MUST afficher les informations dans trois blocs fixes : influenceurs clés, intelligence de marché, retour sur investissement.
- **FR-006**: System MUST proposer par défaut une authentification simulée pour l'usage initial.
- **FR-007**: System MUST conserver les réponses d'accueil et les extractions de campagne dans Supabase.
- **FR-008**: System MUST suivre les performances des campagnes sur X, LinkedIn, YouTube, Twitch, Instagram, Reddit, Telegram, Discord et Substack.
- **FR-009**: System MUST comparer les résultats de présence médiatique sur deux périodes : avant levée de fonds et après levée de fonds.
- **FR-010**: System MUST afficher un état explicite pour chaque bloc (normal, vide, indisponible).

### Key Entities *(include if feature involves data)*

- **Profil d'accueil**: ensemble des réponses d'un visiteur, son niveau d'avancement et son horodatage.
- **Influenceur clé**: personne suivie, canaux actifs, niveau d'affinité sectorielle et indicateurs de performance.
- **Campagne multi-canal**: objectif, période, canaux activés et résultats observés.
- **Bloc d'intelligence**: signaux de marché, thèmes porteurs et opportunités à fort potentiel.
- **Bloc de retour sur investissement**: mesure des gains observables par période et par canal.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Au moins 80 % des nouveaux visiteurs commencent le questionnaire sans se connecter.
- **SC-002**: Au moins 70 % des visiteurs qui commencent le questionnaire voient un tableau de bord personnalisé en moins de 90 secondes.
- **SC-003**: 100 % des tableaux de bord affichent les trois blocs obligatoires avec un état explicite.
- **SC-004**: Au moins 90 % des utilisateurs déclarent comprendre les informations principales en moins de 3 minutes lors d'un test d'usage.
- **SC-005**: Pour les campagnes suivies sur deux périodes, 100 % des rapports montrent une comparaison avant/après levée de fonds sans données manquantes silencieuses.

## Assumptions

- L'offre s'adresse en priorité à des jeunes pousses en haute technologie et défense préparant ou venant de réaliser une levée de fonds.
- La connexion X est facultative au début pour réduire la friction, mais reste proposée comme option d'enrichissement.
- Les données multi-canales sont présentées de façon compréhensible pour des décideurs non spécialistes.
