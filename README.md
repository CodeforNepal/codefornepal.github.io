# codefornepal.github.io

To build a new device agnostic and low bandwidth friendly website of Code for Nepal.

Jekyll instance of codefornepal.org

## Design Guidelines

These are our brand color schemes.
```
Red: #E00015
Blue: #00ADEF
White: #FFFFFF 
Light gray: #FCFBFB
```

## Install in Linux Fedora / Ubuntu  

### Step 1

- Fedora

```console
$ sudo dnf install ruby-devel
```

```console
$ sudo dnf groupinstall development-tools rpm-development-tools c-development
```

- Ubuntu

```console
$ sudo apt-get install ruby-full
```

```console
$ sudo apt-get install build-essential zlib1g-dev
```

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
$ git pull upstream master
$ git push origin master 
```



