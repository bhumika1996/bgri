var myObj =
{
    init:function()
    {
        this.load_country();
    },
    load_country:function()
    {
        var xhr = new XMLHttpRequest();
        xhr.open('GET','http://localhost/estartup/get_all_country.php',true);
        xhr.onload = function()
        {
            var countries = JSON.parse(xhr.responseText);
            countries.forEach(function(value)
            {
                var op = document.createElement('option');
                op.innerText = value.name;
                op.setAttribute('value',value.id);
                document.getElementById('country').appendChild(op);
            });
        }
        xhr.send();
    }
}
myObj.init();