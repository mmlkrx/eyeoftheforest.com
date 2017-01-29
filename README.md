# eyeoftheforest.com

Website for the short film [Eye of the Forest](https://facebook.com/eyeoftheforest).

## Development

Install docker and run:

```shell
docker build --build-arg GIT_USER=<username> --build-arg GIT_EMAIL=<email> -t eotf:latest .
docker run --rm -v $(pwd):/app -p 127.0.0.1:4567:4567 eotf:latest middleman server
```

A server is now running on `localhost` at port `4567`.

## Deployment

To deploy to github pages, this repo uses the [middleman deploy gem](https://github.com/middleman-contrib/middleman-deploy).

To be able to use `middleman deploy` from inside the docker container, a valid ssh key needs to be added to `ssh-agent`. The hosts `~/.ssh/` directory can be mounted into the container to use an existing ssh key with your github account.

```shell
docker run --rm -it -v ~/.ssh:/root/.ssh -v $(pwd):/app eotf:latest /bin/ash
```

Then run the following inside the container:

```shell
eval `ssh-agent -s`
ssh-add ~/.ssh/<name of your ssh private key>
```

To deploy run `middleman deploy` in the container.
