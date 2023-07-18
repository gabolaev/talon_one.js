tests:
	npm install && chmod +x test/run.sh && IAPI_KEY=$(IAPI_KEY) MAPI_KEY=$(MAPI_KEY) ./test/run.sh