document.write(`
<header class="site-header">
  <div class="nav-container">
    <a href="index.html" class="logo">
      <img 
        src="assets/Images/tp_logo.svg" 
        alt=""
        class="logo-img"
        onerror="this.hidden=true; this.nextElementSibling.hidden=false;"
      >
      <span class="logo-text" hidden>TRUE Pulse</span>
    </a>

    <button class="nav-toggle" aria-label="Toggle navigation">
      <span></span><span></span><span></span>
    </button>

    <nav class="main-nav">
      <ul class="nav-menu">

        <li class="has-dropdown">
          <button class="dropdown-toggle">Services</button>
          <ul class="dropdown">
            <li><a href="call_tracking.html">Call Tracking</a></li>
            <li><a href="form_tracking.html">Form Tracking</a></li>
            <li><a href="lead_management.html">Lead Management</a></li>
          </ul>
        </li>

        <li class="has-dropdown">
          <button class="dropdown-toggle">Use Cases</button>
          <ul class="dropdown">
            <li><a href="auto_dealers.html">Automotive</a></li>
            <li><a href="media_agencies.html">Media Agencies</a></li>
            <li><a href="insurance.html">Insurance</a></li>
            <li><a href="real_estate.html">Real Estate</a></li>
            <li><a href="health.html">Healthcare & Wellness</a></li>
            <li><a href="travel.html">Travel & Hospitality</a></li>
            <li><a href="education.html">Education</a></li>
            <li><a href="home_services.html">Home Services</a></li>
            <li><a href="other_services.html">Other B2B Services</a></li>
          </ul>
        </li>

        <li class="has-dropdown">
          <button class="dropdown-toggle">Integrations</button>
          <ul class="dropdown">
            <li><a href="salesforce.html">Salesforce</a></li>
            <li><a href="google_analytics.html">Google Analytics</a></li>
            <li><a href="google_ads.html">Google Ads</a></li>
            <li><a href="zapier.html">Zapier</a></li>
            <li><a href="api.html">API</a></li>
          </ul>
        </li>

        <li><a href="pricing.html">Pricing</a></li>

        <li class="has-dropdown">
          <button class="dropdown-toggle">Our Company</button>
          <ul class="dropdown">
            <li><a href="about.html">About Us</a></li>
            <li><a href="careers.html">Careers</a></li>
            <li><a href="partnerships.html">Partner With Us</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </li>

      </ul>
    </nav>

    <div class="nav-actions">
      <a href="tel:+917204464475" class="btn btn-login">+91 72044 64475</a>
      <a href="demo.html" class="btn btn-demo">Get a Demo</a>
    </div>
  </div>
</header>
`);
