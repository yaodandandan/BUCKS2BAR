document.addEventListener('DOMContentLoaded', function () {
    function getMonthlyValues() {
        const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        const incomeValues = [];
        const expenseValues = [];

        months.forEach(month => {
            const income = parseFloat(document.getElementById(`${month}-income`).value) || 0;
            const expense = parseFloat(document.getElementById(`${month}-expense`).value) || 0;
            incomeValues.push(income);
            expenseValues.push(expense);
        });

        return { incomeValues, expenseValues };
    }

    function updateChart(chart) {
        const { incomeValues, expenseValues } = getMonthlyValues();
        chart.data.datasets[0].data = incomeValues;
        chart.data.datasets[1].data = expenseValues;
        chart.update();
    }

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: [],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }, {
                label: 'Expense',
                data: [],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Initial chart update
    updateChart(myChart);

    // Update chart when input values change
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => updateChart(myChart));
    });

    // Download chart as image
    document.getElementById('download-chart').addEventListener('click', function () {
        const link = document.createElement('a');
        link.href = myChart.toBase64Image();
        link.download = 'chart.png';
        link.click();
    });
    // Validate username input
    const usernameInput = document.getElementById('username');
    usernameInput.addEventListener('input', function () {
        const username = usernameInput.value;
        //const isValid = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(username);
        const isValid = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*~])[A-Za-z\d!@#$%^&*~]{8,}$/.test(username);
        if (isValid) {
            usernameInput.style.borderColor = 'green';
        } else {
            usernameInput.style.borderColor = 'red';
        }
    });
});