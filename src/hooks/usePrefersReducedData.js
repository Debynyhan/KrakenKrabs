import { useMemo } from "react";

export default function usePrefersReducedData() {
    return useMemo(() => {
        if (typeof window === "undefined") return false;
        return (
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-data: reduce)").matches
        );
    }, []);
}
