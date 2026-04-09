# Put End of the Nexus on GitHub

Use these steps in Terminal from this folder:

```bash
cd /Users/moore/Desktop/game
git init
git add .
git commit -m "First version of End of the Nexus"
```

Then:

1. Make a new repository on GitHub.
2. Copy the commands GitHub shows you after you create the repo.
3. They will look similar to this:

```bash
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

After that, you can connect the repo to:
- Cloudflare Pages
- GitHub Pages

## Files already added to help

- `README.md`
- `.gitignore`
- `DEPLOY_FREE_WEBSITE.md`

## Tip

If GitHub asks what kind of repo to make, a public repo is easiest for free website hosting.
