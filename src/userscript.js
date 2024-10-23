document.addEventListener('DOMContentLoaded', function () {
    const userTable = document.getElementById('user_form').getElementsByTagName('tbody')[0];

    // Fetch users and populate table
    function fetchUsers() {
        fetch('http://localhost:3000/api/users')
            .then(response => response.json())
            .then(data => {
                userTable.innerHTML = ''; // Clear existing rows
                data.forEach(user => {
                    const row = userTable.insertRow();
                    row.insertCell(0).innerText = user.status;
                    row.insertCell(1).innerText = user.date;
                    row.insertCell(2).innerText = user.renewalDate;
                    row.insertCell(3).innerText = user.id;
                    row.insertCell(4).innerText = user.name;
                    row.insertCell(5).innerText = user.setreminder;
                    
                   
                    
                });
            })
            .catch(error => console.error('Error fetching users:', error));
    }

    // Event listener for form submission
    document.getElementById('userForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const renewalDate = document.getElementById('renewal_date').value;
        const date = document.getElementById('date').value;
        const status = document.getElementById('status').value;
        const setreminder = document.getElementById('setreminder').value;

        const userData = { name, renewalDate, date, status,setreminder };

        fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('User added:', data);
            fetchUsers(); // Refresh the user list
            document.getElementById('userForm').reset(); // Reset the form
        })
        .catch(error => console.error('Error adding user:', error));
    });

    // Initial fetch of users
    fetchUsers();
});
