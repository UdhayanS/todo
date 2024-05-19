// admin.js
document.getElementById('admin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const description = document.getElementById('description').value;
    const imageFile = document.getElementById('image').files[0];
    
    const reader = new FileReader();
    reader.onloadend = function() {
        const imageUrl = reader.result;

        const item = {
            name,
            date,
            time,
            description,
            imageUrl
        };

        let items = JSON.parse(localStorage.getItem('items')) || [];
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));

        alert('Item added successfully!');
    };
    
    if (imageFile) {
        reader.readAsDataURL(imageFile);
    }
});
