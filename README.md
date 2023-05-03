# Psych 1322 - Decision-Making Bot
## Introduction:
This is a webapp that allows users to interact with a specially fine-tuned OpenAI model to get advice on various decisions using the Maximum Expected Utility model we learned in Psy1322. The webapp is a traditional react app with essentially no backend, and just feeds the user's input into an OpenAI completion model that has been finetuned, and returns that output to the user. 

## Two strategies used to fine-tune the model: Role-play and Few-Shot Learning:
Role play is a tactic used in prompt engineering that involves telling the model what type of role they should play. For example, if you want the model to teach you about the solar system, it can be helpful to tell it that it is a "science teacher with a passion for astronomy". For this project, I told the model that it was a decision-making expert, trained on using the Maximum-Expected Utility model. This gave exponentially better results than not using the role-play technique.


Few-shot Learning is a technique that involves giving the model example desirable input-output examples. For example, if you want your model to always give you things in full uppercase, you would feed it examples that have all uppercase outputs. The model learns patterns in your examples and tailors its responses to be similar to them. OpenAI states that "good" models tend to have at least 500 or so examples, but I kept it at around 15 examples just because it becomes expensive to train on more. I followed this tutorial in order to fine-tune the model using the OpenAI documentation: https://nader.substack.com/p/supercharge-your-gpt-model-custom

## Conclusions: 
The end product is a fully working bot that allows the user to input a scenario, and the bot will output relevant action state, and provide its idea of utilities and probabilities for outcomes. 

## Potential Improvements
I believe the main improvement to be made is with the amount of examples for the finetuning. With some funding, it would be interesting to see how much better a 500-example model is. The model currently also is a bit bad at math, but this is consistent with any GPT3 model, so there's not much we can do until OpenAI or others come out with more advanced models.