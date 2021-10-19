
const Manager = require('../lib/manager');
const Intern = require('../lib/intern');
const Engineer = require('../lib/engineer');

// Manager card is generated

const generateManager = managerTitle => {
    return managerTitle.map(manager => {
        return `<div class="col">
        <div class="card shadow-lg" style="width: 18rem;">
            <div class="card-body identity">
                <h5 class="card-title">${manager.getName()}</h5>
                <h6 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16">
                        <path
                            d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z" />
                    </svg> Manager</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Id: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`
    }
    ).join('');
};
