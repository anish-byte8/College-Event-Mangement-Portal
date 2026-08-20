/* ===========================================================
   College Event Management System
   Built with basic React concepts only:
   - Function components
   - Class components
   - Props
   - Basic event handling
   No useState, useEffect, hooks, router, or DOM manipulation.
   =========================================================== */

/* ---------------- Sample Event Data ---------------- */
// Stored as plain objects (not arrays) to keep things simple.
// Each event has its own id used in the URL hash.

const events = {
  techsprint: {
    id: "techsprint",
    name: "TechSprint 2026",
    category: "Technical",
    categoryClass: "technical",
    date: "20 September 2026",
    time: "9:00 AM - 5:00 PM",
    venue: "Computer Lab 2, Block A",
    organizer: "Department of Computer Science",
    description:
      "A 24-hour hackathon where students build innovative software solutions to real-world problems. Form a team of up to four and bring your ideas to life.",
    eligibility: "Open to all 2nd, 3rd and 4th year students",
    deadline: "15 September 2026",
    seats: 120,
    fee: "Free",
  },
  codequest: {
    id: "codequest",
    name: "CodeQuest",
    category: "Competition",
    categoryClass: "competition",
    date: "5 October 2026",
    time: "10:00 AM - 1:00 PM",
    venue: "Seminar Hall 1, Main Building",
    organizer: "Coding Club",
    description:
      "A competitive programming contest featuring algorithmic challenges of varying difficulty. Test your logic, speed and problem-solving skills.",
    eligibility: "All students with basic programming knowledge",
    deadline: "1 October 2026",
    seats: 80,
    fee: "Free",
  },
  campusbeats: {
    id: "campusbeats",
    name: "Campus Beats",
    category: "Cultural",
    categoryClass: "cultural",
    date: "12 October 2026",
    time: "6:00 PM - 9:30 PM",
    venue: "Open Air Auditorium",
    organizer: "Cultural Committee",
    description:
      "The annual cultural night featuring music, dance and drama performances by students. A celebration of art and expression on campus.",
    eligibility: "Open to all students. Audition required for performers.",
    deadline: "8 October 2026",
    seats: 500,
    fee: "Free",
  },
  football: {
    id: "football",
    name: "Inter-Department Football Tournament",
    category: "Sports",
    categoryClass: "sports",
    date: "18 October 2026",
    time: "4:00 PM - 7:00 PM",
    venue: "College Football Ground",
    organizer: "Sports Board",
    description:
      "Cheer for your department as teams battle it out on the football field. A month-long knockout tournament with the final held on 18 October.",
    eligibility: "Each department may register one team of 11 players",
    deadline: "10 October 2026",
    seats: 100,
    fee: "Free",
  },
  aiworkshop: {
    id: "aiworkshop",
    name: "Introduction to AI Workshop",
    category: "Workshop",
    categoryClass: "workshop",
    date: "25 October 2026",
    time: "2:00 PM - 5:00 PM",
    venue: "AI Lab, Block B",
    organizer: "Department of Computer Science",
    description:
      "A hands-on workshop covering the basics of Artificial Intelligence and Machine Learning. Includes a guided mini-project using Python.",
    eligibility: "2nd and 3rd year students. Basic Python required.",
    deadline: "20 October 2026",
    seats: 60,
    fee: "Free",
  },
  careerseminar: {
    id: "careerseminar",
    name: "Career Guidance Seminar",
    category: "Seminar",
    categoryClass: "seminar",
    date: "2 November 2026",
    time: "11:00 AM - 12:30 PM",
    venue: "Seminar Hall 2, Main Building",
    organizer: "Training and Placement Cell",
    description:
      "Industry experts share insights on resume building, interview preparation and career planning. A must-attend for final year students.",
    eligibility: "Open to all students, primarily 3rd and 4th year",
    deadline: "30 October 2026",
    seats: 200,
    fee: "Free",
  },
};

/* ---------------- Navbar Component ---------------- */
function Navbar(props) {
  const currentPage = props.currentPage;

  function handleClick(e, page) {
    e.preventDefault();
    props.onNavigate(page);
  }

  return (
    <nav className="navbar navbar-expand site-navbar">
      <div className="container">
        <a
          className="navbar-brand"
          href="#home"
          onClick={(e) => handleClick(e, "home")}
        >
          College Events Portal
        </a>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a
              className={"nav-link" + (currentPage === "home" ? " active" : "")}
              href="#home"
              onClick={(e) => handleClick(e, "home")}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className={"nav-link" + (currentPage === "events" ? " active" : "")}
              href="#events"
              onClick={(e) => handleClick(e, "events")}
            >
              Events
            </a>
          </li>
          <li className="nav-item">
            <a
              className={"nav-link" + (currentPage === "myregistrations" ? " active" : "")}
              href="#myregistrations"
              onClick={(e) => handleClick(e, "myregistrations")}
            >
              My Registrations
            </a>
          </li>
          <li className="nav-item">
            <a
              className={"nav-link" + (currentPage === "about" ? " active" : "")}
              href="#about"
              onClick={(e) => handleClick(e, "about")}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className={"nav-link" + (currentPage === "contact" ? " active" : "")}
              href="#contact"
              onClick={(e) => handleClick(e, "contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

/* ---------------- Footer Component ---------------- */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p className="mb-1">
          College Event Management System &middot; Academic Project
        </p>
        <p className="mb-0">
          Built with React, Bootstrap and plain CSS.
        </p>
      </div>
    </footer>
  );
}

/* ---------------- Event Card Component ---------------- */
function EventCard(props) {
  const event = props.event;
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="event-card">
        <span className={"event-category " + event.categoryClass}>
          {event.category}
        </span>
        <h4>{event.name}</h4>
        <p className="event-meta">
          <strong>Date:</strong> {event.date}
        </p>
        <p className="event-meta">
          <strong>Venue:</strong> {event.venue}
        </p>
        <p className="event-meta">
          <strong>Register by:</strong> {event.deadline}
        </p>
        <p className="event-description">{event.description}</p>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => props.onViewDetails(event.id)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

/* ---------------- Home Page ---------------- */
function HomePage(props) {
  // Show a few events on the home page
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="container text-center">
          <h1>Discover What's Happening on Campus</h1>
          <p>
            Find competitions, workshops, seminars, cultural events and other
            activities happening in your college. One place for every event.
          </p>
          <button
            className="btn btn-accent btn-lg"
            onClick={() => props.onNavigate("events")}
          >
            Explore Events
          </button>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container py-5">
        <h2 className="section-title">Upcoming Events</h2>
        <p className="section-subtitle">
          A glimpse of what's coming up. View all to see more.
        </p>
        <div className="row">
          <EventCard event={events.techsprint} onViewDetails={props.onViewDetails} />
          <EventCard event={events.codequest} onViewDetails={props.onViewDetails} />
          <EventCard event={events.campusbeats} onViewDetails={props.onViewDetails} />
          <EventCard event={events.aiworkshop} onViewDetails={props.onViewDetails} />
          <EventCard event={events.football} onViewDetails={props.onViewDetails} />
          <EventCard event={events.careerseminar} onViewDetails={props.onViewDetails} />
        </div>
      </section>

      {/* Categories */}
      <section className="container py-5">
        <h2 className="section-title">Event Categories</h2>
        <p className="section-subtitle">
          Whatever your interest, there's something for you.
        </p>
        <div className="row">
          <div className="col-md-4 col-lg-2 mb-3">
            <div className="category-box">
              <div className="category-icon">&#9737;</div>
              <h5>Technical</h5>
              <p>Hackathons, coding contests, tech talks</p>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 mb-3">
            <div className="category-box">
              <div className="category-icon">&#9835;</div>
              <h5>Cultural</h5>
              <p>Music, dance, drama and arts</p>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 mb-3">
            <div className="category-box">
              <div className="category-icon">&#9917;</div>
              <h5>Sports</h5>
              <p>Tournaments and fitness events</p>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 mb-3">
            <div className="category-box">
              <div className="category-icon">&#128295;</div>
              <h5>Workshop</h5>
              <p>Hands-on learning sessions</p>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 mb-3">
            <div className="category-box">
              <div className="category-icon">&#127891;</div>
              <h5>Seminar</h5>
              <p>Talks by industry experts</p>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 mb-3">
            <div className="category-box">
              <div className="category-icon">&#127942;</div>
              <h5>Competition</h5>
              <p>Quizzes, contests and more</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container py-5">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Three simple steps.</p>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="step-box">
              <div className="step-number">1</div>
              <h5>Browse Events</h5>
              <p>Look through all upcoming college events.</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="step-box">
              <div className="step-number">2</div>
              <h5>View Details</h5>
              <p>Read date, venue, eligibility and more.</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="step-box">
              <div className="step-number">3</div>
              <h5>Register</h5>
              <p>Fill the form and you're all set.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------------- Events Page ---------------- */
function EventsPage(props) {
  const filter = props.filter;

  function handleFilterChange(category) {
    props.onFilterChange(category);
  }

  // Helper to decide whether to show a particular event based on current filter
  function shouldShow(event) {
    if (filter !== "All" && event.category !== filter) {
      return false;
    }
    return true;
  }

  // Categories rendered one by one (no array mapping)
  return (
    <div>
      <section className="container py-5">
        <h2 className="section-title">All Events</h2>
        <p className="section-subtitle">
          Browse every upcoming event by category.
        </p>

        {/* Categories - written out one by one */}
        <div className="mb-4">
          <span
            className={"category-pill" + (filter === "All" ? " active" : "")}
            onClick={() => handleFilterChange("All")}
          >
            All
          </span>
          <span
            className={"category-pill" + (filter === "Technical" ? " active" : "")}
            onClick={() => handleFilterChange("Technical")}
          >
            Technical
          </span>
          <span
            className={"category-pill" + (filter === "Cultural" ? " active" : "")}
            onClick={() => handleFilterChange("Cultural")}
          >
            Cultural
          </span>
          <span
            className={"category-pill" + (filter === "Sports" ? " active" : "")}
            onClick={() => handleFilterChange("Sports")}
          >
            Sports
          </span>
          <span
            className={"category-pill" + (filter === "Workshop" ? " active" : "")}
            onClick={() => handleFilterChange("Workshop")}
          >
            Workshop
          </span>
          <span
            className={"category-pill" + (filter === "Seminar" ? " active" : "")}
            onClick={() => handleFilterChange("Seminar")}
          >
            Seminar
          </span>
          <span
            className={"category-pill" + (filter === "Competition" ? " active" : "")}
            onClick={() => handleFilterChange("Competition")}
          >
            Competition
          </span>
        </div>

        {/* Event list - cards shown one by one (no array mapping) */}
        <div className="row">
          {shouldShow(events.techsprint) && (
            <EventCard event={events.techsprint} onViewDetails={props.onViewDetails} />
          )}
          {shouldShow(events.codequest) && (
            <EventCard event={events.codequest} onViewDetails={props.onViewDetails} />
          )}
          {shouldShow(events.campusbeats) && (
            <EventCard event={events.campusbeats} onViewDetails={props.onViewDetails} />
          )}
          {shouldShow(events.football) && (
            <EventCard event={events.football} onViewDetails={props.onViewDetails} />
          )}
          {shouldShow(events.aiworkshop) && (
            <EventCard event={events.aiworkshop} onViewDetails={props.onViewDetails} />
          )}
          {shouldShow(events.careerseminar) && (
            <EventCard event={events.careerseminar} onViewDetails={props.onViewDetails} />
          )}
        </div>

        {/* Empty state if nothing matches */}
        {!shouldShow(events.techsprint) &&
          !shouldShow(events.codequest) &&
          !shouldShow(events.campusbeats) &&
          !shouldShow(events.football) &&
          !shouldShow(events.aiworkshop) &&
          !shouldShow(events.careerseminar) && (
            <div className="alert alert-light border">
              No events found in this category.
            </div>
          )}
      </section>
    </div>
  );
}

/* ---------------- Event Details Page ---------------- */
function EventDetailsPage(props) {
  const event = events[props.eventId];

  function handleRegister() {
    props.onRegister(props.eventId);
  }

  if (!event) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning">
          Event not found.{" "}
          <a
            href="#events"
            onClick={(e) => {
              e.preventDefault();
              props.onNavigate("events");
            }}
          >
            Back to events
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="detail-header">
        <div className="container">
          <span className={"event-category " + event.categoryClass}>
            {event.category}
          </span>
          <h1>{event.name}</h1>
          <p className="text-muted mb-0">Organized by {event.organizer}</p>
        </div>
      </div>

      <section className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="info-block">
              <div className="label">Description</div>
              <p className="value" style={{ fontWeight: "normal", fontSize: "1rem", lineHeight: "1.6" }}>
                {event.description}
              </p>
            </div>

            <div className="info-block">
              <div className="label">Eligibility</div>
              <p className="value" style={{ fontWeight: "normal", fontSize: "1rem" }}>
                {event.eligibility}
              </p>
            </div>

            <div className="info-block">
              <div className="label">Registration Information</div>
              <p className="value" style={{ fontWeight: "normal", fontSize: "1rem" }}>
                Registration is free. Please carry your college ID on the day
                of the event.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="info-block">
              <div className="label">Date</div>
              <div className="value">{event.date}</div>
            </div>
            <div className="info-block">
              <div className="label">Time</div>
              <div className="value">{event.time}</div>
            </div>
            <div className="info-block">
              <div className="label">Venue</div>
              <div className="value">{event.venue}</div>
            </div>
            <div className="info-block">
              <div className="label">Registration Deadline</div>
              <div className="value">{event.deadline}</div>
            </div>
            <div className="info-block">
              <div className="label">Available Seats</div>
              <div className="value">{event.seats}</div>
            </div>

            <button
              className="btn btn-primary btn-lg w-100"
              onClick={handleRegister}
            >
              Register Now
            </button>
            <button
              className="btn btn-outline-primary w-100 mt-2"
              onClick={() => props.onNavigate("events")}
            >
              Back to Events
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------------- Registration Form Page (Class Component) ---------------- */
class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    // We avoid useState; instead we read values from refs (form fields) on submit.
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value.trim();
    const studentId = form.studentId.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const department = form.department.value;
    const year = form.year.value;
    const eventChoice = form.eventChoice.value;

    if (
      fullName === "" ||
      studentId === "" ||
      email === "" ||
      phone === "" ||
      department === "" ||
      year === "" ||
      eventChoice === ""
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      alert("Please enter a valid email address.");
      return;
    }

    // Save registration details to localStorage so My Registrations can show it
    const registration = {
      eventId: eventChoice,
      eventName: events[eventChoice].name,
      date: events[eventChoice].date,
      venue: events[eventChoice].venue,
      fullName: fullName,
      studentId: studentId,
      email: email,
      phone: phone,
      department: department,
      year: year,
    };

    let existing = [];
    const raw = localStorage.getItem("registrations");
    if (raw) {
      existing = JSON.parse(raw);
    }
    existing.push(registration);
    localStorage.setItem("registrations", JSON.stringify(existing));

    this.props.onRegistrationComplete(eventChoice, fullName);
  }

  render() {
    const eventId = this.props.eventId;
    const event = eventId ? events[eventId] : null;

    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="form-card">
              <h2 className="section-title">Event Registration</h2>
              <p className="section-subtitle">
                Fill in your details to register. All fields are required.
              </p>

              {event && (
                <div className="alert alert-light border mb-4">
                  Registering for: <strong>{event.name}</strong> ({event.date}, {event.venue})
                </div>
              )}

              <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Student ID</label>
                    <input
                      type="text"
                      className="form-control"
                      name="studentId"
                      placeholder="e.g. CS2024/001"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="you@college.edu"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      placeholder="10-digit mobile number"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Department</label>
                    <select className="form-select" name="department">
                      <option value="">-- Select Department --</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Information Technology">Information Technology</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Mechanical">Mechanical</option>
                      <option value="Civil">Civil</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Year</label>
                    <select className="form-select" name="year">
                      <option value="">-- Select Year --</option>
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Event</label>
                    <select className="form-select" name="eventChoice">
                      <option value="">-- Select Event --</option>
                      <option value="techsprint">TechSprint 2026</option>
                      <option value="codequest">CodeQuest</option>
                      <option value="campusbeats">Campus Beats</option>
                      <option value="football">Inter-Department Football Tournament</option>
                      <option value="aiworkshop">Introduction to AI Workshop</option>
                      <option value="careerseminar">Career Guidance Seminar</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-lg mt-2">
                  Submit Registration
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg mt-2 ms-2"
                  onClick={() => this.props.onNavigate("events")}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* ---------------- Registration Success Page ---------------- */
function RegistrationSuccessPage(props) {
  const event = events[props.eventId];

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="success-card">
            <div className="success-icon">&#10003;</div>
            <h2>Registration Successful!</h2>
            <p className="mt-3">
              Thank you, <strong>{props.fullName}</strong>. You have
              successfully registered for{" "}
              <strong>{event ? event.name : "the event"}</strong>.
            </p>
            <p className="text-muted">
              You can view this under "My Registrations".
            </p>
            <div className="mt-4">
              <button
                className="btn btn-primary me-2"
                onClick={() => props.onNavigate("myregistrations")}
              >
                View My Registrations
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={() => props.onNavigate("events")}
              >
                Browse More Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Registration Row Component ---------------- */
function RegistrationRow(props) {
  const reg = props.reg;
  return (
    <div className="registration-row">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h5>{reg.eventName}</h5>
          <p className="event-meta mb-1">
            <strong>Date:</strong> {reg.date}
          </p>
          <p className="event-meta mb-1">
            <strong>Venue:</strong> {reg.venue}
          </p>
          <p className="event-meta mb-1">
            <strong>Registered as:</strong> {reg.fullName} ({reg.studentId}, {reg.department}, {reg.year})
          </p>
        </div>
        <span className="badge-registered">Registered</span>
      </div>
    </div>
  );
}

/* ---------------- My Registrations Page ---------------- */
function MyRegistrationsPage(props) {
  // Read registrations from localStorage (no useState)
  let registrations = [];
  const raw = localStorage.getItem("registrations");
  if (raw) {
    registrations = JSON.parse(raw);
  }

  return (
    <div className="container py-5">
      <h2 className="section-title">My Registrations</h2>
      <p className="section-subtitle">
        Events you have signed up for.
      </p>

      {registrations.length === 0 ? (
        <div className="alert alert-light border">
          You have not registered for any events yet.{" "}
          <a
            href="#events"
            onClick={(e) => {
              e.preventDefault();
              props.onNavigate("events");
            }}
          >
            Browse events
          </a>{" "}
          to get started.
        </div>
      ) : (
        <div>
          {registrations[0] && <RegistrationRow reg={registrations[0]} />}
          {registrations[1] && <RegistrationRow reg={registrations[1]} />}
          {registrations[2] && <RegistrationRow reg={registrations[2]} />}
          {registrations[3] && <RegistrationRow reg={registrations[3]} />}
          {registrations[4] && <RegistrationRow reg={registrations[4]} />}
          {registrations[5] && <RegistrationRow reg={registrations[5]} />}
          {registrations[6] && <RegistrationRow reg={registrations[6]} />}
          {registrations[7] && <RegistrationRow reg={registrations[7]} />}
          {registrations[8] && <RegistrationRow reg={registrations[8]} />}
          {registrations[9] && <RegistrationRow reg={registrations[9]} />}
        </div>
      )}
    </div>
  );
}

/* ---------------- About Page ---------------- */
function AboutPage() {
  return (
    <div className="container py-5">
      <h2 className="section-title">About the System</h2>
      <p className="section-subtitle">A simple portal for college events.</p>

      <div className="about-section">
        <h3>What it does</h3>
        <p>
          The College Event Management System is a central place where students
          can discover, view and register for events happening in their college.
          From technical hackathons to cultural nights and sports tournaments,
          everything is listed in one place.
        </p>
      </div>

      <div className="about-section">
        <h3>Why it was created</h3>
        <p>
          Notices for college events are usually spread across notice boards,
          WhatsApp groups and word of mouth. Students often miss events they
          would have loved to attend. This system solves that by putting all
          events on a single, easy to browse website.
        </p>
      </div>

      <div className="about-section">
        <h3>Problems it solves</h3>
        <p>
          Scattered information about events, missed deadlines, confusion about
          who can participate, and the hassle of filling separate forms for
          each event. The system provides clear event information, deadlines
          and a single registration flow.
        </p>
      </div>

      <div className="about-section">
        <h3>Benefits to students</h3>
        <p>
          Students save time, never miss an event, and can register quickly.
          The site is responsive, so it works on phones, tablets and laptops.
          It is a frontend-only academic project built with basic web
          technologies.
        </p>
      </div>
    </div>
  );
}

/* ---------------- Contact Page ---------------- */
function ContactPage() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (
      name === "" ||
      email === "" ||
      subject === "" ||
      message === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    alert(
      "Thank you, " +
        name +
        ". Your message has been received. (This is a demo project; no email is actually sent.)"
    );
    form.reset();
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have a question or feedback? Send us a message.
          </p>

          <div className="form-card">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="you@college.edu"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject of your message"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Main App Component (Class Component) ---------------- */
class App extends React.Component {
  constructor(props) {
    super(props);
    // Class component state, updated with this.setState().
    this.state = {
      currentPage: "home",
      eventId: null,
      filter: "All",
      registeredEventId: null,
      registeredName: "",
    };

    // Bind handlers
    this.handleHashChange = this.handleHashChange.bind(this);
    this.handleNavigate = this.handleNavigate.bind(this);
    this.handleViewDetails = this.handleViewDetails.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleRegistrationComplete = this.handleRegistrationComplete.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  // We re-render the app on each navigation by updating the URL hash
  // and listening to hashchange. This is basic browser navigation, not DOM.
  componentDidMount() {
    window.addEventListener("hashchange", this.handleHashChange);
    this.handleHashChange();
  }

  handleHashChange() {
    const hash = window.location.hash.replace("#", "");
    let page = hash || "home";
    let eventId = null;

    if (page.indexOf("event-") === 0) {
      eventId = page.substring(6);
      page = "eventDetails";
    } else if (page.indexOf("register-") === 0) {
      eventId = page.substring(8);
      page = "register";
    }

    this.setState({
      currentPage: page,
      eventId: eventId,
    });
  }

  handleNavigate(page) {
    window.location.hash = "#" + page;
  }

  handleViewDetails(eventId) {
    window.location.hash = "#event-" + eventId;
  }

  handleRegister(eventId) {
    window.location.hash = "#register-" + eventId;
  }

  handleRegistrationComplete(eventId, fullName) {
    this.setState({
      registeredEventId: eventId,
      registeredName: fullName,
      currentPage: "success",
    });
    window.location.hash = "#success";
  }

  handleFilterChange(category) {
    this.setState({ filter: category });
  }

  render() {
    let pageContent;

    if (this.state.currentPage === "home") {
      pageContent = (
        <HomePage
          onNavigate={this.handleNavigate}
          onViewDetails={this.handleViewDetails}
        />
      );
    } else if (this.state.currentPage === "events") {
      pageContent = (
        <EventsPage
          filter={this.state.filter}
          onFilterChange={this.handleFilterChange}
          onViewDetails={this.handleViewDetails}
        />
      );
    } else if (this.state.currentPage === "eventDetails") {
      pageContent = (
        <EventDetailsPage
          eventId={this.state.eventId}
          onNavigate={this.handleNavigate}
          onRegister={this.handleRegister}
        />
      );
    } else if (this.state.currentPage === "register") {
      pageContent = (
        <RegisterPage
          eventId={this.state.eventId}
          onNavigate={this.handleNavigate}
          onRegistrationComplete={this.handleRegistrationComplete}
        />
      );
    } else if (this.state.currentPage === "success") {
      pageContent = (
        <RegistrationSuccessPage
          eventId={this.state.registeredEventId}
          fullName={this.state.registeredName}
          onNavigate={this.handleNavigate}
        />
      );
    } else if (this.state.currentPage === "myregistrations") {
      pageContent = (
        <MyRegistrationsPage onNavigate={this.handleNavigate} />
      );
    } else if (this.state.currentPage === "about") {
      pageContent = <AboutPage />;
    } else if (this.state.currentPage === "contact") {
      pageContent = <ContactPage />;
    } else {
      pageContent = (
        <HomePage
          onNavigate={this.handleNavigate}
          onViewDetails={this.handleViewDetails}
        />
      );
    }

    return (
      <div>
        <Navbar
          currentPage={this.state.currentPage}
          onNavigate={this.handleNavigate}
        />
        {pageContent}
        <Footer />
      </div>
    );
  }
}

/* ---------------- Render App ---------------- */
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
