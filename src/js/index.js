const button = document.querySelector('.btn')
const advice = document.querySelector('.advice')
const adviceId = document.querySelector('.advice-id')

const url = 'https://api.adviceslip.com/advice'

const getAdvice = async () => {
   try {
      const response = await fetch(url)
      if(!response.ok){
         throw new Error (`Erro na requisição: ${response.status}`)
      }
      return await response.json()
   } catch (error){
      alert(error);
   }
}

const randomAdvice = async () => {
   const adviceData = await getAdvice()
   return adviceData.slip.advice
}

const getAdviceId= async () => {
   const adviceData = await getAdvice()
   return adviceData.slip.id
}

const updateAdvice = async () => {
   const adviceText = await randomAdvice()
   const adviceNumber = await getAdviceId()
   console.log(adviceText);
   
   adviceId.textContent = `#${adviceNumber}`
   advice.textContent = adviceText
}


button.addEventListener('click', updateAdvice)