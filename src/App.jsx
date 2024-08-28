import { useState,useEffect } from 'react'
import Card from './Card'
import axios from 'axios';


function App() {
  const [advice, setAdvice] = useState('"Click the button to get advice."');
  const [adviceId, setAdviceId] = useState('0');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
const api_Key = `https://api.adviceslip.com/advice`;
  const fetchAdvice = () => {
    axios.get(api_Key)
      .then(response => {
        const data = response.data;
        setAdvice(data.slip.advice);
        setAdviceId(data.slip.id);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleClick = () => {
    setIsButtonDisabled(true);
    fetchAdvice();
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 3000); // Disable the button for 3 seconds
  };

  useEffect(() => {
    fetchAdvice(); // Fetch initial advice on component mount
  }, []);

  return (
    <>
     <Card  advice={advice}
        adviceId={adviceId}
        handleClick={handleClick}
        isButtonDisabled={isButtonDisabled}/>
    </>
  )
}

export default App
