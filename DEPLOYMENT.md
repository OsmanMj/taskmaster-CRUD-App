# Deployment Instructions (Netlify & GitHub)

This guide will walk you through the steps to push your Task Management Dashboard to GitHub and deploy it for free using Netlify.

## 1. Initializing the GitHub Repository

First, make sure you have [Git](https://git-scm.com/) installed on your machine.
Open your terminal in the project folder and run the following commands:

```bash
# Initialize the local Git repository
git init

# Add all files to the staging area
git add .

# Commit your files
git commit -m "Initial commit: Task Management Dashboard"
```

Next, go to [GitHub](https://github.com/) and create a new repository.
Do not initialize it with a README, .gitignore, or license since Vite already generated them.

Copy the repository URL and add it as a remote to your local repository:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git branch -M main
git push -u origin main
```

## 2. Deploying to Netlify

Netlify makes it incredibly easy to deploy Vite/React applications directly from GitHub.

1. Go to [Netlify](https://www.netlify.com/) and log in (or sign up).
2. Click on **Add new site** > **Import an existing project**.
3. Choose **GitHub** and authorize Netlify to access your repositories.
4. Select your newly created repository (`YOUR_REPOSITORY_NAME`).
5. Netlify should automatically detect the build settings, but verify they are as follows:
   - **Base directory:** (leave empty)
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **Deploy site**.

Netlify will now build and publish your site! In a few minutes, you'll be given a live URL where your Task Management Dashboard is accessible.

## 3. Environment Variables (Optional)
If you ever add an API key (e.g., Firebase, Supabase), remember to add those to your Netlify site settings under **Site configuration > Environment variables**.
