fetch('/api/items')
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('list');
        if (list) {
            list.innerHTML = ''; // Очищаем "Загрузку..."
            data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.id}: ${item.name}`;
                list.appendChild(li);
            });
        }
    })
    .catch(err => console.error('Ошибка загрузки:', err));