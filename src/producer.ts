import { Producer, ProducerRecord, RecordMetadata } from "kafkajs"
import KafkaFactory from "./kafka-factory"

export default class KafkaProducer {
    producer: Producer

    constructor() {
        this.producer = KafkaFactory.create().producer()
    }

    async send(record: ProducerRecord): Promise<RecordMetadata[]> {
        await this.producer.connect()
        return await this.producer.send(record)
    }
}