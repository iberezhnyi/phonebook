import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { filterList } from '../../redux/filter/filterSlice';
import { FilterLabel, FilterInput, LabelName } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <FilterLabel>
      <LabelName>Find contacts by name</LabelName>
      <FilterInput
        type="text"
        value={filter}
        onChange={event => dispatch(filterList(event.currentTarget.value))}
      />
    </FilterLabel>
  );
};

export default Filter;
