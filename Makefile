.PHONY: clone test wget clean mocha

clone:
	clasp clone 1NlWsEesXTa9Id-UI_ZGtrMnJgdNxtos8YPBUg5EEyrv78KMNqZQ8hyVw

test: wget
	make -C test test

wget:
	make -C test wget

clean:
	make -C test clean

prepare:
	sudo npm install -g mocha typings mocha espower-typescript  ;\
	typings install dt~mocha --global --save ;\
	typings install power-assert --global -save 

mocha:
	mocha

package.json:
	npm init


