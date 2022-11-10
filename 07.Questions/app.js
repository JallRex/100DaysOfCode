//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    // console.log(question);
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function() {
        questions.forEach(function(item){
            if(item !== question ){
                item.classList.remove('show-text');
            }
        });

        question.classList.toggle('show-text');
    });
});








// traversing the dom alternatives:


// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         const question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle('show-text')
//     });
// });

// End of "traversing the Dom " part.

