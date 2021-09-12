- Build systems make it easier to build executables from multiple source files

# Make

## Writing a makefile
- Makefiles use a filename of `Makefile`, placed in the directory where it'll be used
- Comments start with `#`
- Syntax is
```makefile
target: dependencies
	command to create target out of dependency
```
  - That is a tab character where you see that indentation
  - The command itself will also be printed onto the console.  To make that not happen, prefix the command with `@`

## What make does
- Make makes targets by running the command you provided
- Before making a target, make makes sure that all the dependencies are made first.  If something isn't made yet, it will make it before making the target
  - If the dependency is a file, it just needs to exist


## How to get make to make things
- Running `make` in the shell makes all the targets in the current directory's makefile
  - If this is isn't the first time running `make` in the directory, make is smart enough to only remake the targets whose dependencies have been updated since the last make
- To make a specific target `targetName`, run `make targetName`