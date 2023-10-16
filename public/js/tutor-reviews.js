const newFormHandler1 = async (event) => {
    event.preventDefault();

    const tutorBtn = event.target.getAttribute('tutor-id')
    console.log(tutorBtn)
    //    if (tutorBtn) {
    //        await fetch(`/${tutorBtn}`, {
    //            method: 'GET',
    //        });
    //    }
    document.location.href = `/homepage/${tutorBtn}`;
};

const buttonsArr = document.querySelectorAll('.get-reviews')
for (let index = 0; index < buttonsArr.length; index++) {

    buttonsArr[index].addEventListener('click', newFormHandler1);
}