.PHONY: test1.csv test wget

test:
	node test.js

wget: test1.csv

test1.csv:
	wget -nd -nH -4 -O test1.csv 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS9ukWSY_zhXT6vavrJhU8L3BscbcFRPPGpN20nc2AKaumW9VjnImLJGv7dtRf2Uxj5mkL9uYWgIQcF/pub?gid=0&single=true&output=csv'


