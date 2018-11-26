import React, {Component} from 'react';
import CardList from './components/CardList/CardList'
import SearchUser from './components/SearchUser/SearchUser'
// import './App.css';

class App extends Component {
    state = {
        cards: []
    };
    fetchCardsData = (card)=>{
        this.setState(prevState=>({
            cards: prevState.cards.concat(card)
        }))
    };
    render() {
        return (
            <div className="App">
                <SearchUser onFormSubmit={this.fetchCardsData} />
                <CardList cards={this.state.cards}/>
            </div>
        );
    }
}

export default App;
