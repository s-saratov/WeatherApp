# Детали проекта

1. Страница должна содержать:
   
    a. заголовок - “Weather app”;

    b. поле для ввода города;
   
    c. кнопку “Получить погоду”;
   
    d. область для отображения данных о погоде или ошибки.

2. При нажатии на кнопку “Получить погоду”, должен отправляться запрос на url `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`.

3. Во время ожидания ответа нужно отображать индикатор.

4. После успешного получения данных, их нужно отобразить на странице (температуру (градусы Цельсия) и название города).

5. При получении ошибки, её данные нужно отобразить на странице (код и сообщение).

6. При отсутствии названия города, после нажатия на кнопку “Получить погоду” должен появиться alert с просьбой ввести название города.

## Задача *

Задача со * - отобразить иконку погоды из ответа.
Ссылка для получения картинки(icon - вы должны забрать из ответа): `http://openweathermap.org/img/w/${icon}.png`
