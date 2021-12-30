#! /bin/bash 
###########################################
# Serve Blog locally
###########################################

# constants
baseDir=$(cd `dirname "$0"`;pwd)

# functions

# main 
[ -z "${BASH_SOURCE[0]}" -o "${BASH_SOURCE[0]}" = "$0" ] || return
cd $baseDir/../jekyll
echo "a fresh new start, it would take several minutes ..."

if [ -d _site ]; then
	rm -rf _site
fi

if [ -d .jekyll-cache ]; then
	rm -rf .jekyll-cache
fi

echo "NOTICE: if get error says require cannot load such file -- webrick (LoadError), run cmd [bundle add webrick]"
bundle add webrick
make serve