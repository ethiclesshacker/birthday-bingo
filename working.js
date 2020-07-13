

fetch('./mock_data.json')
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        create(data);
    }
    )

function create(data) {
    console.log(data);

    var heading = document.querySelector('.heading');
    heading.textContent = (data.name + " Birthday Bingo").toUpperCase();

    var items = document.querySelector('.items');
    for (const item of data.items) {
        var box = document.createElement('div')
        var pt = document.createElement('p')
        pt.innerText = item;
        box.appendChild(pt);
        items.appendChild(box);
    }

}