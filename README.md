# FixMyStreet cobrand viewer

A little tool to help when previewing changes across multiple FixMyStreet cobrands.

## How to use this

You will need Sass installed, eg:

    brew install sass/sass/sass

Then download the code:

    git clone git@github.com:mysociety/fixmystreet-cobrand-viewer.git
    cd fixmystreet-cobrand-viewer

Build the styles (you only need to do this once, unless you edit the styles):

    bin/make-css

And run the viewer through a local web server, eg:

    php -S localhost:8000

Here’s a ridiculously long list of [other ways to run a local web server in a single command](https://gist.github.com/willurd/5720255).

## Local domains

By default, the viewer assumes you have something like [dnsmasq](https://kharysharpe.medium.com/automatic-local-domains-setting-up-dnsmasq-for-macos-high-sierra-using-homebrew-caf767157e43) set up to allow FMS cobrands to be accessible at subdomains of localhost, and on port 3000, eg: `bromley.localhost:3000`.

If you use a third-party wildcard DNS, like [xip.io](http://xip.io), or you expose your FMS server on a different port, you can just tell the viewer to use that, by replacing `localhost:8000` in the “Domain” input at the top of the screen. It’ll remember your settings for future pageloads.
