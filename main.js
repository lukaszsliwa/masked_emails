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
            $('#email').html(email);
            chrome.storage.local.set({ lastEmail: email });
        });

        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('#email').text()).select();
        document.execCommand("copy");
        $temp.remove();
    });
}

$(function () {
   chrome.storage.local.get('lastEmail', function(result){
       $('#email').val(result['lastEmail']);
   });
   chrome.storage.local.get('currentDomain', function(result){
       $('#domain').val(result['currentDomain']);

       if(result['currentDomain'] == '' || result['currentDomain'] == null) {
           $('#app').remove();
       } else {
           $('#intro').remove();
       }
   });
   $('#btn-generate').on('click', function() {
       generate();
       return false;
   });
   generate();

   $('#domain').on('keyup', function() {
       chrome.storage.local.set({ currentDomain: $('#domain').val() });
   });
});
