import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../config";

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);

  // Fetch all contact submissions
  const fetchContacts = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_BASE_URL}/contacts`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Failed to fetch contact submissions");
      const data = await res.json();
      if (Array.isArray(data)) {
        setContacts(data);
      } else {
        setContacts([]);
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Delete contact submission
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact submission?")) return;
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_BASE_URL}/contacts/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Delete failed");
      // refresh list
      fetchContacts();
    } catch (err) {
      alert("Error deleting contact submission: " + err.message);
    }
  };

  // Filter contacts by search term
  const filteredContacts = contacts.filter((contact) => {
    const term = searchTerm.toLowerCase();
    return (
      (contact.name && contact.name.toLowerCase().includes(term)) ||
      (contact.email && contact.email.toLowerCase().includes(term)) ||
      (contact.subject && contact.subject.toLowerCase().includes(term)) ||
      (contact.message && contact.message.toLowerCase().includes(term))
    );
  });

  return (
    <div className="container py-5" style={{ minHeight: "80vh" }}>
      {/* Admin Navigation */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 pb-3 border-bottom gap-3">
        <h2 className="m-0 fw-bold text-primary">Adyalam Control Center</h2>
        <div className="d-flex align-items-center gap-3">
          <div className="nav nav-pills">
            <Link to="/admin/blogs" className="nav-link">Manage Blogs</Link>
            <Link to="/admin/contacts" className="nav-link active">Contact Submissions</Link>
          </div>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/admin/login";
            }}
            className="btn btn-outline-danger"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4">
        <h4 className="m-0">Contact Submissions ({filteredContacts.length})</h4>
        <div style={{ maxWidth: "300px" }} className="w-100">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name, email, subject..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {loading && <div className="text-center py-5">Loading submissions...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && !error && (
        <div className="card shadow-sm border-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th scope="col" className="ps-3">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Plans Chosen</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Date</th>
                  <th scope="col" className="text-end pe-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.map((contact) => (
                  <tr key={contact.id}>
                    <td className="ps-3 fw-medium">{contact.name}</td>
                    <td>
                      <a href={`mailto:${contact.email}`} className="text-decoration-none">{contact.email}</a>
                    </td>
                    <td>
                      {contact.phone ? (
                        <a href={`tel:${contact.phone}`} className="text-decoration-none text-muted">{contact.phone}</a>
                      ) : (
                        <span className="text-muted">-</span>
                      )}
                    </td>
                    <td>
                      <div className="d-flex flex-wrap gap-1">
                        {contact.dmPlan && (
                          <span className="badge bg-info text-dark" style={{ fontSize: "0.75rem" }}>
                            DM: {contact.dmPlan}
                          </span>
                        )}
                        {contact.websitePlan && (
                          <span className="badge bg-success text-white" style={{ fontSize: "0.75rem" }}>
                            Web: {contact.websitePlan}
                          </span>
                        )}
                        {!contact.dmPlan && !contact.websitePlan && (
                          <span className="text-muted" style={{ fontSize: "0.85rem" }}>None</span>
                        )}
                      </div>
                    </td>
                    <td>{contact.subject || <span className="text-muted">-</span>}</td>
                    <td className="text-muted" style={{ fontSize: "0.9rem" }}>
                      {new Date(contact.created_at).toLocaleString()}
                    </td>
                    <td className="text-end pe-3">
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => setSelectedContact(contact)}
                      >
                        View Details
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(contact.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredContacts.length === 0 && (
                  <tr>
                    <td colSpan="7" className="text-center py-5 text-muted">
                      No contact submissions found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Details Modal */}
      {selectedContact && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0 shadow">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title fw-bold">Submission Details</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setSelectedContact(null)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-4">
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label className="text-muted small d-block">From</label>
                    <span className="fw-semibold fs-5">{selectedContact.name}</span>
                  </div>
                  <div className="col-md-6">
                    <label className="text-muted small d-block">Date Received</label>
                    <span>{new Date(selectedContact.created_at).toLocaleString()}</span>
                  </div>
                  <div className="col-md-6">
                    <label className="text-muted small d-block">Email Address</label>
                    <a href={`mailto:${selectedContact.email}`} className="text-decoration-none">
                      {selectedContact.email}
                    </a>
                  </div>
                  <div className="col-md-6">
                    <label className="text-muted small d-block">Phone Number</label>
                    {selectedContact.phone ? (
                      <a href={`tel:${selectedContact.phone}`} className="text-decoration-none">
                        {selectedContact.phone}
                      </a>
                    ) : (
                      <span className="text-muted">Not provided</span>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="text-muted small d-block mb-1">Plans & Services Requested</label>
                  <div className="d-flex flex-wrap gap-2">
                    {selectedContact.dmPlan ? (
                      <div className="border rounded p-2 bg-light">
                        <span className="d-block text-muted small fw-bold">DIGITAL MARKETING</span>
                        <span className="text-info-emphasis">{selectedContact.dmPlan}</span>
                      </div>
                    ) : null}
                    {selectedContact.websitePlan ? (
                      <div className="border rounded p-2 bg-light">
                        <span className="d-block text-muted small fw-bold">WEBSITE BUILDING</span>
                        <span className="text-success-emphasis">{selectedContact.websitePlan}</span>
                      </div>
                    ) : null}
                    {!selectedContact.dmPlan && !selectedContact.websitePlan && (
                      <span className="text-muted">No plans selected (General Inquiry)</span>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="text-muted small d-block">Subject</label>
                  <span className="fw-semibold">{selectedContact.subject || "No Subject"}</span>
                </div>

                <div className="mb-3">
                  <label className="text-muted small d-block mb-1">Message Body</label>
                  <div
                    className="p-3 border rounded bg-light"
                    style={{ whiteSpace: "pre-wrap", maxHeight: "300px", overflowY: "auto" }}
                  >
                    {selectedContact.message}
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setSelectedContact(null)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(selectedContact.id);
                    setSelectedContact(null);
                  }}
                >
                  Delete Submission
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminContacts;
