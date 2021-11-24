import React from 'react';
import styled from 'styled-components';
const Counter = styled.div`
with: 80%;
height: 100vh;
margin:auto;
align-items:center;
text-align:center;
`;
const Text = styled.h4`
fontSize: 16px;
width:150px;
height: 30px;
fontWeight: bold;
border: 1px solid black;
vertical-align: middle;
display: inline-block;
`;
const Button = styled.button`
fontWeight: bold;
fontSize: 16px;
width: 100px;
height: 30px;
margin: 0 5px;
`;

class TimeCounter extends React.Component {
    constructor(props) {
        super(props);
    }
    state={
        count:0
    }
   setIntervalID = null;
    incrementCount = () => (this.setState({count: this.state.count+1 }));
    decrementCount = () => {
        if(this.state.count >0){
            this.setState((prev) => ({count: prev.count - 1}))
        }
    };

    startCount = () =>{
        if(this.state.count > 0 && !this.setIntervalID){
            this.setIntervalID = setInterval(()=>{
                this.setState((prev) => ({count:prev.count -1}),
                    ()=>{
                        if(this.state.count === 0){
                            clearInterval(this.setIntervalID)
                            this.setIntervalID = null
                        }
                    }
                    )
            },1000)
        }
    }

    stopCount =()=>{
        if(this.state.count > 0 && this.setIntervalID){
            clearInterval(this.setIntervalID)
            this.setIntervalID = null
        }
    }
    resetCount = ()=>{
       this.setState({count:0})
        clearInterval(this.setIntervalID)
        this.setIntervalID = null
    }
    render() {
        return(
            <>
                <Counter>
                    <Button onClick={this.decrementCount}>-</Button>
                   <Text>{this.state.count}</Text>
                    <Button onClick={this.incrementCount}>+</Button>
                    <br/>

                    <Button onClick={this.startCount}>Start</Button>
                    <Button onClick={this.stopCount}>Stop</Button>
                    <Button onClick={this.resetCount}>Reset</Button>
                </Counter>
            </>
        )
    }
}
export default TimeCounter