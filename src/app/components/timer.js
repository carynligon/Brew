import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import reactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';
import Header from '~/components/header';
import Instructions from '~/components/instructions';
import methods from '~/fixtures/methods';
import { timerStyles } from '~/styles';

const Timer = ({ disabled, finishedTimer, handleStartStop, instruction, method, resetTimer, startTimer, stopTimer, textTime, time, timerText, totalSeconds }) => (
    <View style={timerStyles.container}>
        <Instructions time={totalSeconds} resetTimer={resetTimer} instruction={instruction} method={method} startTimer={startTimer} stopTimer={stopTimer} finishedTimer={finishedTimer} />
        <Text style={timerStyles.timerText}>
            {textTime}
        </Text>
        {!disabled && <TouchableOpacity
            style={timerStyles.startBtn}
            onPress={handleStartStop}>
        <Text style={timerStyles.startText}>{timerText}</Text>
        </TouchableOpacity>}
        {!disabled && <TouchableOpacity
            onPress={resetTimer}>
        <Text style={timerStyles.resetBtn}>Reset</Text>
        </TouchableOpacity>}
        <Text>
            Scroll down for full instructions
        </Text>
    </View>
)

reactMixin(Timer.prototype, TimerMixin);

export default Timer;