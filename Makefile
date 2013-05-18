
build: components index.js
	@component-build --dev

components: component.json
	@component-install --dev -r http://localhost:6060

node_modules: package.json
	@npm install

test: components node_modules
	node test/server.js

clean:
	rm -rf node_modules components build

.PHONY: clean test
