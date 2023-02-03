import { Kafka } from "kafkajs"
import { brokers, clientId } from "./constants"

export default class KafkaFactory {
    static create(): Kafka {
        const kafka = new Kafka(
            {
                clientId,
                brokers
            }
        )

        return kafka
    }
}