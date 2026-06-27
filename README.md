# codefornepal.github.io

To build a new device agnostic and low bandwidth friendly website of Code for Nepal.

Jekyll instance of codefornepal.org

## Admin page to easily publish blogs

You need to be a blog publisher to access the following:

https://codefornepal.org/admin

## Design Guidelines

These are our brand color schemes.

```
Red: #E00015
Blue: #00ADEF
White: #FFFFFF 
Light gray: #FCFBFB
```

## Installation and Setup

### Step 1: Install Ruby and Development Tools

- **Fedora**

  ```console
  $ sudo dnf install ruby-devel
  ```

  ```console
  $ sudo dnf groupinstall development-tools rpm-development-tools c-development
  ```

- **Ubuntu**

  ```console
  $ sudo apt-get install ruby-full
  ```

  ```console
  $ sudo apt-get install build-essential zlib1g-dev
  ```

- **macOS**

  It is recommended to install Ruby using `rbenv` and Homebrew, as the system Ruby is outdated and protected.
  1. Install Homebrew (if not already installed):

     ```console
     $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```

  2. Install `rbenv` and `ruby-build`:

     ```console
     $ brew install openssl@3 readline libyaml
     $ brew install rbenv ruby-build
     ```

  3. Set up your shell profile (e.g. `~/.zshrc` or `~/.bash_profile`) to initialize `rbenv`:

     ```console
     $ rbenv init
     ```

     _Follow the printed instructions to add the setup command to your shell config file, then restart your terminal._

  4. Install and set Ruby `3.2.2` (or the version specified in `.ruby-version`):

     ```console
     $ rbenv install 3.2.2
     $ rbenv global 3.2.2
     ```

  5. Open a new terminal window or run `exec $SHELL` to ensure the new Ruby environment is loaded.

### Step 2

```console
$ gem install bundler
```

### Step 3

- Fork **https://github.com/CodeforNepal/codefornepal.github.io.git**
- and then

```console
$ git clone https://github.com/<yourusername>/codefornepal.github.io.git
$ cd codefornepal.github.io/
$ git remote add upstream https://github.com/CodeforNepal/codefornepal.github.io.git
```

### Step 4

```console
$ bundle install
```

### Step 5

```console
$ bundle exec jekyll serve
```

Go to -> http://127.0.0.1:4000/

### Optional

- To make server accessible in **Network** and in diffrent **port**

```console
$ bundle exec jekyll serve --host=0.0.0.0 --port=3000
```

Go to -> http://`<local_ip_of_machine>`:3000/

## Keep Fork Updated

```console
$ git fetch upstream
$ git merge upstream master
$ git push origin master
```
