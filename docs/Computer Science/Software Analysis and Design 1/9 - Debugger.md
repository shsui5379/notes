# GDB
- The program to be debugged should be compiled with the -g flag, to include debugging symbols
- add the `-tui` switch to the gdb command to use tui
- `gdb main` to debug program `main`
- `gdb -p pid` to debug a currently running program with pid `pid`
- `start`: to start debugging
- `step`: steps into a function
- `next`: runs the next line
- `print varname`: print the value of `varname`
- `break num`: create a breakpoint at line `num`
- `cont`: continue running until breakpoint is hit
- `watch expression`: create a watchpoint for `expression`
- `info locals` for local variable details
- `bt`: backtrace: show call stack
- `up`: going up the call stack
- `down`: going down the call stack
- `checkpoint`: create a checkpoint at current line, which stores the states of the program at that line
- `restart checkpointID`: to go back to the checkpoint

# coredumps
- memory dumped from a crashed program for post-mortem debugging
- stored in `/var/lib/systemd/coredump`
- `ulimit -c unlimited` to tell system to make dumps
- `gdb coredumpfile` to debug `coredumpfile`