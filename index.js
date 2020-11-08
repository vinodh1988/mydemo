const simpleGit = require('simple-git');
const git = simpleGit();
const fs = require("fs");
async function init()
{

    try {
        await git.init();
        await git.addRemote('origin','http://github.com/vinodh1988/mydemo');
        console.log("initialized")
    }
    catch (e) { 
        console.log("not able to initialize")
    }
}

async function autopush(){
    try{
      await git.add('.')
      await git.commit(" commit "+new Date());
      await git.push('origin','master')
    }
    catch(e){
        console.log("something wrong", e)
    }
}

fs.watch(__dirname,async function(){
    await autopush();
})

init()

