const HeroesForm = () => {
    return (
        <section className='form'>
            <div className='form-container'>
                <form className='form-item'>
                    <div className='form-name'>
                        <h3 className='form-name__title'>Имя нового героя</h3>
                        <input type='text' name='name' placeholder='Как меня зовут?' className='form-name__input' />
                    </div>
                    <div className='form-skills'>
                        <h3 className='form-skills__title'>Описание</h3>
                        <textarea type='text' name='skills' placeholder='Что я умею?' className='form-skills__textarea' />
                    </div>
                    <div className='form-element'>
                        <h3 className='form-element__title'>Выбрать элемент героя</h3>
                        <select required name='element' className='form-element__select'>
                            <option disabled hidden>Я владею элементом...</option>
                            <option value='fire'>Огонь</option>
                            <option value='water'>Вода</option>
                            <option value='wind'>Ветер</option>
                            <option value='earth'>Земля</option>
                        </select>
                    </div>
                    <button className='form__button'>Создать</button>
                </form>
            </div>
        </section>
    )
}

export default HeroesForm