
function SubmitQuiz()
{
    const correctans = ['B','A','B','A'];
    const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    let useranswer = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    let score = 0;
    window.scrollTo(0,0);
    useranswer.forEach((answer,index)=>{
        if(answer === correctans[index]){
            score +=25;
        }
    });

    const result = document.querySelector('.result');
  result.querySelector('span').textContent = `${score}%`;
   result.classList.remove('d-none')
   
});
}