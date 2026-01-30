const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btn = document.querySelector('.btnlogin');
registerlink.addEventListener('click',()=>
{
   wrapper.classList.add('active');
});
loginlink.addEventListener('click',()=>
{
   wrapper.classList.remove('active');

});
btn.addEventListener('click',()=>
{
   wrapper.classList.add('active-popup');

});

