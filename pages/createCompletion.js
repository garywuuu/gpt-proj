/* createCompletion.js */
import { openai } from './api/api.js'

async function createCompletion() {
  try {
    const response = await openai.createCompletion({
      model: 'davinci:ft-personal-2023-04-28-21-22-29',
      prompt: 'How to decide what to wear today?',
      max_tokens: 200
    })
    if (response.data) {
      console.log('choices: ', response.data.choices)
    }
  } catch (err) {
    console.log('err: ', err)
  }
}

createCompletion()