# eyeoftheforest.com

Website for the short film [Eye of the Forest](https://facebook.com/eyeoftheforest).

## Development

Install docker and run:

```shell
docker build --build-arg GIT_USER=<username> --build-arg GIT_EMAIL=<email> -t eotf:latest .
docker run --rm -it -v ~/.ssh:/root/.ssh -v $(pwd):/app eotf:latest /bin/ash
```

To be able to use `middleman deploy` from inside the docker container, you need to add your private key to `ssh-agent`. Run the following inside the container:

```shell
eval `ssh-agent -s`
ssh-add ~/.ssh/<name of your ssh private key>
```

To simply run the server, run:

```shell
docker run --rm -v $(pwd):/app -p 127.0.0.1:4567:4567 eotf:latest middleman server
```
