import { Kafka } from "kafkajs"

export default class KafkaFactory {
    static create(): Kafka {
        const kafka = new Kafka(
            {
                clientId: 'experiments',
                brokers: ['kafka:9092']
            }
        )

        return kafka
    }
}