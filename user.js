// user.js
document.addEventListener('DOMContentLoaded', function() {
    const itemsContainer = document.getElementById('items-container');
    const items = JSON.parse(localStorage.getItem('items')) || [];

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');

        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.name;

        const name = document.createElement('h2');
        name.textContent = item.name;

        const date = document.createElement('p');
        date.textContent = `Date: ${item.date}`;

        const time = document.createElement('p');
        time.textContent = `Time: ${item.time}`;

        const description = document.createElement('p');
        description.textContent = item.description;

        itemElement.appendChild(img);
        itemElement.appendChild(name);
        itemElement.appendChild(date);
        itemElement.appendChild(time);
        itemElement.appendChild(description);

        itemsContainer.appendChild(itemElement);
    });
});
