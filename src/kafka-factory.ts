import { Consumer, ConsumerConfig, Kafka, Producer, ProducerConfig } from "kafkajs"
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

export class KafkaProducerFactory {
    public static producer: Producer
    static create(config: ProducerConfig){
        this.producer = KafkaFactory.create().producer(config)
        return this.producer
    }
}

export class KafkaConsumerFactory {
    public static consumer: Consumer

    static create(config: ConsumerConfig){
        this.consumer = KafkaFactory.create().consumer(config)
        return this.consumer
    }
}