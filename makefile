PROJECT=fdj
SERVICES=traefik mongo mongo-seed api paris-sport-front

install: ## Install dependencies and init database
	docker-compose -p $(PROJECT) -f docker/docker-compose.yml up -d $(SERVICES)


help: ## This help dialog.
	@awk -F ':|##' '/^[^\t].+?:.*?##/ {printf "\033[36m%-30s\033[0m %s\n", $$1, $$NF}' $(MAKEFILE_LIST)
