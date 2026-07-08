document.addEventListener('DOMContentLoaded', function() {
    const chattingBtn = document.getElementById('chatting-btn');
    const sellBtn = document.getElementById('sell-btn');
    const myBtn = document.getElementById('my-btn');
    const loginModal = document.getElementById('login-modal');
    const closeModal = document.getElementById('close-modal');

    function openModal() {
        loginModal.style.display = 'flex'; 
    }

    function closeModalFunction() {
        loginModal.style.display = 'none';
    }

    chattingBtn.addEventListener('click', openModal);
    sellBtn.addEventListener('click', openModal);
    myBtn.addEventListener('click', openModal);

    closeModal.addEventListener('click', closeModalFunction);

    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            closeModalFunction();
        }
    });
});
