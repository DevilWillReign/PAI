import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const api = (path, properties) => {
    return fetch("http://localhost:3001/api/v1" + path, properties)
}

function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
}

export {
    api,
    useQuery
}