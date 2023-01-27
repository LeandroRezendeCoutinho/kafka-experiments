# Experimental project to learn kafka

## Stack
- NodeJS
- Express
- Typescript

### Start the Kafka broker

```bash
docker-compose up -d
```

### Create a topic

```bash
docker exec broker \
kafka-topics --bootstrap-server broker:9092 \
             --create \
             --topic quickstart
```

### Write messages to the topic

```bash
docker exec --interactive --tty broker \
kafka-console-producer --bootstrap-server broker:9092 \
                       --topic quickstart
```

### Read messages from the topic

```bash
docker exec --interactive --tty broker \
kafka-console-consumer --bootstrap-server broker:9092 \
                       --topic quickstart \
                       --from-beginning
```

### Stop the Kafka broker

```bash
docker-compose down
```

### References
- https://developer.confluent.io/quickstart/kafka-docker/
- https://kafka.js.org/docs/getting-started
- https://github.com/provectus/kafka-ui
