# Build

## Local

1. Clone the repo locally
2. In terminal, navigate to the repo root directory
3. Run `npm install`
4. Run `npm start`

## CI/CD

The build pipeline is configured through Github Actions in `/.github/workflows/ghpages-branch-deploy.yml`. App builds are pushed to the `ghpages` branch which is configured for use with Github Pages. Each branch gets it's own sub-directory and build.

**TODO** Add a workflow to remove a given subdirectory when a branch is deleted.

# Architecture

The app follows a Headless architecture pattern. TL;DR There is a clean separatation between the UI Presentation code (React/Redux) and Content Management (NetlifyCMS).

Due to the fact that all the code resides in the same repo, this makes it seem as though it is a static app. However, the way in which Redux retrieves the content qualifies it as Headless.

## Netlify/NetlifyCMS

NetlifyCMS is an open source Headless CMS. Netlify is a service that provides Authentication through Github. They are managed by the same vendor, but are separate concerns for this application.

### OAuth

The OAuth configuration requires the following steps:

#### 1. NetlifyCMS `config.yml`

This configuration is pretty basic and should be defined as follows:

```
 backend:
  // the backend service
  name: github

  // the user/repo for the application
  repo: flexion/10x-website

  // the repo branch to which content changes will be committed
  branch: content
```

The intent of having a separate content branch is to create a layer of separation between the content management and production environment. While Netlify includes a publishing workflow, it is a good practice to allow for testing in a lower environment before deploy content changes to production.

Periodically, the `content` branch will need to be updated with the `main` branch code to update components and styling.

#### 2. Github OAuth App

A github OAuth app will need to be created to allow access netlify access to the repo to make the content changes. This is the application which Users will allow acceess in order to make content edits with the NetlifyCMS UI. Netlify then utilizes the credentials obtained from the process to fulfill content requests.

More information can be found [here](https://docs.netlify.com/visitor-access/oauth-provider-tokens/#using-an-authentication-provider).

#### 3. Netlify site and Auth config

GitHub OAuth needs a service to push the assertion to once the user is authenticated. Netlify provides this for free. The steps to implement include:

1. Creating a new Netlify site and registering the Netlify app to the repo.
2. Adding the GitHub Client credentials to the Netlify site. ([docs](https://docs.netlify.com/visitor-access/oauth-provider-tokens/#setup-and-settings))
3. Adding the github pages domain to the Netlify site. ([docs](https://docs.netlify.com/domains-https/custom-domains/#definitions))

Step 3 is important because it will allow )Auth requests from the github pages domain. It will ask you whether or not you own `github.io`; select yes. There is no true domain verification that needs to happen here. The only need is to whitelist the domain for OAuth requests.

### `prebuild.js`

The prebuild workflow is responsible for mutating and indexing the content JSON files to add meta data and make them deliverable in list fashion to the UI.

The ideal solution would be to implement this step as part of a hook in the NetlifyCMS workflow. This solution is still in [beta](https://www.netlifycms.org/docs/beta-features/#registering-to-cms-events).

## React/Redux

### Components

### App

### Features

### Routes

### Templates

### Style

#### USWDS
