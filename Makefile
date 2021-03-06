.PHONY: clone test wget clean mocha
CHROME=$(shell locate chrome.exe | awk "/exe$$/" | head -1)
SCRIPTID=$(shell cat .clasp.json | awk 'BEGIN{FS="\""} /scriptId/ {print $$4}')

open:
	"$(CHROME)" https://script.google.com/d/$(SCRIPTID)/edit

clone:
	clasp clone 1NlWsEesXTa9Id-UI_ZGtrMnJgdNxtos8YPBUg5EEyrv78KMNqZQ8hyVw

test: wget
	make -C test test

wget:
	make -C test wget

clean:
	make -C test clean

prepare:
	sudo npm update -g \
	sudo npm install -g mocha

mocha:
	mocha


