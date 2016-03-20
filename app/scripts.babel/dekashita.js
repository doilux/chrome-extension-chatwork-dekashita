'use strict';

var icon = document.createElement('img');
icon.src = chrome.extension.getURL('dist/img/maruta.png');

var iconWrapper = document.createElement('li');
iconWrapper.id = '_dekashitaButton';
iconWrapper.class = '_showDescription';
iconWrapper.setAttribute('style', 'display: inline-block; padding-top: 3px;');
iconWrapper.setAttribute('role', 'button');
iconWrapper.setAttribute('aria-label', 'でかした！！');

iconWrapper.appendChild(icon);

document.getElementById('_chatSendTool').appendChild(iconWrapper);

$('#_dekashitaButton').click(function (e) {
    var val = $('#_chatText').val();
    $('#_chatText').val(val + 'でかした！！');
});
