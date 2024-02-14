#!/usr/bin/env node
import nameQuestion from '../src/cli.js';

const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  nameQuestion();
};

export default brainGames;
