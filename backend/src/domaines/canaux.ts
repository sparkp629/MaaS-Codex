export const CANAUX = [
  "X",
  "LinkedIn",
  "YouTube",
  "Twitch",
  "Instagram",
  "Meta",
  "Reddit",
  "Telegram",
  "Discord",
  "Substack",
] as const;

export type Canal = (typeof CANAUX)[number];
