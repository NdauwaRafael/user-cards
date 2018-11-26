import React, {Component} from 'react';
import CardList from './components/CardList/CardList'
import SearchUser from './components/SearchUser/SearchUser'
// import './App.css';

class App extends Component {
    state = {
        cards: []
    }
    render() {
        return (
            <div className="App">
                <SearchUser />
                <CardList cards={this.state.cards}/>
            </div>
        );
    }
}

export default App;
