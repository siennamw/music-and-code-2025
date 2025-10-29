# Git and GitHub Tips

## Work Flow

When you sit down to write code, follow these steps:

1. Check out the `main` branch and pull down any changes from GitHub.
    ```shell
    git checkout main && git pull
    ```
2. While you have `main` checked out, create a new branch for the work you will be doing. Note: Ideally branch names
   should be specific to the work you’ll be doing on that branch (this helps avoid collisions between branch names which
   can be confusing).
    ```shell
    git checkout -b new-branch-name
    ```
3. Make your code changes.
4. Commit your code changes.
    ```shell
    git commit -a -m "write your commit message here"
   
   # note: the -a flag means "all"; this allows you to skip the step of staging files to commit
   # note: the -m flag means "message"; this allows you to create your commit message as part of the command
    ```
5. Push your branch to GitHub.
    ```shell
    git push
    ```
   Note: If you get an error message like `current branch has no upstream branch`, the error message will also include
   the command to create an upstream branch (it will include `--set-upstream`), so copy that command and run it instead.
   Once the upstream branch exists, you can continue pushing to it with `git push` if you make more commits to it
   locally.
6. Open a PR in GitHub.
    - Navigate to https://github.com/siennamw/music-and-code-2025/pulls
    - Click the "New pull request" button
    - Set the base dropdown to `main` and the compare dropdown to the name of your branch
    - Scroll down to see the diff (the state of the code before and after your change) to make sure the changes are what
      you expect
    - Optionally, add a title and/or description to your pull request
    - Click the "Open pull request" button

## Other Helpful Commands

`git status` - to check which branch you're on, if you have uncommited changes, and if you have local commits that
haven't been pushed yet

`git log --oneline` - to see your last few commits; to leave this view, type `q` for "quit"

`git reset HEAD~1` - undo your last commit, but keep the code changes from it

`git branch -d branch-to-delete` - delete an old branch from your local system; branches in GitHub are automatically
deleted when its pull request is merged

## Other Tips

### Commit early and often

Feel free to commit any time, but especially after you've completed a logical chunk of work. Think of commits like save
points in a video game: if something goes wrong, you'll be glad you have a recent one.

### Set your IDE to save automatically

If your code changes aren't saved, `git` won't see them. I recommend setting your IDE to save automatically so you don't
have to think about this as you work.

### Change git's default text editor

The default text editor for `git` is `vim`, which does not provide an intuitive interface. I recommend `nano` instead.
Here are the steps to set that up:

1. Ensure `nano` is installed on your system:
   ```shell
   # Linux/Mac
   which nano
   /usr/local/bin/nano # <- example of expected output if nano is installed
   
   # Windows
   where nano
   C:\Windows\nano.exe # <- example of expected output if nano is installed
   ```
2. If it is not installed, here are options to install it:
    - Linux/Mac:
        - install [Homebrew](https://brew.sh/)
        - run `brew install nano` to install nano via Homebrew
    - Windows: https://github.com/okibcn/nano-for-windows

3. Repeat step 1 to ensure that `nano` is installed and available for use.
4. Once `nano` is installed, set it as the text editor for git with this command:
   ```shell
   git config --global core.editor "nano"
   ```
