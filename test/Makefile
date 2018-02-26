.PHONY: test wget clean prepare

%.js : %.ts
	tsc $<

test: test1.csv test2.csv
	node test.js

clean:
	rm -rf test1.csv test2.csv ;\
		rm -rf test2.js

test2: test2.ts
	mocha --require ts-node/register $<

test1.csv:
	wget -nd -nH -4 -O $@ 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS9ukWSY_zhXT6vavrJhU8L3BscbcFRPPGpN20nc2AKaumW9VjnImLJGv7dtRf2Uxj5mkL9uYWgIQcF/pub?gid=0&single=true&output=csv'

test2.csv:
	wget -nd -nH -4 -O $@ 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS9ukWSY_zhXT6vavrJhU8L3BscbcFRPPGpN20nc2AKaumW9VjnImLJGv7dtRf2Uxj5mkL9uYWgIQcF/pub?gid=1668531689&single=true&output=csv'

prepare:
	sudo npm install -g typescript @types/mocha mocha ts-node


