# Hello there!

Curious about the system behind [petecorreia.com](http://petecorreia.com)?

## Run it
```bash
bundle install
npm install
bower install
```

## Jekyll

I use [Jekyll](http://jekyllrb.com/) as the static generator. The app was scaffolded using a [Yeoman](http://yeoman.io/) generator, which you can find [here](https://github.com/robwierzbowski/generator-jekyllrb).

## Grunt

As with many others, [Grunt](http://gruntjs.com/) has absolutely revolutionised my development workflow. I use the common tasks for concat, minification and all that.

## Responsive Images

If you somehow haven't heard of it, [Picturefill](http://scottjehl.github.io/picturefill/) is a polyfill for both srcset and the responsive picture element. I tied this to a Jekyll include abstraction and [grunt-responsive-images](https://github.com/andismith/grunt-responsive-images/) to automate the whole process of generating the assets. There a few scenarios where srcset didn't do the trick due to art direction needs but in the final design it wasn't needed.

## Sass

I use a slightly modified version of the [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) structure. The prefixing is done via [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) so the code stays pretty clean.

## Javascript

...isn't very exciting on such a simple website. I essentially just do custom feature detection to play a background video, dynamically stretch images, animate scrolls to anchors and some dynamic sentence creation.

# Like what you see?

I'm available for work from March 2015, you can reach me at [pete@petecorreia.com](mailto:pete@petecorreia.com).
