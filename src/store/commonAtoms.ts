import { atom } from "jotai";

// Atom to trigger the Spinner component upon loading
export const toggleSpinner = atom<boolean>(false)