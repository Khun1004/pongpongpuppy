document.addEventListener('DOMContentLoaded', function() {
    const kakaoBtn = document.getElementById('kakao-btn');
    const kakaoModal = document.getElementById('login-container');
    const closeModal = document.getElementById('close-kakao-modal');

    kakaoBtn.addEventListener('click', function() {
        kakaoModal.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        kakaoModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == kakaoModal) {
            kakaoModal.style.display = 'none';
        }
    });
});
