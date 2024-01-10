document.addEventListener('DOMContentLoaded', () => {
    let notificationCount = 0;
    let wrapper = document.querySelector('.wrapper');
    function createNotification(classes, title, text, duration) {
        if (notificationCount === 0) {
            const notificationsWrapper = document.createElement('div');
            notificationsWrapper.classList.add('notifications');
            wrapper.appendChild(notificationsWrapper);
        }

        const notification = document.createElement('div');
        notification.classList.add('notification');
        if (classes) {
            const classList = classes.split(' ');
            classList.forEach(function (className) {
                notification.classList.add(className);
            });
        }

        const notificationTitle = document.createElement('h2');
        notificationTitle.textContent = title;

        const notificationText = document.createElement('p');
        notificationText.textContent = text;

        notification.appendChild(notificationTitle);
        notification.appendChild(notificationText);

        const notificationsWrapper = document.querySelector('.notifications');
        notificationsWrapper.appendChild(notification);

        notificationCount++;

        setTimeout(function () {
            notification.remove(); // Удаляем уведомление после заданного времени

            notificationCount--;

            if (notificationCount === 0) {
                const notificationsWrapper = document.querySelector('.notifications');
                if (notificationsWrapper) {
                    notificationsWrapper.remove();
                }
            }
        }, duration * 1000);

        return notification;
    }
    createNotification('success', 'Спасибо!', 'Мы будем информировать вас о ключевых этапах развития проекта Riwatex.', 7); 
    createNotification('warning', 'Упс...', 'Кажется вы уже подписаны на нашу рассылку. Попробуйте ввести другой адрес электронной почты.', 5); 
    createNotification('error', 'Ошибка!', 'Мы будем информировать вас о ключевых этапах развития проекта Riwatex.', 3); 
})