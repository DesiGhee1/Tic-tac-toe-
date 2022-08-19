const resetButton = document.querySelector('#reset');
const announcer = document.querySelector('.announcer');

let board = ['', '', '', '', '', '','','','']
let currentPlayer = 'X';
let isGameActive = true;

const PLAYERX_WON = 'PLAYERX_WON';
const PLAYERO_WON = 'PLAYERO_WON';