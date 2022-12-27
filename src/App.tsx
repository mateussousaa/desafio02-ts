import {
  ChakraProvider
} from '@chakra-ui/react';
import './App.css'
import { Header } from './components/Header'
import { Card } from './components/Card';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Card />
    </ChakraProvider>
  );
}

export default App;
