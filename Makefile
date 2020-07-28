# Makefile for awesome-chatboot
# Author: Huan LI <zixia@zixia.net> github.com/huan

.PHONY: all
all: serve

.PHONY: install
install:
	bundle install && bundle update

.PHONY: test
test:
	npm run test

.PHONY: code
code:
	code .

.PHONY: clean
clean:
	rm -fr docs/_site

.PHONY: serve
serve:
	bundle exec jekyll serve --incremental

.PHONY: docker
docker:
	docker-compose -f config/docker-compose.yml up

.PHONY: fit-image
fit-image:
	./scripts/fit-image.sh assets/
