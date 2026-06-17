import { createContext, useState, type PropsWithChildren } from "react";
import { useSearchParams } from "react-router-dom";

export type RoomContextType = {
    showHints: Record<string, boolean>;
    showHintNow: boolean;
    markHintShown: (roomPath: string) => void;
    restoreHint: () => void;
    completedRooms: string[];

};

export const RoomContext = createContext<RoomContextType | null>(null);

export const RoomProvider = ({ children }: PropsWithChildren) => {
    const [searchParams, setSearchParams] = useSearchParams();
    
    const [showHints, setShowHints] =useState<Record<string,boolean>>({});

    const showHintNow = searchParams.get("hint") === "true";

    const [completedRooms, setCompletedRooms] = useState<string[]>([]);

    const markHintShown = (roomPath: string) => {
        setSearchParams({ hint: "true" });
        setShowHints(prev => ({ ...prev, [roomPath]: true }));
    };

    const restoreHint = () => {
        setSearchParams({ hint: "true" });
    };

    const addCompletedRoom = (roomPath: string) => {
        setCompletedRooms(prev => [...prev, roomPath]);
        // setSearchParams({ completedRooms: prev.join(",") });
    };

    return (
        <RoomContext.Provider value={{ showHints, markHintShown, showHintNow, restoreHint, completedRooms,  }}>
            {children}
        </RoomContext.Provider>
    );
};