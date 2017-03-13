
  $.ajaxSetup({
    beforeSend: function(xhr){
      xhr.setRequestHeader('X-Accept', 'application/x-www-form-urlencoded');

    }
  });

var url = 'https://getpocket.com/v3/oauth/request';

$.post(url, {
  'consumer_key': '64510-02865d3dfc874b4fa05491f8',
  'redirect_uri': 'http://requestb.in/pfnq3mpf'
}).then((data)=> {
  console.log(data);
  localStorage.setItem('pocket', JSON.stringify(data));
})
