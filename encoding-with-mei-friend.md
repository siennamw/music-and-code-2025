# Encoding with mei-friend

The tool we're going to use for our MEI encodings is [mei-friend](https://mei-friend.mdw.ac.at/), which will take the
place of your IDE/VSCode. It gives you the notated output and MIDI playback, and it integrates with GitHub. Link to
mei-friend help docs: https://mei-friend.github.io/.

Here are the steps:

1. Create a new branch for your work in this repository. You can do this from the command line, like we
   did before (see [git-tips.md](./git-tips.md)), or you
   can [do it in GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch).
   The source branch of your new branch should always be the latest version of the `main` branch. Your branch will need
   to be pushed to the repo before mei-friend can see it, so be sure to do that if you create the branch locally. Note:
   a branch can be pushed to GitHub even if it has no commits.

2. [Connect mei-friend to your GitHub account](https://mei-friend.github.io/docs/basic/github/) and load the document
   you want to work on. mei-friend can't create a new file, so if you need a new MEI file you'll have to create it
   locally and push it to your branch in GitHub (see [git-tips.md](./git-tips.md)).

3. [Commit and push your changes directly from mei-friend](https://mei-friend.github.io/docs/basic/github/#committing-changes).
   Note: mei-friend automatically pushes your commits to your branch in GitHub.

4. [Open a pull request in GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request?platform=mac#creating-the-pull-request).
   The base branch will always be `main` and the compare branch will be your branch.

5. The instructor will merge your changes into `main` and your branch will be deleted from GitHub. You'll create a new
   branch the next time you encode.
