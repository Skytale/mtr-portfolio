# Meteor Portfolio App

A portfolio app for artists or photographers built with Meteor using Semantic-UI and Orion CMS

* [Roadmap](#roadmap)
* [How to use](#how-to-use)
  * [Requirements](#requirements)
  * [Installation](#installation)
  * [Deployments](#deployments)
* [Structure](#structure)
  * [Packages used](#packages-used)
  * [Folder structure](#folder-structure)
* [Attributions](#attributions)
* [License](#license)

## Roadmap

* Add tests
* Setup build environment

## How to use

### Requirements

Make sure [Meteor is installed and up to date](https://www.meteor.com/install) or run:

```
curl https://install.meteor.com/ | sh
```

### Installation

```
git clone git@github.com:amazingBastard/mtr-portfolio.git
cd mtr-portfolio
meteor
```

### Deployments

It is highly recommended to use [Meteor Up](https://github.com/arunoda/meteor-up) for easy deployments.
Have a look at the repository for more information.

There are other ways to deploy to your server besides Meteor Up. Here is a [step by step guide from Digital Ocean](http://devo.ps/blog/deploy-your-meteor-apps-on-digital-ocean-in-5-minutes/).

## Structure

### Packages used

* Meteor Core
  * [meteor-platform](http://github.com/meteor/meteor/tree/devel/packages/meteor-platform)
* Accounts
  * [accounts-password]()
  * [useraccounts:semantic-ui]()
* Collections
  * [dburles:collection-helpers](http://github.com/dburles/meteor-collection-helpers/)
* CMS
* Routing
  * [kadira:flow-router](https://github.com/kadirahq/flow-router)
  * [meteorhacks:fast-render](https://github.com/meteorhacks/fast-render)
* SEO
  * [spiderable](http://github.com/meteor/meteor/tree/devel/packages/spiderable)
  * [tomwasd:flow-router-seo](https://github.com/tomwasd/flow-router-seo)
* UI and UX
  * [fastclick](http://github.com/meteor/meteor/tree/devel/packages/fastclick)
  * [semantic:ui-css](https://github.com/Semantic-Org/Semantic-UI-CSS)
  * [natestrauser:animate-css](http://github.com/nate-strauser/meteor-animate-css)
* Development
  * [flemay:less-autoprefixer](http://github.com/flemay/less-autoprefixer)
  * [momentjs:moment](http://github.com/moment/moment/)
  * [msavin:mongol](http://github.com/msavin/Mongol)

The "insecure" and "autopublish" packages are removed by default (they make your app vulnerable).

### Folder structure

```
app/                # Application folder
  client/             # Client folder
    compatibility/      # Libraries which create a global variable
    config/             # Configuration files (on the client)
    lib/                # Library files that get executed first
    startup/            # Javascript files on Meteor.startup()
    stylesheets         # LESS files
    templates/          # Contains all templates
      layouts/            # Router layouts
      views/              # All the views
      modules/            # UI elements and components (i.e. forms, actions, etc...)
        common/             # Common components (i.e. header, footer)
        elements/           # Re-usable components
  collections/        # Collection files, for each Meteor.Collection
  orion/              # Orion CMS files
  packages/           # Packages folder (custom meteor packages, npm)
  private/            # Private files
  public/             # Public files
  router/             # All routes
  server/             # Server folder
    fixtures/           # Meteor.Collection fixtures defined
    lib/                # Server side library folder
    publications/       # Collection publications
    startup/            # On server startup
  tests/              # All tests
    client/             # client tests
      integration/        # integration tests
      unit/               # unit tests
    server/             # server tests
      integration/        # integration tests
      unit/               # unit tests
environments/       # Environments folder
  build/              # testing environment
  local/              # local environment
  production/         # production environment

```

## License

This project has an MIT License, see the LICENSE.txt for more information.
