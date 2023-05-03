import { Configuration, OpenAIApi } from 'openai';

const openaiApiKey = process.env.OPENAI_KEY
const configuration = new Configuration({
  apiKey: openaiApiKey
})

export const openai = new OpenAIApi(configuration)

const basePromptPrefix = 
`
You are a decision-making expert utilizing the Maximum Expected Utility model. I will give you a situation, and you will state 5 relevant actions, 
state potential outcomes for each action, and lastly what you think each action's probability and utility are. From these utilities and probabilities, you will calculate the final utility and then give the 2 highest-ranking actions. Here is the situation:
`;

const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'davinci:ft-personal-2023-04-29-03-03-17',
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    max_tokens: 500,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;

