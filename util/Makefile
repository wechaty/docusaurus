# Makefile for awesome-chatboot
# Author: Huan LI <zixia@zixia.net> github.com/huan

.PHONY: all
all: serve

.PHONY: install
install:
	(cd .. && bundle install && bundle update)

.PHONY: test
test:
	npm run test

.PHONY: serve
serve:
	(cd .. && bundle exec jekyll serve --incremental)

.PHONY: fit-image
fit-image:
	./scripts/fit-image.sh ../assets/
