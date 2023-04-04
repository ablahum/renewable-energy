import './contact.css'
import contact from '../../assets/contact.svg'

const Contact = () => (
  <div
    className='contact section container'
    id='contact'
  >
    <div className='title'>
      <h2>Kontak</h2>
    </div>

    <div className='contact__content'>
      <div className='contact__content-img'>
        <img
          src={contact}
          alt='house'
        />
      </div>

      <form className='contact__content-form'>
        <div className='contact__name'>
          <label>NAMA:</label>

          <input
            type='text'
            placeholder='Tulis nama...'
          />
        </div>

        <div className='contact__email'>
          <label>EMAIL:</label>

          <input
            type='text'
            placeholder='Tulis email...'
          />
        </div>

        <div className='contact__message'>
          <label>PESAN:</label>

          <textarea
            name='message'
            placeholder='Tulis pesan...'
          />
        </div>

        <button type='submit'>kirim</button>
      </form>
    </div>
  </div>
)

export default Contact
