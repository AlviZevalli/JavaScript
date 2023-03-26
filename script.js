function buatFields() {
    var numFields = document.getElementById("numFields").value;
    var container = document.getElementById("fieldsContainer");
    container.innerHTML = "Jumlah Field Terbentuk : " +numFields;

    for (var i = 0; i < numFields; i++) {
        var input = document.createElement("input");
        input.type = "text";
        input.name = "field" + i;
        container.appendChild(input);
        container.appendChild(document.createElement("br"));
        container.appendChild(document.createElement("br"));
    }
    var button = document.createElement("button");
    button.innerHTML = "OK";

    var body = document.getElementsByTagName("body")[0];
    container.appendChild(document.createElement("br"));
    body.appendChild(button);

    button.addEventListener("click", function() {
        var radioGroupName = "fields";
        var radioContainer = document.createElement("div");
        for (var i = 0; i < numFields; i++) {
            var x = document.createElement("input");
            x.setAttribute("type", "radio");
            x.name = radioGroupName;
            x.value = document.getElementsByName("field" + i)[0].value;
            radioContainer.appendChild(x);
            radioContainer.appendChild(document.createTextNode(document.getElementsByName("field" + i)[0].value));
            radioContainer.appendChild(document.createElement("br"));
    
            x.addEventListener("click", function() {
                submitButton.style.display = "inline-block";
            });
        }
    
        var body = document.getElementsByTagName("body")[0];
        body.appendChild(radioContainer);
    
        var submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.style.display = "none"; 

        submitButton.addEventListener("click", function() {
            var nama = document.getElementById("nama").value;
            var jmlPilihan = document.getElementById("jmlPilihan").value;
            var pilihan = [];
            var radioButtons = document.getElementsByName("pilihan");
            for (var i = 0; i < radioButtons.length; i++) {
                if (radioButtons[i].checked) {
                    pilihan.push(radioButtons[i].value);
                    break;
                }
            }
            var hasil = "Hallo, nama saya " + fname + ", saya mempunyai sejumlah " + numFields + " pilihan yaitu " + pilihan.join(", ") + ", dan saya memilih " + pilihan[0] + ".";
            alert(hasil);
        });
        body.appendChild(submitButton);
    });
}