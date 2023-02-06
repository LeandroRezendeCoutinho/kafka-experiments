import express from 'express'

import { Router, Request, Response } from 'express';
import KafkaConsumer from './consumer';
import KafkaProducer from './producer';

const app = express();

const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hello world with Typescript' })
})

route.get('/produce', (req: Request, res: Response) => {
    try {
        const producer = new KafkaProducer()
        producer.send({
            topic: 'topic1', messages: [
                { value: `Producer sending message ${Date.now()}` }
            ]
        })
        res.send('Produced')    
    } catch (error) {
        res.send(error)    
    }
})

route.get('/consume', (req: Request, res: Response) => {
    try {
        const consumer = new KafkaConsumer()    
        consumer.start('topic1')
        res.send('Consuming')        
    } catch (error) {
        res.send(error)
    }
})

app.use(route)


app.listen(3000, () => 'server running on port 3000')
