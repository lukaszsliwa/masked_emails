function generate() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        var url = new URL(tabs[0].url)
        var domain = url.hostname;
        var code = Math.random().toString(36).slice(2, 7);
        var prefix = domain.split('.');
        var name = prefix.pop();
        if (['co', 'com', 'org', 'net', 'info'].includes(name = prefix.pop())) {
            name = prefix.pop();
        }

        chrome.storage.local.get('currentDomain', function(result){
            var email = name + '.' + code + '@' + result['currentDomain'];
            $('#masked_emails_extension-email').html(email);
            chrome.storage.local.set({ lastEmail: email });

            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($('#masked_emails_extension-email').text()).select();
            document.execCommand("copy");
            $temp.remove();
        });
    });
}

$(function () {
   chrome.storage.local.get('lastEmail', function(result){
       $('#masked_emails_extension-email').val(result['lastEmail']);
   });
   chrome.storage.local.get('currentDomain', function(result){
       $('#masked_emails_extension-domain').val(result['currentDomain']);

       if(result['currentDomain'] == '' || result['currentDomain'] == null) {
           $('#masked_emails_extension-app').remove();
       } else {
           $('#masked_emails_extension-intro').remove();
       }

       $('#masked_emails_extension-btn-generate').on('click', function() {
           generate();
           return false;
       });
       generate();

       $('#masked_emails_extension-domain').on('keyup', function() {
           chrome.storage.local.set({ currentDomain: $('#masked_emails_extension-domain').val() });
       });

       $('input[type=email]').each(function(item, index) {
           $(this).after('<a href="">mask</a>');
       });
   });
});
