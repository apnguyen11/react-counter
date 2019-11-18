class App extends React.Component{
    state = {
        counter: 0
    }
    incrementBtn = () => {
        this.state.counter ++
        this.setState({})
    }
    render(){
        return(
            <CounterDisplay counter={this.state.counter} action={this.incrementBtn}/>
        )
    }
}

const CounterDisplay = function(props){
    console.log(props.counter)
    return (
        <div>
            <h1>{props.counter}</h1>
            <button onClick={props.action}>Increment</button>
        </div>
        
    )
}





ReactDOM.render(<App/>, document.getElementById('root'))