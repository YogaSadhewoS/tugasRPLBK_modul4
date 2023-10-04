import React, { useState } from 'react';
import './App.css';

function App() {
  const [namaAnggota, setNamaAnggota] = useState('');
  const [anggota, setAnggota] = useState([]);

  const handleNameChange = (e) => {
    setNamaAnggota(e.target.value);
  };

  const handleSave = () => {
    if (namaAnggota.trim() !== '') {
      setAnggota([...anggota, namaAnggota]);
      setNamaAnggota('');
    }
  };

  const handleClear = () => {
    setAnggota([]);
  };

  return (
    <div className="app">
      <h1>Tugas Kelompok Ganjil | Kel 13 </h1>
      <h1>Praktikum RPLBK</h1>
      
      <h2></h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="New Item..."
          value={namaAnggota}
          onChange={handleNameChange}
        />
      </div>
      <button onClick={handleSave}>Simpan</button>
      <h2></h2>
      <button onClick={handleClear}>Clear</button>
      <div className="anggota-list">
       
        <ol>
          {anggota.map((anggota, index) => (
            <li key={index}> {anggota}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;