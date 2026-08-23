# codefornepal.github.io

To build a new device agnostic and low bandwidth friendly website of Code for Nepal.

Next.js instance of codefornepal.org

> **Note:** This project was previously built with Jekyll. It has since been migrated to Next.js. If you're looking for the old Jekyll-based setup, check the git history prior to the `react-migration` branch.

## Admin page to easily publish blogs

You need to be a blog publisher to access the following:

https://codefornepal.org/admin

## Design Guidelines

These are our brand color schemes.

```
Red: #E00015
Blue: #00ADEF
White: #FFFFFF 
Light gray: #FCFBFB
```

## Installation and Setup

### Step 1: Install Node.js

This project requires Node.js (LTS version recommended). You can check if you already have it installed:

```console
$ node -v
$ npm -v
```

If you don't have Node.js installed:

- **Fedora**

  ```console
  $ sudo dnf install nodejs npm
  ```

- **Ubuntu**

  ```console
  $ sudo apt-get update
  $ sudo apt-get install nodejs npm
  ```

- **macOS**

  It is recommended to install Node.js using `nvm` (Node Version Manager) so you can easily manage versions.

  1. Install Homebrew (if not already installed):

     ```console
     $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```

  2. Install `nvm`:

     ```console
     $ brew install nvm
     ```

     Follow the printed instructions to set up `nvm` in your shell profile (e.g. `~/.zshrc` or `~/.bash_profile`), then restart your terminal.

  3. Install and use the latest LTS version of Node.js:

     ```console
     $ nvm install --lts
     $ nvm use --lts
     ```

### Step 2

- Fork **https://github.com/CodeforNepal/codefornepal.github.io.git**
- and then

```console
$ git clone https://github.com/<yourusername>/codefornepal.github.io.git
$ cd codefornepal.github.io/
$ git remote add upstream https://github.com/CodeforNepal/codefornepal.github.io.git
```

### Step 3: Install dependencies

```console
$ npm install
```

### Step 4: Run the development server

```console
$ npm run dev
```

Go to -> http://localhost:3000/

### Optional

- To make the server accessible on your **Network**, or on a different **port**, check the `scripts` section in `package.json` — you can pass flags to the underlying `next dev` command, e.g.:

```console
$ npm run dev -- --hostname 0.0.0.0 --port 4000
```

Go to -> http://`<local_ip_of_machine>`:4000/

### Building for production

```console
$ npm run build
$ npm run start
```

## Keep Fork Updated

```console
$ git fetch upstream
$ git merge upstream main
$ git push origin main
```