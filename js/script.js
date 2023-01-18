document.addEventListener('DOMContentLoaded', function () {


    const form = document.querySelector('form');


    postData(form);

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const request = new XMLHttpRequest();

            request.open('POST', 'server.php');

            const formData = new FormData(form);

            request.send(formData);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                } else {
                    console.log('Error');
                }

            });
        });
    }


});