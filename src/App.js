import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
    state = { advice: '' };//global object

    componentDidMount() {
        this.fetchAdvice();
    }
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                this.setState({ advice: advice });
            }
            )
            .catch((error) => {
                console.log(error);
            }
            )
    }

    render() {
        const { advice } = this.state;
        return (
            <div className="bg">
                <div className="card text-center border shadow">
                    <h6 className="card-header text-primary">
                        Advice Box
                    </h6>
                    <div className="card-body">
                        <h4 className="card-title text-danger">{advice}</h4>
                        <button className="btn btn-primary" onClick={this.fetchAdvice}>Need More Advice?</button>
                    </div>
                    <div className="card-footer text-success">
                        Think Positive!
                    </div>
                </div>
            </div>
        )
    }
}
export default App;