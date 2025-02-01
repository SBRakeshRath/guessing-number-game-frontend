import "./App.css";
import Footer from "./components/footer";
import InputForm from "./components/InputForm";
import Nav from "./components/Nav";
import Rules from "./components/rules";
import AuthContextProvider from "./context/authContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <Nav />
      <InputForm />
      <Rules />
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
