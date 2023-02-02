import SearchBar from "./SearchBar";
import TweetData from "../../tweets";
function Search() {
  return (
    <div className="bg-slate-900">
      <SearchBar
        placeholder="@techy_nidhi"
        data={TweetData}
      />
    </div>
  );
}

export default Search;
