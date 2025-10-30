document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault(); // cegah reload halaman

  const input = document.getElementById('todo-input');
  const task = input.value.trim();
  if (task === '') return; // validasi input kosong

  const ul = document.getElementById('todo-list');
  const li = document.createElement('li');
  li.textContent = task;

  // Tambahkan tombol hapus
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.style.marginLeft = '10px';
  deleteBtn.addEventListener('click', function() {
    ul.removeChild(li);
  });

  li.appendChild(deleteBtn);
  ul.appendChild(li);

  input.value = ''; // reset input
});