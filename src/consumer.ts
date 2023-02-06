import { Consumer } from "kafkajs"
import KafkaFactory from "./kafka-factory"

export default class KafkaConsumer {
    consumer: Consumer

    constructor() {
        this.consumer = KafkaFactory.create().consumer({ groupId: 'experiment-group' })
    }

    async start(topic: string) {
        await this.consumer.connect()
        await this.consumer.subscribe({ topic, fromBeginning: true })

        await this.consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                console.log(`Topic: ${topic}`, `Message ${message.value?.toString() }` )                
            }
        })
    }
}