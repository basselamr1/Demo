import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [dropDownShown, setDropDownShown] = useState(false);
  const [hovering, setHovering] = useState(false);
  const toggleDropdown = () => {
    setDropDownShown(!dropDownShown);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`head fixed-top ${scrolling ? "scrolling" : ""}`}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="assets/qe-logo.svg"
              alt="Logo"
              width="286"
              height="70"
              class="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className={`list-unstyled navbar-nav spacing ${
                hovering ? "opened-search" : ""
              }`}
            >
              <li className="nav-item" id="attorney-li">
                <a className="nav-link" aria-current="page" href="#">
                  Attorneys
                </a>
              </li>
              <li className="nav-item dropdown" id="practice-areas">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="practice-areas-link"
                >
                  Practice Areas
                </a>
                <div className="dropdown-menu practice-dropdown practice-and-locations">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12 col-lg-3">
                        <div className="view-all-locs">
                          <a href="#" className="view-practice">
                            View All Practice Areas
                          </a>
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-3">
                        <ul className="practice-list-column dropdown-links">
                          <li>
                            <a href="#">
                              Accounting & Financial Reporting Litigation
                            </a>
                          </li>
                          <li>
                            <a href="#">Antitrust & Competition</a>
                          </li>
                          <li>
                            <a href="#">Appellate Practice</a>
                          </li>
                          <li>
                            <a href="#">Art Litigation</a>
                          </li>
                          <li>
                            <a href="#">Artificial Intelligence</a>
                          </li>
                          <li>
                            <a href="#">Bankruptcy & Restructuring</a>
                          </li>
                          <li>
                            <a href="#">
                              Blockchain and Digital Asset Practice
                            </a>
                          </li>
                          <li>
                            <a href="#">Cannabis Litigation</a>
                          </li>
                          <li>
                            <a href="#">Class Action Litigation</a>
                          </li>
                          <li>
                            <a href="#">Construction Litigation</a>
                          </li>
                          <li>
                            <a href="#">Copyright Litigation</a>
                          </li>
                          <li>
                            <a href="#">Corporate Governance Litigation</a>
                          </li>
                          <li>
                            <a href="#">Crisis Law & Strategy Group</a>
                          </li>
                          <li>
                            <a href="#">Data Privacy & Security</a>
                          </li>
                          <li>
                            <a href="#">Delaware Practice</a>
                          </li>
                          <li>
                            <a href="#">Domestic U.S. Arbitration</a>
                          </li>
                          <li>
                            <a href="#">Education Practice Group</a>
                          </li>
                          <li>
                            <a href="#">Employment Litigation & Counseling</a>
                          </li>
                          <li>
                            <a href="#">Energy Sector Disputes</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4 col-lg-3">
                        <ul className="practice-list-column dropdown-links">
                          <li>
                            <a href="#">Environmental Litigation</a>
                          </li>
                          <li>
                            <a href="#">
                              Environmental, Social and Governance ("ESG")
                              Practice
                            </a>
                          </li>
                          <li>
                            <a href="#">False Claims Act</a>
                          </li>
                          <li>
                            <a href="#">Global Asset Recovery Practice</a>
                          </li>
                          <li>
                            <a href="#">Government & Regulatory Litigation</a>
                          </li>
                          <li>
                            <a href="#">Government Contracts Litigation</a>
                          </li>
                          <li>
                            <a href="#">Health Care Litigation</a>
                          </li>
                          <li>
                            <a href="#">Insurance & Reinsurance Litigation</a>
                          </li>
                          <li>
                            <a href="#">Insurance Recovery</a>
                          </li>
                          <li>
                            <a href="#">International Arbitration</a>
                          </li>
                          <li>
                            <a href="#">International Disputes</a>
                          </li>
                          <li>
                            <a href="#">
                              International Trade Commission Proceedings
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Investigations, Government Enforcement & White
                              Collar Criminal Defense Practice
                            </a>
                          </li>
                          <li>
                            <a href="#">Internet Litigation</a>
                          </li>
                          <li>
                            <a href="#">Investment Fund Litigation</a>
                          </li>
                          <li>
                            <a href="#">Latin America Practice</a>
                          </li>
                          <li>
                            <a href="#">
                              Lender Liability & Other Banking Financial
                              Institution Litigation
                            </a>
                          </li>
                          <li>
                            <a href="#">Life Sciences Litigation</a>
                          </li>
                          <li>
                            <a href="#">Litigation Representing Plaintiffs</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4 col-lg-3">
                        <ul className="practice-list-column dropdown-links">
                          <li>
                            <a href="#">Media & Entertainment Litigation</a>
                          </li>
                          <li>
                            <a href="#">Mergers & Acquisitions Litigation</a>
                          </li>
                          <li>
                            <a href="#">Middle East & North Africa Practice</a>
                          </li>
                          <li>
                            <a href="#">
                              Product Liability & Mass Torts Litigation
                            </a>
                          </li>
                          <li>
                            <a href="#">Patent Litigation</a>
                          </li>
                          <li>
                            <a href="#">Post-Grant Practice</a>
                          </li>
                          <li>
                            <a href="#">Real Estate Litigation</a>
                          </li>
                          <li>
                            <a href="#">Russia Disputes Practice</a>
                          </li>
                          <li>
                            <a href="#">Satellite & Aerospace Litigation</a>
                          </li>
                          <li>
                            <a href="#">Securities Litigation</a>
                          </li>
                          <li>
                            <a href="#">
                              Securities Enforcement Defense Practice
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Sexual Harassment & Employment Discrimination
                            </a>
                          </li>
                          <li>
                            <a href="#">Shareholder Activist Litigation</a>
                          </li>
                          <li>
                            <a href="#">
                              Sovereign Litigation, Arbitration and Workouts
                            </a>
                          </li>
                          <li>
                            <a href="#">Sports Litigation</a>
                          </li>
                          <li>
                            <a href="#">
                              Structured Finance & Derivatives Litigation
                            </a>
                          </li>
                          <li>
                            <a href="#">Tax Disputes</a>
                          </li>
                          <li>
                            <a href="#">Trade Secret Litigation</a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              Trademark, Trade Dress, Unfair Competition/False
                              Advertising, and Publicity Rights Litigation
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  News
                </a>
                <ul className="dropdown-menu small-dropdown">
                  <div className="small-dropdown-body dropdown-links">
                    <li>
                      <a href="#">Awards</a>
                    </li>
                    <li>
                      <a href="#">Firm News</a>
                    </li>
                    <li>
                      <a href="#">Events</a>
                    </li>
                    <li>
                      <a href="#">Film Memoranda</a>
                    </li>
                    <li>
                      <a href="#">Business Litigation Reports</a>
                    </li>
                  </div>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  The Firm
                </a>
                <ul className="dropdown-menu small-dropdown dropdown-links">
                  <div className="small-dropdown-body">
                    <li>
                      <a href="#">About Quinn Emanuel</a>
                    </li>
                    <li>
                      <a href="#">Our Notable Victories</a>
                    </li>
                    <li>
                      <a href="#">Videos</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </div>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Careers
                </a>
                <div className="dropdown-menu" id="careers-dropdown">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 p-lg-0 ">
                        <h4>OUR CULTURE</h4>
                        <ul className="culture-list dropdown-links">
                          <li>
                            <a href="#">Why Work Here</a>
                          </li>
                          <li>
                            <a href="#">What Distinguishes Our Firm</a>
                          </li>
                          <li>
                            <a href="#">Work From Anywhere</a>
                          </li>
                          <li>
                            <a href="#">Our Philosophy</a>
                          </li>
                          <li>
                            <a href="#">Charitable Giving</a>
                          </li>
                          <li>
                            <a href="#">Artists-in-Residence Program</a>
                          </li>
                        </ul>
                        <h4>SUMMER PROGRAM</h4>
                        <ul className="culture-list dropdown-links">
                          <li>
                            <a href="#">Summer Program in a Nutshell</a>
                          </li>
                          <li>
                            <a href="#">Summer Associate Testimonials</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 p-lg-0">
                        <h4>APPLICATION PROCESS</h4>
                        <ul className="culture-list dropdown-links">
                          <li>
                            <a href="#">Recruiting Events & Schedule</a>
                          </li>
                          <li>
                            <a href="#">FAQ</a>
                          </li>
                          <li>
                            <a href="#">Recruiting Contacts</a>
                          </li>
                        </ul>
                        <h4>CAREERS</h4>
                        <ul className="culture-list dropdown-links">
                          <li>
                            <a href="#">US Compensation & Benefits</a>
                          </li>
                          <li>
                            <a href="#">International Career Opportunities</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown" id="practice-areas">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="practice-areas-link"
                >
                  Locations
                </a>
                <div
                  className="dropdown-menu practice-and-locations"
                  id="locations"
                >
                  <div className="container">
                    <div className="locs-body">
                      <div className="all-locs-side ">
                        <div className="view-all-locs">
                          <a href="#" className="view-practice">
                            View all Locations
                          </a>
                        </div>
                      </div>
                      <div className="locations">
                        <div className="row">
                          <h4>LOCATIONS</h4>
                          <div className="col">
                            <ul className="locations-grid dropdown-links practice-list-column">
                              <li>
                                <a href="#">Abu Dhabi</a>
                              </li>
                              <li>
                                <a href="#">Atlanta</a>
                              </li>
                              <li>
                                <a href="#">Austin</a>
                              </li>
                              <li>
                                <a href="#">Beijing</a>
                              </li>
                              <li>
                                <a href="#">Berlin</a>
                              </li>
                              <li>
                                <a href="#">Boston</a>
                              </li>
                              <li>
                                <a href="#">Brussels</a>
                              </li>
                              <li>
                                <a href="#">Chicago</a>
                              </li>
                              <li>
                                <a href="#">Dallas</a>
                              </li>
                              <li>
                                <a href="#">Doha</a>
                              </li>
                              <li>
                                <a href="#">Hamburg</a>
                              </li>
                              <li>
                                <a href="#">Hong Kong</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col">
                            <ul className="locations-grid dropdown-links practice-list-column">
                              <li>
                                <a href="#">Houston</a>
                              </li>
                              <li>
                                <a href="#">London</a>
                              </li>
                              <li>
                                <a href="#">Los Angeles</a>
                              </li>
                              <li>
                                <a href="#">Mannheim</a>
                              </li>
                              <li>
                                <a href="#">Miami</a>
                              </li>
                              <li>
                                <a href="#">Munich</a>
                              </li>
                              <li>
                                <a href="#">Neuily-La Defense</a>
                              </li>
                              <li>
                                <a href="#">New York</a>
                              </li>
                              <li>
                                <a href="#">Paris</a>
                              </li>
                              <li>
                                <a href="#">Perth</a>
                              </li>
                              <li>
                                <a href="#">Riyadh</a>
                              </li>
                              <li>
                                <a href="#">Salt Lake City</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col">
                            <ul className="locations-grid dropdown-links practice-list-column">
                              <li>
                                <a href="#">San Francisco</a>
                              </li>
                              <li>
                                <a href="#">Seattle</a>
                              </li>
                              <li>
                                <a href="#">Shanghai</a>
                              </li>
                              <li>
                                <a href="#">Silicon Valley</a>
                              </li>
                              <li>
                                <a href="#">Stuttgart</a>
                              </li>
                              <li>
                                <a href="#">Sydney</a>
                              </li>
                              <li>
                                <a href="#">Tokyo</a>
                              </li>
                              <li>
                                <a href="#">Washington, D.C.</a>
                              </li>
                              <li>
                                <a href="#">Wilmingtion</a>
                              </li>
                              <li>
                                <a href="#">Zurich</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="search-bar">
              <a className="search-btn"></a>
              <form role="search">
                <input
                  className="custom-bar"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
            <div className="languages-dropdown">
              <a
                className={`dropdown-toggle ${dropDownShown ? "rotated" : ""}`}
                data-bs-toggle="dropdown"
                aria-expanded={dropDownShown}
                onClick={toggleDropdown}
              >
                ENG
              </a>
              <div
                className={
                  dropDownShown ? "dropdown-menu dropped" : "dropdown-menu"
                }
              >
                <a href="#">中文</a>
                <a href="#">한국어</a>
                <a href="#">日本語</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
