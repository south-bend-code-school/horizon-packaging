# static_build_template
This template uses node.js and grunt to optimize development with pug(formerly jade), less, and javascript/jquery.

## Instructions for use...

### Before you can run:
* **Node Install -**
  * Make sure you have Node installed on your computer. If you have homebrew running, type the following into your command line...
    * ``` brew install node ``` 
  * It isn't 100% necessary, but it helps to have nvm (node version manager) installed as well, if you are running multiple node builds on your machine. It is a little tricky to setup, but could be worth it if you are dealing with different versions of node down the line.
    * Install instructions: http://bit.ly/2p8VqSs
    * GitHub Documentation: https://github.com/creationix/nvm
    * Note: The thing that is going to mess you up is the .bash_profile part of the install. Pay close attention during those parts of the instructions.  
* **Grunt CLI -**
  * Run the following code from your command line to enable grunt to run on your machine...
    * ```npm install -g grunt-cli```

### 1. Clone  
* git clone https://github.com/south-bend-code-school/static_build_template [PROJECT NAME HERE]
* cd into project directory
* rm -rf .git
* git init
* git remote add origin [PROJECT REPO]

### 2. Run
* Install dependencies - *npm install*
  * *Note: it is a very bad idea to run npm install for the latest versions of npm packages without doing some kind of save on the package versions for persistance across multiple repo users. Be sure to save the latest version when you do the install. There are different ways to do this. If you find the best/easiest one, please let me know.*
* Fire up localhost:3000 - *node app.js*
* Run Grunt - *grunt*
  * *Note: you will want to use tmux or open another terminal window. One for running the app, the other for running Grunt*
* Open localhost:3000 in your browser.
