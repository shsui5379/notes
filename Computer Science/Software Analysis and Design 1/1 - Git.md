# Git

## Concept
- Git is a version control system
- Stores different versions of the codebase
- Usages
    - Disaster recovery
    - Collaboration
- Forks are like branches, but it's a whole new repository
    - Downstream refers to the forks, while upstream refers to the forks' parents

## Getting started
- `git init`: initializes a repository in the current directory

## Commits
- `git add file`: stages the changes to `file` for commit
- `git reset file`: undos add
- `git remove file`: remove file
- `git mv oldname newname`: rename the file oldname to newname
- `git commit -m "notes"`: commits the staged changes, with a note message
- Git stores snapshots, or commits, of your code
- Commits are uniquely identified by a hash
- Each commit stores pointers to its parent commits

## Branches
- Creating another branch of the codebase so you don't affect the existing code
- `git branch name`: create a new branch from the current branch, and call it `name`
- `git checkout name`: switch into the branch named `name`
- `git merge name`: merges the branch named `name` to the current branch
    - Merge conflict: when a file has been modified in both branches, and git doesn't know know to safely merge those files without manual intervention.  Open up the file with the conflict, resolve the conflict, and commit the fixed version.

## Remotes
- Copy of the repository in another location (ex: on GitHub)
- `git remote add name location`: adds a remote location called `name`, located at `location`
- `git push`: pushes the local repository contents to the remote location
- `git pull`: pulls repository content from remote location to local
- `git clone repoaddress`: clones the repo locally, from repoaddress
