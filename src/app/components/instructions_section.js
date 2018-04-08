import React, { Component } from 'react';
import {
    Image,
    ScrollView,
    Text,
    View
} from 'react-native';
import methods from '~/fixtures/methods';
import ProgressBar from '~/components/progress_bar';
import Header from '~/components/header';
import { instructionsStyles } from '~/styles';


import IngredientsList from '~/components/ingredients_list';
import StepLongForm from '~/components/step_long';
import Timer from '~/components/timer';

class InstructionsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      timerHeader: false,
      enableStart: false,
      instruction: 0,
      minutes: 0,
      running: false,
      seconds: 0,
      timerTextMins: '00',
      timerTextSecs: '00',
      textTime: '00:00',
      totalSeconds: 0,
      method: 'chemex',
      startTimer: false,
      finishedTimer: false,
    };
    this.timer;
    this.enableStart = this.enableStart.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }
  onScroll(event) {
    const scrollOffset = event.nativeEvent.contentOffset.y;
    const { offset } = this.state;
    this.start.measure((fx, fy) => {
      if (offset === 0) {
        this.setState({ offset: fy });
      }
    });
    if (offset !== 0 && !this.state.timerHeader && (scrollOffset > offset - 50)) {
      this.setState({ timerHeader: true });
    }
    else if (this.state.timerHeader && scrollOffset < offset - 50) {
      this.setState({ timerHeader: false });
    }
  }
  enableStart() {
    this.setState({enableStart: true});
}

  nextStep() {
      if (methods[this.state.method].nonTimedSteps.length - 1 === this.state.instruction) {
          this.enableStart();
      }
      else {
          this.setState({instruction: this.state.instruction + 1});
      }
  }

  updateSomething() {
      const { method, totalSeconds: time } = this.state;
      this.setState({totalSeconds: (this.state.minutes * 60 + this.state.seconds), running: true});
      if (this.state.seconds < 59) {
          this.setState({seconds: this.state.seconds + 1})
          if (this.state.seconds <= 9 && this.state.minutes <= 9) {
            this.setState({textTime: '0' + this.state.minutes + ':' + '0' + this.state.seconds})
          } else if (this.state.seconds >= 10 && this.state.minutes <= 9) {
            this.setState({textTime: '0' + this.state.minutes + ':' + this.state.seconds})
          } else {
            this.setState({textTime: this.state.minutes + ':' + this.state.seconds})
          }
          } else {
            this.setState({minutes: this.state.minutes + 1, seconds: 0});
            this.setState({textTime: '0' + this.state.minutes + ':00'});
        }
        this.props.startTimer(this.props.timer.time);
      }

  pauseTimer() {
      clearTimeout(this.timer);
      this.setState({running: false});
  }

  startTimer() {
      this.setState({ startTimer: true }, () => {
          this.timer = setInterval(this.updateSomething.bind(this), 1000);
      });
  }

  stopTimer() {
      clearTimeout(this.timer);
      this.setState({ 
          finishedTimer: true, 
          running: false, 
          disabled: true });
  }

  handleStartStop() {
      if (this.state.enableStart) {
          if (this.state.running) {
              this.pauseTimer();
          }
          else {
              this.startTimer();
          }
      }
      else {
          this.nextStep();
      }
  }

  resetTimer() {
      clearTimeout(this.timer);
      this.setState(this.initialState);
  }
  render() {
    const { enableStart, running, disabled, totalSeconds,
      instruction, startTimer, resetTimer, method, stopTimer,
      finishedTimer, textTime } = this.state;
    const currentStep = !startTimer ? methods[method].nonTimedSteps[instruction] : methods[method].timedSteps[instruction];
    let timerText = 'next';
    if (enableStart) {
        timerText = running ? 'pause' : 'start';
    }
    return (
      <View>
        <View style={instructionsStyles.headerContainer}>
          <Header method={methods['chemex']} timer={this.state.timerHeader} timerText={textTime} currentStep={currentStep} /> 
          <ProgressBar {...this.props} method={methods['chemex']} />
        </View>
        <ScrollView 
          contentContainerStyle={instructionsStyles.contentContainer}
          onScroll={(event) => this.onScroll(event)}
          scrollEventThrottle={60}
        >
          <View>
            <Image
              style={{width: 400, height: 200}}
              source={require('../assets/chemex.png')}
            />
            <IngredientsList method={methods['chemex']} />
            <Timer {...this.state} handleStartStop={this.handleStartStop} resetTimer={this.resetTimer} startTimer={this.startTimer} timerText={timerText} stopTimer={this.stopTimer} />
            <View ref={(start) => this.start = start}>
              {methods['chemex'].nonTimedSteps.map((step, i) => (
                <StepLongForm step={step} index={i + 1} key={`non-timed-step-${i}`} />
              ))}
              {methods['chemex'].timedSteps.map((step, i) => (
                <StepLongForm step={step} index={i + methods['chemex'].nonTimedSteps.length + 1} key={`timed-step-${i}`} />
              ))}
            </View>
            <View>
              <Text>Other Recipes</Text>
            </View>
          </View>
        </ScrollView>
      </View>);
  }
}

export default InstructionsSection;