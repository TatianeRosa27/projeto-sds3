import DataTable from "components/DataTable";
import Footer from "components/Footer";
import Navbar from "components/NavBAr";


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary">Ola Mundo!</h1>
        <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
