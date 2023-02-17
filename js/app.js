const src = 'https://picsum.photos/300';
const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const storage = [];
let email;
let url;
let x = 0;
let y = 0;
let z = 0;

function newImg() {
    fetch(src).then(response => {
        if (response.status >= 400) {
            return response.json().then(errData => {
                const error = new Error('Something went wrong!');
                error.data = errData;
                throw error;
            });

        }
        $('.mainImg').attr("src", response.url);
        url = response.url;
    }).catch((error) => 
    console.log("Error: " + error));
}


function search(email) {
    var result;

    for (var i = 0, len = storage.length; i < len; i++) {

        if (storage[i][0] === email) {

            result = storage[i];

            break;
        }

    }

    return result;
}


$(window).on('load', newImg);
$('#genNewImg').on('click', newImg);

$('#assignTo').on('click', () => {
    email = document.forms["formSubmit"]["email"].value;

    if (regex.test(email) == false) {
        functionAlert();
    }
    else if (!search(email)) {

        storage.push([email, url]);
        var option = $("<option></option").text(email).attr("value", z=0);
        $('#saved__Emails').append(option);
        newImg();
        z++;


    } else if (search(email)) {
        x = storage.findIndex(e => e.includes(email));
        storage[x].push(url);
        newImg();

    }
    
    updateImg();
});



$('#saved__Emails').change(updateImg);


function updateImg() {
    if ($('#saved__Emails').val() === "none") {
        $("img").remove(".items");
    } else if ($('#saved__Emails').val()) {
        var indexer = $('#saved__Emails').val();
        $("img").remove(".items");
        for (var p = 1; p < storage[indexer].length; p++) {

            content = $('<img class="items">').attr("src", storage[indexer][p]);
            $('.imgDisplayContainer div div').append(content);
        }

    }
};

function functionAlert(msg, myYes) {
    var confirmBox = $("#confirm");
    confirmBox.find(".message").text(msg);
    confirmBox.find(".yes").unbind().click(function() {
       confirmBox.hide();
    });
    confirmBox.find(".yes").click(myYes);
    confirmBox.show();
 }
