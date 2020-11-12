$('#s_alert').hide();
$('#e_alert').hide();

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

$('#AuthorizationModal').click(function (e) {
    $('#myModal').modal('show');
    $('#download').hide();
});

$('#Authorization').click(function (e) {
    let Email = $('input#Email').val();
    let Password = $('input#Password').val();

    if (!Email || !Password) {
        $('.alert').alert();
    } else {
        $.ajax({
            url: "http://localhost:3000/api/authorization",
            type: "POST",
            cache: false,
            data: ({
                'email': Email,
                'password': Password
            }),
            dataType: "json",
            beforeSend: Wait,
            success: Successful
        });
    }
});

function Wait() {
    $('#formA').hide();
    $('#download').show();
}

function Successful(data) {
    $('#download').hide();

    if (data) {
        Name = getCookie('Name');

        if (Name == 'Yehor') {
            $('#s_alert').show();
        } else {
            $('#e_alert').show();
        }

        setTimeout(function () {
            $('#myModal').modal('hide');
        }, 2000);
    }
}
