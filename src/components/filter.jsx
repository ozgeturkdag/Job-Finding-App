import { useDispatch } from "react-redux";
import {
  handleInputChange,
  handleStatusChange,
  handleSortChange,
  handleReset,
} from "../app/jobSlice";

const Filter = () => {
  const dispatch = useDispatch();

  //   şirket ismi inputu değiştiğinde çalışır
  const onSearchChange = (e) => {
    dispatch(handleInputChange(e.target.value));
  };

  // durum filtresi değiştiğinde
  const onStatusChange = (e) => {
    dispatch(handleStatusChange(e.target.value));
  };

  // sıralama selecti değiştiğinde
  const onSortChange = (e) => {
    dispatch(handleSortChange(e.target.value));
  };

  // filtreleri temizle
  const onResetButton = () => {
    dispatch(handleReset());
  };

  return (
    <section className="filter-sec add-sec">
      <h2>Search job</h2>
      <div className="inputs">
        <div className="input-field">
          <label>Company: </label>
          <input type="text" onChange={(e) => onSearchChange(e)} />
        </div>
        <div className="input-field">
          <label>Status: </label>
          <select onChange={(e) => onStatusChange(e)}>
            <option value="Hepsi" hidden>
              All
            </option>
            <option value="Interview">Interview</option>
            <option value="Rejected">Rejected</option>
            <option value="On Process">On Process</option>
          </select>
        </div>
        <div className="input-field">
          <label>Sort: </label>
          <select onChange={(e) => onSortChange(e)}>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
          </select>
        </div>
        <button onClick={onResetButton}>Clear Filters</button>
      </div>
    </section>
  );
};

export default Filter;
