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
    body.appendChild(button);

    button.addEventListener ("click", function() {
        for (var i = 0; i < numFields; i++) {
            let selectedSize;
        var x = document.createElement("input");
        x.setAttribute("type", "radio");
        input.name = "field" + i;
        container.appendChild(document.createElement("br"));
        document.body.appendChild(x);
        }
    });


}