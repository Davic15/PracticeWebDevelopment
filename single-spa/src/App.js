
import Layout from './components/Layout';

function App() {
  const randomValues = {
    name: 'David',
    surname: 'Macias',
    hasPets: true
  };

  const getDataFromChild = (data) => {
    console.log(data);
  }

  return (
    <Layout values={randomValues} funct={getDataFromChild}/>
  );
}

export default App;
