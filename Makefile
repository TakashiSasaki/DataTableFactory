.PHONY: clone test wget test1.csv

clone:
	clasp clone 1NlWsEesXTa9Id-UI_ZGtrMnJgdNxtos8YPBUg5EEyrv78KMNqZQ8hyVw

test:
	node test.js

test1.csv:
	wget -nd -nH -4 -O test1.csv 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS9ukWSY_zhXT6vavrJhU8L3BscbcFRPPGpN20nc2AKaumW9VjnImLJGv7dtRf2Uxj5mkL9uYWgIQcF/pub?gid=0&single=true&output=csv'

