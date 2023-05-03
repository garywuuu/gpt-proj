/* createFineTune.js */
import { openai } from './api/api.js'

async function createFineTune() {
  try {
    const response = await openai.createFineTune({
      training_file: 'data_prepared.jsonl',
      model: 'davinci'
    })
    console.log('response: ', response)
  } catch (err) {
    console.log('error: ', err.response.data.error)
  }
}

createFineTune()