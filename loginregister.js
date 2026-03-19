const wrapper=document.querySelector('.wrapper'),
registerLink=document.querySelector('.register-link'),
loginLink=document.querySelector('.login-link'),
allToggles=document.querySelectorAll('.toggle-pass');
registerLink.onclick=()=>
{
    wrapper.classList.add('active');
}
loginLink.onclick=()=>
{
    wrapper.classList.remove('active');
}
allToggles.forEach(eye => {
    eye.onclick = function() {
        // لاحظ السبيلينج الصحيح لـ password
        const passwordInput = this.parentElement.querySelector('input');
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            // نغير العين المشطوبة إلى مفتوحة لأن السر ظهر
            this.classList.replace('bx-eye-slash', 'bx-eye');
        } else {
            passwordInput.type = 'password';
            // نغير العين المفتوحة إلى مشطوبة لأن السر اختفى
            this.classList.replace('bx-eye', 'bx-eye-slash');
        }
    }
});
