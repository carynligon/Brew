import { StyleSheet } from 'react-native';

import vars from '~/styles/globals/variables';
import layout from '~/styles/globals/layout';

import timer from '~/styles/components/timer';
import progress from '~/styles/components/progress_bar';
import instructions from '~/styles/components/instructions';
import stepLong from '~/styles/components/step_long';
import header from '~/styles/components/header';
import app from '~/styles/app';
import home from '~/styles/home';
import login from '~/styles/login';
import signup from '~/styles/signup';

// components 
export const timerStyles = StyleSheet.create(timer);
export const progressStyles = StyleSheet.create(progress);
export const instructionsStyles = StyleSheet.create(instructions);
export const stepLongStyles = StyleSheet.create(stepLong);
export const headerStyles = StyleSheet.create(header);
export const appStyles = StyleSheet.create(app);
export const homeStyles = StyleSheet.create(home);
export const loginStyles = StyleSheet.create(login);
export const signupStyles = StyleSheet.create(signup);