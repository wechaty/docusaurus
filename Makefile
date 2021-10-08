# Makefile for wechaty.js.org
# Author: Huan LI <zixia@zixia.net> https://github.com/huan

.PHONY: all
all: build

.PHONY: install
install: jekyll-install npm-install docusaurus-install

.PHONY: jekyll-install
jekyll-install:
	cd jekyll && sudo make install

.PHONY: docusaurus-install
docusaurus-install:
	cd docusaurus && npm install

.PHONY: npm-install
install:
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
build: jekyll-build docusaurus-build

.PHONY: jekyll-build
jekyll-build:
	cd jekyll && make build

.PHONY: docusaurus-build
docusaurus-build:
	cd docusaurus && npm run build

.PHONY: fit-image
fit-image:
	./scripts/fit-image.sh jekyll/assets/
