.PHONY: clone test wget test1.csv

clone:
	clasp clone 1NlWsEesXTa9Id-UI_ZGtrMnJgdNxtos8YPBUg5EEyrv78KMNqZQ8hyVw

test: wget
	node test.js

wget:
	make -C test


