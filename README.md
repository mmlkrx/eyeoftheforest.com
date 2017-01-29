# eyeoftheforest.com

Website for the short film [Eye of the Forest](https://facebook.com/eyeoftheforest).

## Development

Install docker and run:

```shell
docker build -t eotf:latest .
docker run --rm -v $(pwd):/app -p 127.0.0.1:4567:4567 eotf:latest middleman server
```
