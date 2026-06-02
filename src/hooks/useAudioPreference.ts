import { useEffect, useState } from "react";

/**
 * Site-wide audio preference. Starts muted (hero policy). When the user
 * un-mutes the hero, downstream inline players (like the AJ walkthrough)
 * can opt-in to play with sound — and revert if the user re-mutes.
 */
type Listener = (unmuted: boolean) => void;

let unmuted = false;
const listeners = new Set<Listener>();

export const audioPreference = {
  get: () => unmuted,
  set: (value: boolean) => {
    if (unmuted === value) return;
    unmuted = value;
    listeners.forEach((l) => l(unmuted));
  },
  subscribe: (l: Listener) => {
    listeners.add(l);
    return () => listeners.delete(l);
  },
};

export const useAudioPreference = () => {
  const [value, setValue] = useState(unmuted);
  useEffect(() => audioPreference.subscribe(setValue) as unknown as () => void, []);
  return value;
};