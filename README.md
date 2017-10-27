# Container based dev environment with Docker

This is the source code from a lightning talk I held at
a PHP meetup in Stockholm on October 26, 2017.

### 0. Pre-requisites
On a Mac, we use:
Brew, docker, docker-compose, and dinghy (a
wrapper for docker-machine)

Node.js, npm, and webpack for the example code

### 1. Setup of dockerfile, docker-compose files etc

See the example files `Dockerfile`, `docker-compose.yml`,
and `docker-compose.override.yml`

The reason we at We Ahead split the docker-compose into
two files, is that we also deploy containers to stage.
The settings provided in the `docker-compose.override.yml`
are for local use only.

### 2. Configure the Drupal installation

Navigate to `http://test.docker` to access the Drupal
installation

### 3. Make a custom module which provides a block

See example source code in the `./app/modules` folder

### 4. Enable the module and place the block

Inside the Drupal installation, first enable the new
module, next place the block in a region of your choice

### 5. Code a React component and insert it into the block

Build the React component by going to
`./app/src/demo_block-module` and run `npm run dev` and 
reload the page (maybe clear the cache if at  first  this
doesn't work)