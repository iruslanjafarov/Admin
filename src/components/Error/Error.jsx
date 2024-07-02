import ErrorGIF from '../../assets/error.gif'

const Error = () => {
    return (
        <div className='error'>
            <img src={ErrorGIF} alt='error' className='error__image'/>
        </div>
    )
}

export default Error
