import './contact.css';
import contact from '../../assets/contact.svg';

const Contact = () => (
  <div className="contact section container">
    <div className="title">
      <h2>Kontak</h2>
    </div>

    <div className="contact__content">
      <div>
        <img
          src={contact}
          alt="house"
        />
      </div>

      <div>
        <form>
          <div>
            <h3>NAMA:</h3>

            <input
              type="text"
              placeholder="Tulis nama..."
            />
          </div>

          <div>
            <h3>EMAIL:</h3>

            <input
              type="text"
              placeholder="Tulis email..."
            />
          </div>

          <div>
            <h3>PESAN:</h3>

            <textarea
              name="message"
              placeholder="Tulis pesan..."
            />
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Contact;
