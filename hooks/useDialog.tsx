import { create } from "zustand";

type DialogType =
    | "lead-form"
    | "join-modal"

interface DialogProps {
    data?: any;
    type: DialogType | null;
    isOpen: boolean;
    onOpen: (type: DialogType, data?: any) => void;
    onClose: () => void;
}

export const useDialog = create<DialogProps>((set) => ({
    type: null,
    data: null,
    isOpen: false,
    onOpen: (type, data) => { set({ isOpen: true, data, type }) },
    onClose: () => set({ isOpen: false, type: null, data: null }),
}));
