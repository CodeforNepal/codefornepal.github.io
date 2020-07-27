# website20

To build a new device agnostic and low bandwidth friendly website of Code for Nepal.

Jkelly instance of codefornepal.org

## Design Guidelines

These are our brand color schemes.
```
Red: #E00015
Blue: #00ADEF
White: #FFFFFF 
Light gray: #FCFBFB
```

## Install in Linux Fedora / Ubuntu  

```

$sudo dnf install ruby-devel / $sudo apt-get install ruby-full
$sudo dnf groupinstall development-tools rpm-development-tools c-development / $sudo apt-get install build-essential zlib1g-dev
$gem install bundler

$git clone https://github.com/<yourusername>/website20.git
$cd website20/
$git remote add upstream https://github.com/Code4Nepal/website20.git 

$bundle install
$bundle exec jekyll serve --> http://127.0.0.1:4000/website20/

```

Keep Fork Updated 

```
$git fetch upstream 
$git pull upstream master
$git push origin master 
 
 ```



