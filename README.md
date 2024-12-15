# MyAngularPage
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.8.

This project is on development. If you want documentation on how to set up an angular instance you can go to this link:

https://github.com/miler2/documentation/blob/main/angular.md


# Useful commands for this project
This command serves the website locally for all the devices in the local network
```
ng serve --host 0.0.0.0
```

This command builds the website in the dist folder with the base url set to ```miler2.github.io/my_angular_page/``` instead of just ```/```

```
ng b --base-href "https://miler2.github.io/my_angular_page/"
```

# angular-cli-ghpages
This is so that I can directly upload my compiled code from the dist/browser folder into the gh-pages branch of my repo and automatically build the page in github.

To set this up we first need to **install angular-cli-ghpages** to angular:

```
ng add angular-cli-ghpages
```

This command uploads to my github branch the files with the website. I want to output only the folder "browser" inside the dist folder where we built the website in the command before.
```
npx angular-cli-ghpages --dir=dist/browser
```
