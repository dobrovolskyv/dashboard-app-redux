export const selectAllPositions = (state) => state.positions;

export const selectVisiblePositions = (state, filters = []) => {
    if (filters.length === 0) return state.positions

    return state.positions.filter(pos => {
        const posFilters = [].concat(pos.role, ...pos.languages, pos.level, ...pos.tools)

        return filters.every(filter => posFilters.includes(filter))
    })
}