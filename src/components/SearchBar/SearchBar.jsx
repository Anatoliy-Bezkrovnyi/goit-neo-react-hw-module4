import styles from "./SearchBar.module.css";
import { MdOutlineSearch } from "react-icons/md";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const submitHandle = (event) => {
    event.preventDefault();

    const { value } = event.target.elements.search;

    if (!value?.trim()) {
      toast.error("Seacrh field is empty!");
      return;
    }

    onSubmit(value);
  };

  return (
    <header className={styles.container}>
      <form onSubmit={submitHandle}>
        <div className={styles.searchForm}>
          <input
            className={styles.input}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus={true}
            placeholder="Search images and photos"
          />
          <button className={styles.button} type="submit">
            <MdOutlineSearch />
          </button>
        </div>
      </form>
    </header>
  );
};

export default SearchBar;