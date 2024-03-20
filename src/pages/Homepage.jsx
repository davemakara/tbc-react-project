import ProductsList from "../components/ProductsList";
import SearchBox from "../components/SearchBox";

const Homepage = () => {
  return (
    <main className="main-wrapper">
      <SearchBox />
      <ProductsList />
    </main>
  );
};

export default Homepage;
