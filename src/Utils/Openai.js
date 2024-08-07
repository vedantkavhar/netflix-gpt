import OpenAI from 'openai';
import { OPENAPI_KEY } from '../Utils/Constants';

const Openai = new OpenAI({
  apiKey: OPENAPI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser:true,
});


export default Openai;


// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI(process.env.OPENAPI_KEY);

// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// export default genAI;

// const prompt = "Does this look store-bought or homemade?";
// const result = await model.generateContent([prompt]);
// console.log(result.response.text());