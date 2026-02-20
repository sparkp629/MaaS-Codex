-- Schéma minimal pour la démonstration
create table if not exists profils_accueil (
  id text primary key,
  date_creation timestamptz not null default now(),
  etat_avancement text not null,
  secteur text not null,
  stade_financement text not null,
  objectif_media text not null,
  budget_estime text,
  preference_canaux text[] not null default '{}'
);

create table if not exists campagnes (
  id text primary key,
  profil_id text not null references profils_accueil(id),
  periode text not null,
  date_debut date,
  date_fin date,
  objectif_principal text
);

create table if not exists mesures_performance (
  id text primary key,
  campagne_id text not null references campagnes(id),
  canal text not null,
  portee numeric not null,
  interactions numeric not null,
  clics numeric not null,
  cout numeric not null,
  leads_qualifies numeric,
  date_mesure date not null
);
