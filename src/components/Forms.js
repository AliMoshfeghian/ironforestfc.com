"use client";

import React, { useState } from "react";
import { User, Mail, Shield, Building, MessageSquare, Phone, Briefcase, Award } from "lucide-react";
import styles from "./Forms.module.css";

export default function Forms() {
  const [activeTab, setActiveTab] = useState("fans"); // fans, players, sponsors
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Form states
  const [fansData, setFansData] = useState({ name: "", email: "" });
  const [playersData, setPlayersData] = useState({
    name: "",
    email: "",
    age: "",
    position: "Midfielder",
    experience: "",
  });
  const [sponsorsData, setSponsorsData] = useState({
    company: "",
    contactName: "",
    email: "",
    phone: "",
    interest: "Kit Sponsorship",
    message: "",
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSuccess(false);
    setError("");
  };

  const handleFansChange = (e) => {
    setFansData({ ...fansData, [e.target.name]: e.target.value });
  };

  const handlePlayersChange = (e) => {
    setPlayersData({ ...playersData, [e.target.name]: e.target.value });
  };

  const handleSponsorsChange = (e) => {
    setSponsorsData({ ...sponsorsData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    let payload = {};
    if (activeTab === "fans") payload = { type: "fans", ...fansData };
    else if (activeTab === "players") payload = { type: "players", ...playersData };
    else if (activeTab === "sponsors") payload = { type: "sponsors", ...sponsorsData };

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        // Clear forms
        setFansData({ name: "", email: "" });
        setPlayersData({ name: "", email: "", age: "", position: "Midfielder", experience: "" });
        setSponsorsData({ company: "", contactName: "", email: "", phone: "", interest: "Kit Sponsorship", message: "" });
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${styles.formWrapper} glass-panel`}>
      {/* Tabs Headers */}
      <div className={styles.tabHeaders} role="tablist" aria-label="Sign-up categories">
        <button
          className={`${styles.tabBtn} ${activeTab === "fans" ? styles.activeTab : ""}`}
          onClick={() => handleTabChange("fans")}
          type="button"
          role="tab"
          id="tab-fans"
          aria-controls="panel-fans"
          aria-selected={activeTab === "fans"}
        >
          <User size={16} aria-hidden="true" />
          <span>FANS</span>
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === "players" ? styles.activeTab : ""}`}
          onClick={() => handleTabChange("players")}
          type="button"
          role="tab"
          id="tab-players"
          aria-controls="panel-players"
          aria-selected={activeTab === "players"}
        >
          <Award size={16} aria-hidden="true" />
          <span>PLAYERS</span>
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === "sponsors" ? styles.activeTab : ""}`}
          onClick={() => handleTabChange("sponsors")}
          type="button"
          role="tab"
          id="tab-sponsors"
          aria-controls="panel-sponsors"
          aria-selected={activeTab === "sponsors"}
        >
          <Building size={16} aria-hidden="true" />
          <span>SPONSORS</span>
        </button>
      </div>

      {/* Forms Body */}
      <div
        className={styles.formBody}
        role="tabpanel"
        id={activeTab === "fans" ? "panel-fans" : activeTab === "players" ? "panel-players" : "panel-sponsors"}
        aria-labelledby={activeTab === "fans" ? "tab-fans" : activeTab === "players" ? "tab-players" : "tab-sponsors"}
      >
        {success ? (
          <div className={styles.successState}>
            <div className={styles.successIcon} aria-hidden="true">✓</div>
            <h4 className={styles.successTitle}>WELCOME TO THE FOREST!</h4>
            <p className={styles.successText}>
              {activeTab === "fans" && "You've successfully subscribed! We will notify you of logo reveals, ticket launches, and merch pre-orders."}
              {activeTab === "players" && "Your player inquiry has been submitted to Head Coach Lou. We will reach out when pre-season tryout dates are announced."}
              {activeTab === "sponsors" && "Thank you for supporting Huntsville soccer. A partnership manager will contact you shortly to discuss collaboration opportunities."}
            </p>
            <button
              onClick={() => setSuccess(false)}
              className={styles.resetBtn}
              type="button"
            >
              Submit Another Form
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            {error && <div className={styles.errorMessage} role="alert">{error}</div>}

            {/* TAB FANS */}
            {activeTab === "fans" && (
              <div className={styles.inputGroupContainer}>
                <p className={styles.tabDescription}>
                  Join the official mailing list. Get early access to season tickets, official merch drops, and local fan club events in Huntsville.
                </p>
                <div className={styles.inputField}>
                  <User className={styles.inputIcon} size={18} aria-hidden="true" />
                  <input
                    type="text"
                    name="name"
                    value={fansData.name}
                    onChange={handleFansChange}
                    placeholder="Your Name"
                    required
                    className={styles.input}
                    disabled={loading}
                    aria-label="Your Name"
                  />
                </div>
                <div className={styles.inputField}>
                  <Mail className={styles.inputIcon} size={18} aria-hidden="true" />
                  <input
                    type="email"
                    name="email"
                    value={fansData.email}
                    onChange={handleFansChange}
                    placeholder="Your Email"
                    required
                    className={styles.input}
                    disabled={loading}
                    aria-label="Your Email Address"
                  />
                </div>
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={loading}
                >
                  {loading ? "Joining..." : "JOIN THE FANS"}
                </button>
              </div>
            )}

            {/* TAB PLAYERS */}
            {activeTab === "players" && (
              <div className={styles.inputGroupContainer}>
                <p className={styles.tabDescription}>
                  Aspiring to play pre-professional soccer in USL2? Pre-register your interest for open tryouts and evaluations with Coach Lou.
                </p>
                <div className={styles.gridFields}>
                  <div className={styles.inputField}>
                    <User className={styles.inputIcon} size={18} aria-hidden="true" />
                    <input
                      type="text"
                      name="name"
                      value={playersData.name}
                      onChange={handlePlayersChange}
                      placeholder="Full Name"
                      required
                      className={styles.input}
                      disabled={loading}
                      aria-label="Full Name"
                    />
                  </div>
                  <div className={styles.inputField}>
                    <Mail className={styles.inputIcon} size={18} aria-hidden="true" />
                    <input
                      type="email"
                      name="email"
                      value={playersData.email}
                      onChange={handlePlayersChange}
                      placeholder="Email Address"
                      required
                      className={styles.input}
                      disabled={loading}
                      aria-label="Email Address"
                    />
                  </div>
                </div>

                <div className={styles.gridFields}>
                  <div className={styles.inputField}>
                    <span className={styles.inputPrefix} aria-hidden="true">Age:</span>
                    <input
                      type="number"
                      name="age"
                      value={playersData.age}
                      onChange={handlePlayersChange}
                      placeholder="e.g. 20"
                      min="15"
                      max="40"
                      required
                      className={`${styles.input} ${styles.inputWithPrefix}`}
                      disabled={loading}
                      aria-label="Age"
                    />
                  </div>
                  <div className={styles.selectField}>
                    <Shield className={styles.inputIcon} size={18} aria-hidden="true" />
                    <select
                      name="position"
                      value={playersData.position}
                      onChange={handlePlayersChange}
                      className={styles.select}
                      disabled={loading}
                      aria-label="Preferred Position"
                    >
                      <option value="Goalkeeper">Goalkeeper</option>
                      <option value="Defender">Defender</option>
                      <option value="Midfielder">Midfielder</option>
                      <option value="Forward">Forward</option>
                    </select>
                  </div>
                </div>

                <div className={styles.inputField}>
                  <Briefcase className={styles.inputIcon} size={18} aria-hidden="true" />
                  <input
                    type="text"
                    name="experience"
                    value={playersData.experience}
                    onChange={handlePlayersChange}
                    placeholder="Previous Club, College, or High School Team"
                    required
                    className={styles.input}
                    disabled={loading}
                    aria-label="Previous Club, College, or High School Team"
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "REGISTER FOR TRYOUTS"}
                </button>
              </div>
            )}

            {/* TAB SPONSORS */}
            {activeTab === "sponsors" && (
              <div className={styles.inputGroupContainer}>
                <p className={styles.tabDescription}>
                  Partner with Huntsville's newest sports franchise. Enhance your local business brand and reach fans across East Texas.
                </p>
                <div className={styles.gridFields}>
                  <div className={styles.inputField}>
                    <Building className={styles.inputIcon} size={18} aria-hidden="true" />
                    <input
                      type="text"
                      name="company"
                      value={sponsorsData.company}
                      onChange={handleSponsorsChange}
                      placeholder="Company Name"
                      required
                      className={styles.input}
                      disabled={loading}
                      aria-label="Company Name"
                    />
                  </div>
                  <div className={styles.inputField}>
                    <User className={styles.inputIcon} size={18} aria-hidden="true" />
                    <input
                      type="text"
                      name="contactName"
                      value={sponsorsData.contactName}
                      onChange={handleSponsorsChange}
                      placeholder="Contact Person"
                      required
                      className={styles.input}
                      disabled={loading}
                      aria-label="Contact Person Name"
                    />
                  </div>
                </div>

                <div className={styles.gridFields}>
                  <div className={styles.inputField}>
                    <Mail className={styles.inputIcon} size={18} aria-hidden="true" />
                    <input
                      type="email"
                      name="email"
                      value={sponsorsData.email}
                      onChange={handleSponsorsChange}
                      placeholder="Email Address"
                      required
                      className={styles.input}
                      disabled={loading}
                      aria-label="Email Address"
                    />
                  </div>
                  <div className={styles.inputField}>
                    <Phone className={styles.inputIcon} size={18} aria-hidden="true" />
                    <input
                      type="tel"
                      name="phone"
                      value={sponsorsData.phone}
                      onChange={handleSponsorsChange}
                      placeholder="Phone Number (Optional)"
                      className={styles.input}
                      disabled={loading}
                      aria-label="Phone Number"
                    />
                  </div>
                </div>

                <div className={styles.selectField}>
                  <Briefcase className={styles.inputIcon} size={18} aria-hidden="true" />
                  <select
                    name="interest"
                    value={sponsorsData.interest}
                    onChange={handleSponsorsChange}
                    className={styles.select}
                    disabled={loading}
                    aria-label="Sponsorship Interest"
                  >
                    <option value="Kit Sponsorship">Main Jersey / Kit Sponsor</option>
                    <option value="Field & Stadium Ads">Field & Stadium Signage</option>
                    <option value="Matchday Partner">Matchday Event Sponsor</option>
                    <option value="Digital Media Content">Digital & Social Media Sponsor</option>
                    <option value="Community & Youth Programs">Community & Youth Initiatives</option>
                    <option value="Other">Other Sponsorship</option>
                  </select>
                </div>

                <div className={`${styles.inputField} ${styles.textareaField}`}>
                  <MessageSquare className={styles.textareaIcon} size={18} aria-hidden="true" />
                  <textarea
                    name="message"
                    value={sponsorsData.message}
                    onChange={handleSponsorsChange}
                    placeholder="Tell us about your brand goals or any specific questions..."
                    rows="3"
                    required
                    className={styles.textarea}
                    disabled={loading}
                    aria-label="Sponsorship goals or questions message"
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "INQUIRE ABOUT SPONSORSHIP"}
                </button>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
