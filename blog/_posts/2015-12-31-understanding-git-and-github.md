<img src="/images/blog/github.jpg" class="cover">

Understanding what Git and Github are is one important step in the life of a developer. I used to keep my projects and files on my computer hard drive and **I had no way
of accessing them from any other location different from home**. Github let's you *push* your codebase online and makes it accessible from any remote location, which can be anything: from your work's computer to your friend's for example.

Github is a *social* platform for code repositories, and it's free as long as you **keep your repos openly accessible and public**. You might turn up your nose at keeping all your work online and clearly visible to anyone, but that's one cornerstone of this community: open sourcing is the best way to let anyone reuse, learn and get inspired by your code. Using others work and knowledge is how we all started, isn't it? So let's start open sourcing!

<!--more-->

## What's the difference between Git and Github?

[Github](http://github.com) is an online platform based on [Git](https://git-scm.com/).<br>
Git is a version control system for software development (similar to SVN for example).

To have it working, the first step is installing Git on your machine:

* [Git for OSX](http://code.google.com/p/git-osx-installer/downloads/list?can=3)
* [Git for Windows](http://msysgit.github.io/)

Once done, you can then create a [Github](http://github.com) account and create your first repository by navigating to your profile page, clicking on the "repositories" tab and finally clicking the **NEW** green button:

<img src="/images/blog/github2.png">

This will lead you to a new page where you will choose the name of the repository (in my case I used the name <code>test</code>). Make sure the _"Initialize this repository with a README"_ option is flagged, I will later explain why.

<img src="/images/blog/github3.png">

You now have your first repository online, but it's empty. Let's add some more files and push them online!

## Linking your local project folder to the Github repository

Without creating a new folder for your project, navigate locally where you want it to be and right-click to start the Git Bash (which comes with the Git installer if you are on Windows):

<img src="/images/blog/github4.png">

What you will do now is *pull* the online repository and all the needed Git files on your computer. This is called **cloning a repository** and it is accomplished
in just some simple steps.

- Navigate to your online repository and copy the <code>link.git</code> of your repository:
<img src="/images/blog/github5.png">

- back to the Git Bash, type <code class="language-git">git clone link.git</code> where <code>link.git</code> is the url you just copied.

You are all set! You now have a local codebase linked to your online Github Repository.

<img src="/images/blog/github6.png">

Let's now try to add a local file and push it online.

## Adding and pushing code to Github

Let's start adding a simple <code>index.html</code> to your local folder. To push it online, Git needs you to always run a certain combination of instructions via the Git Bash in order
to accomplish the task. Once your code is done and you decide to push it online, you have to type the following commands in the bash:

- <code class="language-git">git status</code> <i style="font-size:12px">(optional)</i>
<br> This command let's you see which files have been locally added or modified. Checking the git status is not mandatory, but may be useful to track locally modified or added files.
- <code class="language-git">git add .</code><br>
This is a shortcut to add all modified files to the commit you are about to perform. Type <code class="language-git">git status</code> again and you will see the index file color changed from red to green.
- <code class="language-git" style="word-wrap: break-word;">git commit -m "first commit for my test repository"</code><br>
Commits tell the revision control system to make a group of changes final, and make the files ready to be pushed.
- <code class="language-git">git push origin master</code><br>
This is only needed on the first push. From now on, to push your changes to your repository master branch,
the only thing you will need to type is <code class="language-git">git push</code>. While performing a push, you will be asked your github username and password.

You can now go online and see your index.html file magically appear on your online github repository. YAY!

<img src="/images/blog/github7.png">

## README.md and .gitignore files

Those are two important files to add to any of your public repositories. The README.md usually contains a description of the respository and install instructions. The file has been created automatically with your repository and it must be written in markdown language:  

> Markdown is a text-to-HTML conversion tool for web writers. Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).

You can learn more about the markdown language at [this website](https://daringfireball.net/projects/markdown/) or practice it on this [online Markdown editor](http://dillinger.io/).

The <code>.gitignore</code> file is a text file containing a list of folders or files you **don't** want to publish on your online repository. From google:

> If you create a file in your repository named .gitignore, Git uses it to determine which files and directories to ignore, before you make a commit. A .gitignore file should be committed into your repository, in order to share the ignore rules with any other users that clone the repository.

The files you don't want to share are, for example, sensible data such as <code>.txt</code> files with passwords for deploy, useless files or folders such as `DS_Store` files, build tools folders such as `node_modules` or `bower_componenents`. If you are having troubles creating the .gitignore file, check [this stackoverflow question](http://stackoverflow.com/questions/10744305/how-to-create-gitignore-file) out.

## Having your code in the Cloud

Having your code safely stored and easily accessible online is one of the coolest features of Github. Let's assume you have created the project on your desktop computer but you want to continue working on it on your laptop computer. You can clone the repository on the laptop, work on it and push the changes.

What happens when you switch back to your desktop computer again? Your local version there was left behind this last commit you did on the laptop. All you need to do here is performing a *pull* to download the latest modifications to the codebase on your desktop computer.

- Navigate at the root of your project and open the Git Bash
- Type <code class="language-git">git pull</code>

Your local version on your desktop computer is now up to date and you can keep working on it! If something goes wrong, check the Bash to see if there's any conflict, [resolve them](https://help.github.com/articles/resolving-a-merge-conflict-from-the-command-line/) and perform the push procedure again to finalize.

If you want to practice cloning a repository, making it yours and adding files to it, I've kept the test respository on my github account for you to practice: [https://github.com/vlrprbttst/test](https://github.com/vlrprbttst/test). Hope this helps! Happy New Year!
