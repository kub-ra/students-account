import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import caret from "../src/assets/svgs/caret-circle-down 1.svg";
import Image from "next/image";
import bell from "../src/assets/svgs/bell 1.svg";
import Table from "../components/table";

interface User {
  id: number;
  firstName: string;
  email: string;
  phone: string;
  domain: string;
  company: any;
  image: string;
}
interface TableProps {
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}
interface FormData {
  firstName: string;
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
    firstName: "",
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
    console.log(formData, "formdata");
    addNewItem(formData);
    setFormData({
      firstName: "",
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
    <div className="popup fixed top-1 w-2/5 bg-white border">
      <div className="popup-content">
        <button
          className="close-button btn-color rounded-full p-1 text-white"
          onClick={onClose}
        >
          X
        </button>
        <form onSubmit={handleSubmit}>
          <div className=" pt-12">
            <label
              className="text-gray font-Montserrat text-sm font-medium leading-4 block after:content-['*'] after:ml-0.5 after:text-red-500 "
              htmlFor="name"
            >
              İsim
            </label>
            <input
              className="input-border w-full h-11 rounded mt-2 placeholder:font-normal placeholder:text-xs text-black"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="İsim"
            />
          </div>
          <div className=" pt-3">
            <label
              className="text-gray font-Montserrat text-sm font-medium leading-4 block after:content-['*'] after:ml-0.5 after:text-red-500 "
              htmlFor="name"
            >
              Email
            </label>
            <input
              className="input-border w-full h-11 rounded mt-2 placeholder:font-normal placeholder:text-xs text-black"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-posta"
            />
          </div>
          <div className=" pt-3">
            <label
              className="text-gray font-Montserrat text-sm font-medium leading-4 block after:content-['*'] after:ml-0.5 after:text-red-500 "
              htmlFor="name"
            >
              Phone
            </label>
            <input
              className="input-border w-full h-11 rounded mt-2 placeholder:font-normal placeholder:text-xs text-black"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Telefon"
            />
          </div>
          <div className=" pt-3">
            <label
              className="text-gray font-Montserrat text-sm font-medium leading-4 block after:content-['*'] after:ml-0.5 after:text-red-500 "
              htmlFor="name"
            >
              Web Site
            </label>
            <input
              className="input-border w-full h-11 rounded mt-2 placeholder:font-normal placeholder:text-xs text-black"
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Web Sitesi"
            />
          </div>
          <div className=" pt-3">
            <label
              className="text-gray font-Montserrat text-sm font-medium leading-4 block after:content-['*'] after:ml-0.5 after:text-red-500 "
              htmlFor="name"
            >
              Web Site
            </label>
            <input
              className="input-border w-full h-11 rounded mt-2 placeholder:font-normal placeholder:text-xs text-black"
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Web Sitesi"
            />
          </div>
          <div className=" pt-3">
            <label
              className="text-gray font-Montserrat text-sm font-medium leading-4 block after:content-['*'] after:ml-0.5 after:text-red-500 "
              htmlFor="name"
            >
              Şirket Adı
            </label>
            <input
              className="input-border w-full h-11 rounded mt-2 placeholder:font-normal placeholder:text-xs text-black"
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Şirket Adı"
            />
          </div>

          <button
            className="btn-color text-white w-full h-11 rounded mt-12 font-medium text-sm font-Montserrat"
            type="submit"
          >
            EKLE
          </button>
        </form>
      </div>
    </div>
  );
};

const Students = () => {
  const [data, setData] = useState<User[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newItemdata, setNewItemData] = useState<FormData[]>([]);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleAddNewItem = (newItem: FormData) => {
    console.log(newItem, "newıtem");
    setNewItemData((prevData) => [...prevData, newItem]);
    console.log(newItemdata, "newıtemdata");
    setData((prevData) => [...prevData, newItemdata]);

    handleClosePopup();
  };

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setData(data.users));
  }, []);

  const handleDelete = (id: number) => {
    // Silme işlemini gerçekleştirmek için id'yi kullanın
    console.log(`Delete item with id: ${id}`);
  };

  const handleEdit = (id: number) => {
    // Düzenleme işlemini gerçekleştirmek için id'yi kullanın
    console.log(`Edit item with id: ${id}`);
  };

  return (
    <div className="flex bg-white h-full">
      <Navbar />

      <div className="content w-4/5 bg-gray-primary">
        <div className="flex justify-between h-16 px-16">
          <Image src={caret} width={18} height={18} alt="caret" />
          <Image src={bell} width={18} height={18} alt="bell" />
        </div>
        <div className=" border-bottom mx-12">
          <div className="flex justify-between h-16">
            <div className="flex align-center">
              <p className="font-Montserrat text-xl font-bold align-center text-black m-auto px-16">
                Students List
              </p>
            </div>

            <div className="px-8 flex justify-between">
              <div className="custom-input mx-2 m-auto">
                <input
                  type="text"
                  className="search-input rounded-lg text-black h-9 w-52 m-auto"
                  placeholder="Search..."
                />
              </div>

              <button
                onClick={handleOpenPopup}
                className="btn-color rounded w-48 h-11 text-sm font-medium m-auto ml-2"
              >
                ADD NEW STUDENT
              </button>
            </div>
          </div>
        </div>
        <div className="text-black  flex justify-center">
          <Table data={data} onDelete={handleDelete} onEdit={handleEdit} />
          <Popup
            showPopup={showPopup}
            onClose={handleClosePopup}
            addNewItem={handleAddNewItem}
          />
        </div>
      </div>
    </div>
  );
};

export default Students;
