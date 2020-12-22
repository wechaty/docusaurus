# Makefile for wechaty.js.org
# Author: Huan LI <zixia@zixia.net> https://github.com/huan

.PHONY: all
all: install

.PHONY: install
install:
	cd jekyll && sudo make install
	npm install

.PHONY: test
test:
	npm run test

.PHONY: clean
clean:
	rm -fr jekyll/_site/
	rm -fr docusaurus/build/
	rm -fr new-gh-pages/

.PHONY: build
build:
	cd jekyll && make build
	cd docusaurus && npm run build

.PHONY: fit-image
fit-image:
	./scripts/fit-image.sh jekyll/assets/
