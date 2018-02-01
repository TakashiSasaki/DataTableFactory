.PHONY: clone test wget clean

clone:
	clasp clone 1NlWsEesXTa9Id-UI_ZGtrMnJgdNxtos8YPBUg5EEyrv78KMNqZQ8hyVw

test: wget
	make -C test test

wget:
	make -C test wget

clean:
	make -C test clean
