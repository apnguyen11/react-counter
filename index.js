class App extends React.Component{
    state = {
        counter: 0
    }
    incrementBtn = () => {
        this.state.counter ++
        this.setState({})
    }
    decrementBtn = () => {
        this.state.counter --
        this.setState({})
    }
    render(){
        return(
            <CounterDisplay counter={this.state.counter} action1={this.incrementBtn} action2={this.decrementBtn}/>
        )
    }
}

const CounterDisplay = function(props){
    console.log(props)
    return (
        <div className="d-flex flex-column justify-content-center align-items-center m-auto rounded" style={{width:"200px", height:"300px", backgroundColor:"#f4f4f4", border:"5px solid black"}}>
            <h1>{props.counter}</h1>
            <button onClick={props.action1}  className="button btn-success btn-lg m-1">Increment</button>
            <button onClick={props.action2}  className="button btn-success btn-lg m-1">Decrement</button>
        </div>
        
    )
}





ReactDOM.render(<App/>, document.getElementById('root'))