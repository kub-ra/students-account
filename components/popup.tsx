import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  website: string;
  companyName: string;
}

interface PopupProps {
  showPopup: boolean;
  onClose: () => void;
  addNewItem: (data: FormData) => void;
}

const Popup: React.FC<PopupProps> = ({ showPopup, onClose, addNewItem }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    website: "",
    companyName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNewItem(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      website: "",
      companyName: "",
    });
  };

  if (!showPopup) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          Kapat
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="İsim"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-posta"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Telefon"
          />
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Web Sitesi"
          />
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Şirket Adı"
          />
          <button type="submit">Ekle</button>
        </form>
      </div>
    </div>
  );
};

const MyComponent: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState<FormData[]>([]);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleAddNewItem = (newItem: FormData) => {
    setData((prevData) => [...prevData, newItem]);
    handleClosePopup();
  };

  return (
    <div>
      <button onClick={handleOpenPopup}>Popup Aç</button>
      <Popup
        showPopup={showPopup}
        onClose={handleClosePopup}
        addNewItem={handleAddNewItem}
      />
      {/* Diğer bileşenler ve içerik */}
    </div>
  );
};

export default MyComponent;
