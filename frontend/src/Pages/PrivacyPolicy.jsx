import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="section-padding terms-padding pb-80">
      <h1 className="mt-10">Privacy Policy</h1>

      <p className="mt-20">
        At Adyalam, we respect your privacy and are committed to protecting your
        personal information.
      </p>
      <div className="mt-20">
        <div className="mt-10">
          <h3>Information We Collect</h3>
          <ul>
            <li>Name and contact details (email, phone number)</li>
            <li>Business information submitted through forms</li>
            <li>Website usage data (via cookies and analytics tools)</li>
          </ul>
        </div>
        <div className="mt-10">
          <h3>How We Use Your Information</h3>
          <p>We use your information to:</p>
          <ul>
            <li>Respond to enquiries and provide requested services</li>
            <li>Share proposals, updates, or relevant communication</li>
            <li>Improve website performance and user experience</li>
            <li>Run analytics to understand visitor behavior</li>
            <li>We do not sell or rent your personal data to third parties.</li>
          </ul>
        </div>
        <div className="mt-10">
          <h3>Cookies & Tracking Technologies</h3>
          <p>Our website may use cookies to:</p>
          <ul>
            <li>Analyze traffic and usage patterns</li>
            <li>Improve functionality and performance</li>
            <li>Provide a better browsing experience</li>
            <li>
              You may disable cookies in your browser settings if you prefer.
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <h3>Data Protection</h3>
          <p>
            We implement reasonable security measures to protect your
            information from unauthorized access, misuse, or disclosure.
          </p>
        </div>
        <div className="mt-10">
          <h3>Third-Party Services</h3>
          <p>
            We may use trusted third-party tools (such as analytics or
            advertising platforms) to operate our services. These providers
            process data according to their own privacy policies.
          </p>
        </div>
        <div className="mt-10">
          <h3>6. Your Rights</h3>
          <p>You may request to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data (where applicable)</li>
            <li>
              To do so, contact us at{" "}
              <a href="mailto:hello.adyalam@gmail.com">
                hello.adyalam@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <h3>Data Retention</h3>
          <p>
            We retain submitted information only as long as necessary to provide
            services or respond to enquiries unless legally required otherwise.
          </p>
        </div>
        <div className="mt-10">
          <h3>Updates to This Policy</h3>
          <p>
            We may update this Privacy Policy periodically. Changes will be
            posted on this page with the updated date.
          </p>
        </div>
        <div className="mt-10">
          <h3>Contact Information</h3>
          <p>
            If you have questions about this Privacy Policy, please contact:
          </p>
          <p>Adyalam</p>
          <span>email: </span>
          <a href="mailto:hello.adyalam@gmail.com">hello.adyalam@gmail.com</a>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
