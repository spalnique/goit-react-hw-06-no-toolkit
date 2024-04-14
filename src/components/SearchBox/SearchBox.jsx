import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from '../../redux/filter/selectors';
import * as actions from '../../redux/filter/actions';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const value = useSelector(getFilterValue);
  const dispatch = useDispatch();
  return (
    <div className={css.searchContainer}>
      <p className={css.searchTitle}>Find contacts by name:</p>
      <input
        className={css.searchInput}
        type="text"
        value={value}
        onChange={(e) => {
          dispatch(actions.filterContacts(e.target.value));
        }}></input>
    </div>
  );
};

export default SearchBox;
