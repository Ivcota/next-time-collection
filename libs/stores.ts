import create from "zustand/react";

interface TimeSubmitState {
  congregation: string;
  fieldServiceGroup: string;
  month: string;
  firstName: string;
  lastName: string;
  hours: number;
  videos: number;
  placements: number;
  comments: string;
}

interface ITSSFunctions extends TimeSubmitState {
  setFirstName: (name: string) => void;
  setLastName: (name: string) => void;
  setMonth: (month: string) => void;
  setFieldServiceGroup: (name: string) => void;
  setHours: (hours: number) => void;
  setPlacements: (placements: number) => void;
  setVideos: (videos: number) => void;
  setCongregation: (name: string) => void;
  resetTimeSubmitState: () => void;
}

const useTimeSubmitState = create<ITSSFunctions>((set) => {
  return {
    firstName: "",
    lastName: "",
    congregation: "",
    fieldServiceGroup: "",
    hours: 0,
    placements: 0,
    videos: 0,
    month: "",
    comments: "",
    setFirstName: (name) => {
      set({
        firstName: name,
      });
    },
    setLastName: (name) => {
      set({
        lastName: name,
      });
    },
    setCongregation: (name) => {
      set({
        congregation: name,
      });
    },
    setMonth: (month) => {
      set({
        month: month,
      });
    },
    setHours: (hours) => {
      set({ hours });
    },
    setVideos: (videos) => {
      set({ videos });
    },
    setFieldServiceGroup: (name) => {
      set({ fieldServiceGroup: name });
    },
    setPlacements: (placements) => {
      set({ placements });
    },
    resetTimeSubmitState: () => {
      set({
        firstName: "",
        lastName: "",
        comments: "",
        congregation: "",
        fieldServiceGroup: "",
        hours: 0,
        month: "",
        placements: 0,
        videos: 0,
      });
    },
  };
});
