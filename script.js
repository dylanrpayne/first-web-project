$(document).ready(function() {
    // function to add items to localStorage to view in saved.html
    $('.table-image').click(function(event) {
        let saveBool = confirm('Would you like to save this image?');
        if (saveBool) {
            localStorage.setItem(event.currentTarget.id, ['img' ,event.currentTarget.src]);
            // required alert which shows user how many saved items they have
            alert(`You now have ${Object.keys(localStorage).length} saved items`);
        }
    })
    $('.testimonial').click(function(event) {
        let saveBool = confirm('Would you like to save this testimonial?');
        if (saveBool) {
            localStorage.setItem(event.currentTarget.id, ['text' ,$(`#${event.currentTarget.id}`).text().trim()]);
            alert(`You now have ${Object.keys(localStorage).length} saved items`);
        }
    });

    // this function appends the saved items to the table on saved.html
    for (i=0; i<Object.keys(localStorage).length; i++) {
        $('#saved-items-table').append(`<tr id=saved-items-table-row-${i}></tr>`);
        $(`#saved-items-table-row-${i}`).append(`<td>${Object.keys(localStorage)[i]}</td>`);
        $(`#saved-items-table-row-${i}`).append(`<td>${localStorage.getItem(Object.keys(localStorage)[i])}</td>`);
    }

    // required like function
    $('.like-button').click(function(event) {
        $(`#${event.currentTarget.id}`).css('background-color','#5dba76');
    }); 

    // required contact form
    // this function takes the users data and opens their default email sender and fills the data in automatically
    $('#submit-button').click(function() {
        let firstName = $('#first-name-input').val();
        let surname = $('#surname-input').val();
        let subject =  $('input[name=subject]:checked').val()
        let message = $('#message-input').val();
        
        window.location = 'mailto:' + 'capetown@mtb.com' + '?subject=' + `from: ${firstName} ${surname}, ${subject}` + '&body=' + message;
    });

    // required hiding/showing function & animated effects
    // this function allows the users to make comments
    // comments are saved in sessionStorage
    $('#add-comment-button').click(function() {
        $('.comment-form-div').slideDown();
    });
    $('#confirm-comment-button').click(function() {
        $('.comment-form-div').slideUp();
        sessionStorage.setItem(Object.keys(sessionStorage).length, `${$('#comment-message-input').val()} <br> -${$('#comment-name-input').val()}`)
        $('#comments').append(`<p>${$('#comment-message-input').val()} <br> -${$('#comment-name-input').val()}</p><br>`);
        $('p').slideDown();
    })

    // this for loop adds all comments in sessionStorage
    for (i=0; i<Object.keys(sessionStorage).length; i++) {
        $('#comments').append(`<p>${sessionStorage.getItem(i)}</p><br>`);
        $('p').fadeIn();
    }

    // required chained effects & drop-down menu
    $('#location-list-heading').click(function() {
        $('#location-list').slideDown().delay(3000).slideUp();
    });
});