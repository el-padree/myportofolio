import React, { useState } from 'react';
import Modal from '../components/Modal';
import HorizontalCard from './HorizontalCard';
import '../styles/Modal.css';

const ModalExample = () => {
  const [isOpenSmall, setIsOpenSmall] = useState(false);
  const [isOpenMedium, setIsOpenMedium] = useState(false);
  const [isOpenLarge, setIsOpenLarge] = useState(false);
  const [isOpenWithForm, setIsOpenWithForm] = useState(false);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Modal Component Examples</h1>

      {/* Button untuk membuka Small Modal */}
      <button
        className="btn"
        onClick={() => setIsOpenSmall(true)}
        style={{ marginRight: '1rem', marginBottom: '1rem' }}
      >
        Open Small Modal
      </button>

      {/* Button untuk membuka Medium Modal */}
      <button
        className="btn"
        onClick={() => setIsOpenMedium(true)}
        style={{ marginRight: '1rem', marginBottom: '1rem' }}
      >
        Open Medium Modal
      </button>

      {/* Button untuk membuka Large Modal */}
      <button
        className="btn"
        onClick={() => setIsOpenLarge(true)}
        style={{ marginRight: '1rem', marginBottom: '1rem' }}
      >
        Open Large Modal
      </button>

      {/* Button untuk membuka Form Modal */}
      <button
        className="btn"
        onClick={() => setIsOpenWithForm(true)}
        style={{ marginBottom: '1rem' }}
      >
        Open Form Modal
      </button>

      {/* Small Modal */}
      <Modal
        isOpen={isOpenSmall}
        onClose={() => setIsOpenSmall(false)}
        title="Small Modal"
        size="sm"
        backdropClosable={true}
      >
        <p>Ini adalah contoh modal dengan ukuran small (max-width: 400px).</p>
        <p>Anda dapat menutupnya dengan:</p>
        <ul>
          <li>Klik tombol X</li>
          <li>Tekan tombol ESC</li>
          <li>Klik di luar modal (backdrop)</li>
        </ul>
      </Modal>

      {/* Medium Modal */}
      <Modal
        isOpen={isOpenMedium}
        onClose={() => setIsOpenMedium(false)}
        title="Medium Modal"
        size="md"
        showCloseButton={true}
      >
        <p>Ini adalah contoh modal dengan ukuran medium (max-width: 600px).</p>
        <p>
          Modal ini menggunakan design yang sama dengan .card component yang ada
          di index.css
        </p>
        <p>Features:</p>
        <ul>
          <li>Border tebal hitam 3px</li>
          <li>Shadow offset styling</li>
          <li>Background putih</li>
          <li>Reusable dan dinamis</li>
          <li>Close button dengan styling button color</li>
        </ul>
      </Modal>

      {/* Large Modal */}
      <Modal
        isOpen={isOpenLarge}
        onClose={() => setIsOpenLarge(false)}
        title="Large Modal"
        size="lg"
        backdropClosable={false}
      >
        <p>Ini adalah contoh modal dengan ukuran large (max-width: 800px).</p>
        <p>
          <strong>Catatan:</strong> Modal ini tidak bisa ditutup dengan klik
          backdrop (backdropClosable=false), hanya dengan tombol X atau ESC.
        </p>
        <p>Anda dapat customize semua property sesuai kebutuhan:</p>
        <ul>
          <li>
            <code>isOpen</code> - state untuk membuka/menutup modal
          </li>
          <li>
            <code>onClose</code> - callback function untuk menutup modal
          </li>
          <li>
            <code>title</code> - judul modal
          </li>
          <li>
            <code>size</code> - ukuran modal (sm, md, lg, xl)
          </li>
          <li>
            <code>showCloseButton</code> - tampilkan/sembunyikan tombol X
          </li>
          <li>
            <code>backdropClosable</code> - bisa ditutup dengan klik backdrop
          </li>
        </ul>
      </Modal>

      {/* Form Modal */}
      <Modal
        isOpen={isOpenWithForm}
        onClose={() => setIsOpenWithForm(false)}
        title="Contact Form"
        size="md"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Form submitted!');
            setIsOpenWithForm(false);
          }}
        >
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              Nama:
            </label>
            <input
              type="text"
              placeholder="Masukkan nama"
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '2px solid #000',
                borderRadius: '0',
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              Email:
            </label>
            <input
              type="email"
              placeholder="Masukkan email"
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '2px solid #000',
                borderRadius: '0',
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              Pesan:
            </label>
            <textarea
              placeholder="Masukkan pesan"
              rows="4"
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '2px solid #000',
                borderRadius: '0',
              }}
            />
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <button
              type="button"
              className="btn"
              onClick={() => setIsOpenWithForm(false)}
              style={{ background: '#FF6B6B' }}
            >
              Cancel
            </button>
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </Modal>
      <HorizontalCard
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
        date="November 2024 - November 2024"
        title="Lead & Learn 4.0 - Leaders ID"
        description="The Learn & Lead 4.0 program is a three-day event scheduled to take place in Singapore. Key activities include a visit to Google Asia Pacific HQ and a campus tour at SMU."
        buttonText="Read More"
        onButtonClick={() => alert('Tombol diklik!')}
      />
    </div>
  );
};

export default ModalExample;
