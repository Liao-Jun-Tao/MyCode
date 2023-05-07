import { Configuration, OpenAIApi } from "openai" 
// 配置 
const configuration = new Configuration({
    // chatgpt key
    apiKey: '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'
})
// api? 写首诗
const openAIApi = new OpenAIApi(configuration)

try{
    const response = await openAIApi.createCompletion({
        model: 'text-davinci--003', // 达芬奇模型
        prompt: '写一首描述春天的诗歌',
        temperature: 1.0, // 0-2
        max_tokens: 256, // 分词 费用 3.5 4000个  4.0 8倍
    })
    console.log(response.data);
    
}catch(error){
    console.log(error.message); // 报错原因
}
