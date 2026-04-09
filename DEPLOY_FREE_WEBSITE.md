# Publish End of the Nexus for Free

This game is ready to be published as a free website.

## Best Free Choice

Use `Cloudflare Pages`.

Why:
- free
- good for static HTML games
- gives you your own website link
- works well with this project

## What To Upload

Upload the whole `/Users/moore/Desktop/game` folder, especially:
- `index.html`
- `script.js`
- `style.css`
- `manifest.webmanifest`
- `sw.js`
- `404.html`
- `robots.txt`
- `how-to-play.html`
- `privacy.html`
- `updates.html`

## Cloudflare Pages Steps

1. Make a free GitHub account if you do not already have one.
2. Put this game project into a GitHub repository.
3. Make a free Cloudflare account.
4. Open `Cloudflare Pages`.
5. Choose `Import an existing Git repository`.
6. Pick your game repository.
7. Use these settings:

Build command:
```txt
exit 0
```

Build output directory:
```txt
.
```

8. Click `Save and Deploy`.

After that, Cloudflare gives you a free website like:
```txt
your-site-name.pages.dev
```

## GitHub Pages Steps

If you want GitHub Pages instead:

1. Put the project in a public GitHub repository.
2. Open the repository `Settings`.
3. Open `Pages`.
4. Under `Build and deployment`, choose:
   - `Deploy from a branch`
   - branch: `main`
   - folder: `/ (root)`
5. Save.

Then your website will be something like:
```txt
yourname.github.io/repo-name
```

## Before You Publish

Check these:
- buttons work
- story campaign starts
- premium panel opens
- review panel opens
- website pages open
- mobile layout looks okay

## Best First Website Name

Something simple like:
- `end-of-the-nexus.pages.dev`
- `jonahs-rpg.pages.dev`
- `storm-quest.pages.dev`

## Good News

People will go to **your website** to play **your game**.
They do not need to go to a different game website.
