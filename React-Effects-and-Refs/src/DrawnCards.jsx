import React, {useState, useEffect, useRef} from 'react';
import Card from './Card';
import axios from 'axios';
import './App.css';



function DrawnCards() {
    const [deck, setDeck] = useState('new');

    useEffect(() => {
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(res => setDeck(res.data.deck_id))
    }, [])



    const [cards, setCards] = useState([]);
    const btn = useRef();
    async function drawCards(){
        const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`)
        if (!res.data.cards[0]){
            alert('Error: no cards remaining!')
            
        } else {
            const {code, image, value, suit} = res.data.cards[0]
            let card = `${value} of ${suit}`
            setCards(c => [...c, {code, image, card}])
        }
        
    }
    const [shuffling, setShuffling] = useState(false);
    async function startShuffling() {
        setShuffling(true);
        
        try {
         const tes = await axios.get(`https://deckofcardsapi.com/api/deck/${deck}/shuffle/`);
          setCards([]);
        } catch (err) {
          alert(err);
        } finally {
          setShuffling(false);
        }
      }


    function renderShuffleBtn() {
        if (!deck) return null;
        return (
          <button onClick={startShuffling} > SHUFFLE DECK </button>
        );
      }
8
    return (
        <main>{renderShuffleBtn()}
           <div>
              <button onClick={drawCards} ref={btn}>Draw Cards</button>
              {cards.map(c => <Card key={c.code} image={c.image} card={c.card}/>)}
    
           </div>
        </main>
    );
}

export default DrawnCards;