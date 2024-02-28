document.addEventListener('DOMContentLoaded', function () {
    const itemList = document.getElementById('item-list');
    const addBtn = document.getElementById('add-btn');
    const deleteBtn = document.getElementById('delete-btn');
    const submitBtn = document.getElementById('submit-btn');
  
    addBtn.addEventListener('click', addItem);
    deleteBtn.addEventListener('click', deleteItem);
    submitBtn.addEventListener('click', submitCart);
  
    function addItem() {
      const newItem = document.createElement('li');
      newItem.textContent = 'Nouvel élément';
      itemList.appendChild(newItem);
    }
  
    function deleteItem() {
      const items = itemList.querySelectorAll('li');
      if (items.length > 0) {
        const lastItem = items[items.length - 1];
        itemList.removeChild(lastItem);
      } else {
        alert('Le panier est vide.');
      }
    }
  
    function submitCart() {
      const items = itemList.querySelectorAll('li');
      if (items.length > 0) {
        alert('Panier soumis avec succès !');
        itemList.innerHTML = '';
      } else {
        alert('Le panier est vide, veuillez ajouter des éléments.');
      }
    }
  });