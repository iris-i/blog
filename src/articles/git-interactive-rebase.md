---
path: '/articles/git-interactive-rebase'
title: 'How to do a Git Interactive Rebase'
date: '2015-10-06'
intro: 'Git Interactive rebase is used to cleanup your git history. This is a search phrase that I constantly google despite having done it more often than I can count'

---

These are tried and true steps for cleaning up hastily typed commits or squashing multiple commits to make your git log cleaner.

1. Run `git log` to see the list of commits.
2. Run `git rebase -i HEAD~6` and set the number to the number of commits you want to see. 6 for eg, will allow you to edit your 6 most recent commits.
3. Refer to the Vim commands cheat sheet: http://vim.rtorr.com/ for possible operations.
4. Move your cursor to the commit you want to move and type `dd` to cut the line.
5. If you want to merge two commits into one, move your cursor to the commit you want to squash it with and press `p` to insert the line back in.
6. Hit `i` to get into INSERT mode.
7. With the cursor in the same line with the commit you want to squash, delete the word `pick` and replace it with `s` or `squash`. Hit ESC to exit the insert mode.
8. Hit `:wq` to write changes and quit.
9. It will attempt the rebase then prompt you to select the commit message you want, or write a new one.
10. Hit i to insert some text and use # to comment out lines.
11. When you're done, hit `:wq` to save.