function updateView() {
    document.getElementById('app').innerHTML = `
    
        <h2>Budsjett</h2>

        <table>
            <tr>    
                <th>Kategori</th>
                <th>Budsjett</th>
                <th>Brukt så langt</th>
                <th>Igjen</th>
            </tr>
            ${createHtmlBudgetCategories()}
        </table>
        `;
}

function createHtmlBudgetCategories(){
    let html = '';
    for(let i = 0; i < model.budgetCategories.length; i++){
        let category = model.budgetCategories[i];
        let spent = calcSumSpendings(category.id);
        let remainder = category.monthlyBudget - spent;        
        html += `
            <tr>
                <td>${category.description}</td>
                <td>${category.monthlyBudget}</td>
                <td>${spent}</td>
                <td>${remainder}</td>
            </tr>        
        `;
    }
    return html;
}

function calcSumSpendings(categoryId){
    let sum = 0;
    for(let spending of model.spendings){
        if(spending.category===categoryId){
            sum += spending.amount;
        }
    }
    return sum;
}