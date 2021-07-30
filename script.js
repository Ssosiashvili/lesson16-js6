let firstNamesArray = ['Soso', 'giorgi', 'nino', 'mariam'];
let lastNamesArray = ['Sosiashvili','gujabidze','turashvili','tkebuchava'];
let phoneNumbersArray = ['555-555-555','512-222-222','123-456-789','999-999-999'];
let emailsArray = ['sosiashvilisoso@gmail.com','s@gmail.com','ragaca@gmail.com','arvici@gmail.com'];
let textExamplesArray = ['auto-filled text','random text','because you clicked on "Auto Fill"','ავტომატურად შევსებული ტექსტი'];
let subjectArray = ["subject_1","subject_2","subject_3","subject_4"]


function getRandomNumbersFromRange (a, b) {
   return Math.round ( Math.random() * (b-a) + a);
}

let fillBtn = document.querySelector('.auto_fill');
fillBtn.addEventListener('click', function () {
    document.querySelector('#first_name').value = firstNamesArray[getRandomNumbersFromRange (0, 3)];
    document.querySelector('#last_name').value = lastNamesArray[getRandomNumbersFromRange (0, 3)];
    document.querySelector('#phone').value = phoneNumbersArray[getRandomNumbersFromRange (0, 3)];
    //document.querySelector('#email').value = emailsArray[getRandomNumbersFromRange (0, 3)]; არ მუშაობს "@"-ს გამო, მიზეზი არ ვიცი.
    document.querySelector('#text').value = textExamplesArray[getRandomNumbersFromRange (0, 3)];
    document.querySelector('#subject').value = subjectArray[getRandomNumbersFromRange (0, 3)];    
});
