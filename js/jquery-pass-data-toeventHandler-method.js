$(document).ready(function () {
    $('#btnClickMe').on('click', {firstName: 'John', lastName: 'Doe'}, sayHello);

    $('#btnClickMe').on('click', {firstName: 'Mary'}, sayHello);

    $('#btnClickMe').on('click', sayHello);

    function sayHello(event) {
        if (event.data == null) {
            alert('No name provided');
        }
        else {
            alert('Hello ' + event.data.firstName +
                (event.data.lastName != null ? ' ' + event.data.lastName : ''));
        }
    }
});