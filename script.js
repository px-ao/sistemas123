document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de comentário
    const commentButtons = document.querySelectorAll('.comment-btn');

    // Adiciona evento de clique para cada botão
    commentButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Encontra a seção de comentários pai
            const commentsSection = button.closest('.comments-section');
            // Encontra a textarea correspondente
            const textarea = commentsSection.querySelector('textarea');
            // Encontra a lista de comentários
            const commentsList = commentsSection.querySelector('.comments-list');

            // Verifica se há texto no comentário
            if (textarea.value.trim() !== '') {
                // Cria um novo elemento de comentário
                const newComment = document.createElement('div');
                newComment.className = 'comment';
                newComment.textContent = textarea.value;

                // Adiciona o comentário à lista
                commentsList.appendChild(newComment);

                // Limpa a textarea
                textarea.value = '';
            }
        });
    });
});