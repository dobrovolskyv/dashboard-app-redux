import { useSelector, useDispatch } from 'react-redux';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import { selectFilter } from 'store/filters/filter-selectors';
import { clearFilter,removeFilter } from 'store/filters/filter-actions';


const FilterPanel = () => {
  const dispatch = useDispatch()
  const currentFilters = useSelector(selectFilter);

  if (currentFilters.length === 0) return null

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((filter) => (
            <Badge
              key={filter}
              onClick={()=>dispatch(removeFilter(filter))}
              variant="clearable">{filter}</Badge>
          ))}
        </Stack>

        <button className='link'
        onClick={()=> dispatch(clearFilter)}
        >Clear</button>
      </div>
    </Card>
  )
}

export { FilterPanel };