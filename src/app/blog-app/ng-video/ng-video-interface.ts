export interface Video extends HTMLElement {
  play(): void;
  pause(): void;
  duration: number;
  volume?: number;
  currentTime?: number;
}