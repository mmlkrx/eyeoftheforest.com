# eyeoftheforest.de

Website for the short film [Eye of the Forest](https://facebook.com/eyeoftheforest).

## Development

Install docker and run:

```shell
docker build -t eotf:latest .
docker run --rm -it -v $(pwd):/app eoft:latest /bin/sh
```
