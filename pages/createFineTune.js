/* createFineTune.js */
import { openai } from './api/api.js'

async function createFineTune() {
  try {
    const response = await openai.createFineTune({
      training_file: "file-CLGs8noFU6pRj8QAQBRf7xmb",
      model: 'davinci'
    })
    console.log('response: ', response)
  } catch (err) {
    console.log('error: ', err.response.data.error)
  }
}

createFineTune()