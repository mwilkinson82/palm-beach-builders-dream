import { useEffect, useState } from "react";

/**
 * Site-wide audio preference. Starts muted (browser autoplay policy).
 * Once the visitor unmutes the hero, the choice persists for the session so
 * internal navigation doesn't re-mute or re-prompt.
 */
type Listener = (unmuted: boolean) => void;

const STORAGE_KEY = "bmb:audio-unmuted";

const readInitial = (): boolean => {
  if (typeof window === "undefined") return false;
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
};

let unmuted = readInitial();
const listeners = new Set<Listener>();

export const audioPreference = {
  get: () => unmuted,
  set: (value: boolean) => {
    if (unmuted === value) return;
    unmuted = value;
    try {
      window.sessionStorage.setItem(STORAGE_KEY, value ? "1" : "0");
    } catch {
      /* ignore */
    }
    listeners.forEach((l) => l(unmuted));
  },
  subscribe: (l: Listener) => {
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  },
};

export const useAudioPreference = () => {
  const [value, setValue] = useState(unmuted);
  useEffect(() => audioPreference.subscribe(setValue), []);
  return value;
};
