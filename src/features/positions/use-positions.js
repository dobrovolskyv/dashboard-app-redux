import { useSelector } from "react-redux";

import { selectVisiblePositions } from "./position-slice";

import { selectFilter } from "../filter/filter-slice";


export const usePositions = () => {


    const currentFilters = useSelector(selectFilter);
    const positions = useSelector((state) => selectVisiblePositions(state, currentFilters))

    return positions;
}