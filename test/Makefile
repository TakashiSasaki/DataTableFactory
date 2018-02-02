.PHONY: test wget clean

test: test1.csv test2.csv
	node test.js

clean:
	rm -rf test1.csv test2.csv

test1.csv:
	wget -nd -nH -4 -O $@ 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS9ukWSY_zhXT6vavrJhU8L3BscbcFRPPGpN20nc2AKaumW9VjnImLJGv7dtRf2Uxj5mkL9uYWgIQcF/pub?gid=0&single=true&output=csv'

test2.csv:
	wget -nd -nH -4 -O $@ 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS9ukWSY_zhXT6vavrJhU8L3BscbcFRPPGpN20nc2AKaumW9VjnImLJGv7dtRf2Uxj5mkL9uYWgIQcF/pub?gid=1668531689&single=true&output=csv'
