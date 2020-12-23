import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";
 
const NUM_DICE = 5;
const NUM_ROLLS = 3;
const ROUNDS = 13;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rolling: false,
      playing: false,
      round: 0,
      dice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      },
      currentScore: 0,
      highScore: 0  //current just recet best score
    };
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
    this.reset = this.reset.bind(this);
    this.animateRoll = this.animateRoll.bind(this);
  }

  animateRoll(){
    let interval = setInterval(() => {
      this.setState(st => ({
       dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
       )}))
    }, 100);
    this.setState({rolling: true}, ()=> {setTimeout(this.roll, 1000, interval)});
  }

  roll(evt) {
    // roll dice whose indexes are in reroll
    clearInterval(evt);
    if (this.state.rollsLeft>0 && this.state.round<ROUNDS){
      this.setState(st => ({
       dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
       ),
        locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
        rollsLeft: st.rollsLeft - 1,
        playing: true,
        rolling: false
      }));
    }
  }

  toggleLocked(idx) {
    // toggle whether idx is in locked or not
    if (this.state.rollsLeft>0 && this.state.playing){
      this.setState(st => ({
        locked: [
          ...st.locked.slice(0, idx),
          !st.locked[idx],
          ...st.locked.slice(idx + 1)
          ]
      }));
    }
  }

  reset (){
    this.setState(
      {
      playing: false,
      round: 0,
      dice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      },
      currentScore: 0
    });
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
     if(this.state.playing){
      this.setState(function(st){
        let result  = ruleFn(this.state.dice); 
       return( {
        scores: { ...st.scores, [rulename]: result },
        rollsLeft: NUM_ROLLS,
        locked: Array(NUM_DICE).fill(false),
        round: this.state.round+1,
        currentScore: st.currentScore + result,
        highScore: (st.round === ROUNDS-1 && (st.currentScore>st.highScore)) ? st.currentScore+result: st.highScore
      })});
     
      if (this.state.rollsLeft>0 && this.state.round<ROUNDS){this.animateRoll();}
      else {this.setState({playing:false})}
     }           
  }

  render() {
    return (
      <div className='Game'>
        <header className='Game-header'>
          <h1 className='App-title'>Yahtzee!</h1>

          <section className='Game-dice-section'>
            <Dice
              dice={this.state.dice}
              locked={this.state.locked}
              handleClick={this.toggleLocked}
              rolling={this.state.rolling}
            />
            <div className='Game-button-wrapper'>
            { this.state.round<ROUNDS ?
              <button
                className='Game-reroll'
                disabled={this.state.locked.every(x => x)}
                onClick={this.animateRoll}
              >
                {this.state.rollsLeft} Rerolls Left
              </button>:
              <button
                className='Game-reroll'
                disabled={this.state.locked.every(x => x)}
                onClick={this.reset}
              >
                Reset
              </button>             
            }  
            </div>

          </section>
        </header>
        {(this.state.round<ROUNDS) ?<ScoreTable round={this.state.round} dur={ROUNDS} currentScore={this.state.currentScore} doScore={this.doScore} scores={this.state.scores} />:
         <div><h2>YOUR SCORE IS: {this.state.currentScore} </h2><h2>YOUR HIGHSCORE IS: </h2> <h2 className="HS"> {this.state.currentScore} </h2></div> 
        }
      </div>
    );
  }
}

export default Game;
