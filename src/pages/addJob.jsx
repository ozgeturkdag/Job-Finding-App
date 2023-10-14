import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const AddJob = () => {
  const navigate = useNavigate();
  // forma girilen değerleri tuttuğumuz state
  const [formState, setFormState] = useState({
    id: Number(new Date().getTime()),
    position: "",
    company: "",
    location: "",
    status: "Interview",
    type: "Full Time",
    date: new Date().toLocaleDateString(),
  });

  // Ekle butonuna basıldığında çalışır
  const handleSubmit = () => {
    // alınan veriyi doğrulama
    if (!formState.position || !formState.company || !formState.location) {
      toast.warn("Fill in all form fields!", {
        autoClose: 3000,
      });
      return;
    }
    // veri gönderme işlemleri
    axios
      .post("http://localhost:3060/jobs", formState)
      // eğer başarılı bir şekilde veri tabanına gönderilrse kullanıcıyı anasayfaya gönder
      .then(() => navigate("/"));
  };

  return (
    <section className="add-sec">
      <h2>Add new job</h2>

      <div className="inputs">
        <div className="input-field">
          <label>Position</label>
          <input
            type="text"
            onChange={(e) =>
              setFormState({ ...formState, position: e.target.value })
            }
          />
        </div>

        <div className="input-field">
          <label>Company</label>
          <input
            type="text"
            onChange={(e) => {
              setFormState({ ...formState, company: e.target.value });
            }}
          />
        </div>

        <div className="input-field">
          <label>Location</label>
          <input
            type="text"
            onChange={(e) => {
              setFormState({ ...formState, location: e.target.value });
            }}
          />
        </div>

        <div className="input-field">
          <label>Status</label>
          <select
            onChange={(e) =>
              setFormState({ ...formState, status: e.target.value })
            }
          >
            <option value="Interview">Interview</option>
            <option value="On Process">On Process</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className="input-field">
          <label>Type</label>
          <select
            onChange={(e) =>
              setFormState({ ...formState, type: e.target.value })
            }
          >
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Remote">Remote</option>
            <option value="Intern">Intern</option>
          </select>
        </div>

        <button onClick={handleSubmit}>Add</button>
      </div>
      {/* norifikasyon için */}
      <ToastContainer />
    </section>
  );
};

export default AddJob;
