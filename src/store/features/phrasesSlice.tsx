import { createSlice } from "@reduxjs/toolkit";

export interface Phase {
  id: string;
  title: string;
  description: string;
}

export interface PhraseState {
  phases: Phase[];
  selected: Phase;
  loader: LoaderState;
}

export enum LoaderState {
  INIT = "INIT",
  LOADED = "LOADED",
  LOADING = "LOADING",
  RELOAD = "RELOAD",
  ERROR = "ERROR",
}

export const phasesSlise = createSlice({
  name: "phases",
  initialState: {
    loader: LoaderState.INIT,
    phases: [],
    selected: {} as Phase,
  } as PhraseState,
  reducers: {
    setPhraseSelected: (state, action) => {
      state.selected = action.payload.selected;
    },

    setLoader: (state, action) => {
      state.loader = action.payload.loader;
    },

    setPhases: (state, action) => {
      state.phases = action.payload.phases;
      state.loader = LoaderState.LOADED;
    },

    addPhase: (state, action) => {
      state.phases = state.phases.concat(action.payload.phase);
      state.loader = LoaderState.LOADED;
    },

    updatePhrase: (state, action) => {
      state.phases = state.phases.reduce((accu: Phase[], curr: Phase) => {
        if (curr.id === action.payload.phase.id) {
          curr = action.payload.phase;
        }
        accu.push(curr);
        return accu;
      }, []);
      state.loader = LoaderState.LOADED;
    },

    removePhase: (state, action) => {
      state.phases = state.phases.filter(
        (phase: Phase) => phase.id !== action.payload.id
      );
      state.loader = LoaderState.LOADED;
    },
  },
});

export const {
  addPhase,
  setPhases,
  setLoader,
  removePhase,
  setPhraseSelected,
  updatePhrase,
} = phasesSlise.actions;

export default phasesSlise.reducer;
