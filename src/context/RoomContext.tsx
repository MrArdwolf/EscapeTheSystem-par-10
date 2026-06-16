import { createContext, useState, type PropsWithChildren } from "react";

export type RoomContextType = {
  showHints: Record<string, boolean>;
  markHintShown: (roomPath: string) => void;
};

export const RoomContext = createContext<RoomContextType | null>(null);

export const RoomProvider = ({ children }: PropsWithChildren) => {
    const [showHints, setShowHints] =useState<Record<string,boolean>>({});

    const markHintShown = (roomPath: string) => {
        setShowHints(prev => ({ ...prev, [roomPath]: true }));
    };

    return (
        <RoomContext.Provider value={{ showHints, markHintShown }}>
            {children}
        </RoomContext.Provider>
    );
};