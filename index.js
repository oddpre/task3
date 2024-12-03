//Waits for the page to load, and then adds a role selection identifier and its max count (2) for active checkbox.
document.addEventListener('DOMContentLoaded', () => {
    const roleSelection = document.querySelectorAll('input[type="checkbox"]');
    const maxSelection = 2;



    roleSelection.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const checkedCount = Array.from(roleSelection).filter(checkboxed => checkboxed.checked).length;
            //disables the checkbox if two roles have been chosen.
            roleSelection.forEach(checkboxed => {
                checkboxed.disabled = checkedCount >= maxSelection && !checkboxed.checked;
            });
        });
    });
});