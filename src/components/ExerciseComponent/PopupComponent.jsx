const PopupComponent = ({ points, questions, handleRepeat, repeat, test }) => {
  const handleOnClick = () => {
    const popup = document.querySelector('.popup');
    popup.classList.add('hidden');
    handleRepeat();
  };
  const hadleClosePopup = () => {
    const popup = document.querySelector('.popup');
    popup.classList.add('hidden');
    // заглушка в дальнейшем будет вести на страничку с курсом
  };
  return (
    <div className="popup">
      {repeat.length !== 0 || repeat ? (
        <>
          <p>Вы завершили {test ? 'тест' : 'упражнение'}!</p>
          <p>
            Но у вас есть ошибки.
            {test ? '' : 'Чтобы пройти урок, завершите упражнение без ошибок.'}
          </p>
          <p>
            Вы набрали: {points} баллов из {questions}.
          </p>
          <button onClick={handleOnClick}>Пройти повторно</button>
          <button className="close" onClick={hadleClosePopup}>
            {'✖'}
          </button>
        </>
      ) : (
        <>
          <p>Поздравляем!</p>
          <p>Вы завершили {test ? 'тест' : 'упражнение'} без ошибок!</p>
          <p>
            Вы набрали: {points} баллов из {questions}.
          </p>
          <button className="close" onClick={hadleClosePopup}>
            {'✖'}
          </button>
        </>
      )}
    </div>
  );
};
export default PopupComponent;
