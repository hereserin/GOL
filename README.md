# Conway's Game of Life

This implementation of the famous cellular automaton _Game of Life_ is built using JavaScript and is rendered using HTML Canvas.

### To play: 
Use the control panel at the top to stop, start, and reset the simulation. 
Click on squares to add 'live' cells. 

[Live Version](http://erin-e-marshall.com/GOL/)



## Background
In The Game of Life, a cell can be in one of two states: alive or dead. Whether a cell lives on to a subsequent generation is determined by the following rules: 
* If fewer than two of a living cell's eight neighbors is alive, than that cell will NOT survive to the next generation (think: underpopulation) 
* If a living cell has two or three living neighbors, the cell will survive to the next generation. 
* If a living cell has MORE than three living neighbors, the cell will NOT survice to the next generation (think: overpopulation) 
* If a dead cell has EXACTLY three living neighbors, it becomes a living cell (think: reproduction) 

This game simulates the growth and decline of life, and its initial state determines all following states of the board, making it a 0-player game. The rules listed above set into motion a compelling model of natural processes. In the _Game of Life_, patterns emerge from seeming chaos and often disolve away again by their own self-resolve. 


## ToDos: 
I plan to add a menu with interesting initial templates, in particular: a pulsar and a Gosper glider gun. 
Another feature I would like to implement is a means to control the speed of the simulation. 
