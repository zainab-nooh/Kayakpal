# 🚣‍♀️ Kayakpal

## Description
Kayakpal is a specialized booking platform that connects kayak enthusiasts with local kayak rental businesses and tour operators. The platform streamlines the kayak rental experience by providing dedicated interfaces for both customers and business owners to manage bookings, profiles, and kayak fleet operations.

<!-- ![Kayakpal Flow Diagram](path-to-your-diagram-image) -->

## Technologies Used
- **Frontend**: React.js/Next.js - Component-based UI and server-side rendering
- **Styling**: CSS
- **Backend**: Node.js/Express.js and API endpoints
- **Database**: mongoDb
- **Authentication**: JWT with bcrypt - Secure user authentication

## How to Get Started

### Prerequisites
- Modern web browser
- No additional software

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/zainab-nooh/Kayakpal.git
   cd kayakpal
   ```

2. **Access the Application**
   Open your browser to `http://localhost:3000`
   <br><br>



#  Kayakpal - RESTful Routes

## User Routes

| # | Action | URL | HTTP Verb | JSX View Filename | Mongoose Method |
|---|--------|-----|-----------|-------------------|-----------------|
| 1 | Index | /users | GET | Index.jsx | User.find() |
| 2 | Show | /users/:id | GET | Show.jsx | User.findById() |
| 3 | New | /users/new | GET | New.jsx | none |
| 4 | Create | /users | POST | none | User.create(req.body) |
| 5 | Edit | /users/:id/edit | GET | Edit.jsx | User.findById() |
| 6 | Update | /users/:id | PUT | none | User.findByIdAndUpdate() |
| 7 | Destroy | /users/:id | DELETE | none | User.findByIdAndDelete() |

---

## Business Routes

| # | Action | URL | HTTP Verb | JSX View Filename | Mongoose Method |
|---|--------|-----|-----------|-------------------|-----------------|
| 1 | Index | /businesses | GET | Index.jsx | Business.find() |
| 2 | Show | /businesses/:id | GET | Show.jsx | Business.findById() |
| 3 | New | /businesses/new | GET | New.jsx | none |
| 4 | Create | /businesses | POST | none | Business.create(req.body) |
| 5 | Edit | /businesses/:id/edit | GET | Edit.jsx | Business.findById() |
| 6 | Update | /businesses/:id | PUT | none | Business.findByIdAndUpdate() |
| 7 | Destroy | /businesses/:id | DELETE | none | Business.findByIdAndDelete() |

---

## Kayak Routes

| # | Action | URL | HTTP Verb | JSX View Filename | Mongoose Method |
|---|--------|-----|-----------|-------------------|-----------------|
| 1 | Index | /kayaks | GET | Index.jsx | Kayak.find() |
| 2 | Show | /kayaks/:id | GET | Show.jsx | Kayak.findById() |
| 3 | New | /kayaks/new | GET | New.jsx | none |
| 4 | Create | /kayaks | POST | none | Kayak.create(req.body) |
| 5 | Edit | /kayaks/:id/edit | GET | Edit.jsx | Kayak.findById() |
| 6 | Update | /kayaks/:id | PUT | none | Kayak.findByIdAndUpdate() |
| 7 | Destroy | /kayaks/:id | DELETE | none | Kayak.findByIdAndDelete() |

---

## Booking Routes

| # | Action | URL | HTTP Verb | JSX View Filename | Mongoose Method |
|---|--------|-----|-----------|-------------------|-----------------|
| 1 | Index | /bookings | GET | Index.jsx | Booking.find() |
| 2 | Show | /bookings/:id | GET | Show.jsx | Booking.findById() |
| 3 | New | /bookings/new | GET | New.jsx | none |
| 4 | Create | /bookings | POST | none | Booking.create(req.body) |
| 5 | Edit | /bookings/:id/edit | GET | Edit.jsx | Booking.findById() |
| 6 | Update | /bookings/:id | PUT | none | Booking.findByIdAndUpdate() |
| 7 | Destroy | /bookings/:id | DELETE | none | Booking.findByIdAndDelete() |

---

## User Flow Instructions

### For Customers
1. **Registration/Login**
   - Create account or sign in to existing account
   - Complete profile with personal information
   
2. **Browse & Discover**
   - Search available kayaks by location and date
   - View kayak details, photos, and business information
   
3. **Make a Booking**
   - Select preferred kayak and time slot
   - Enter booking details and confirm availability
   - Complete secure payment through Stripe
   
4. **Manage Bookings**
   - View upcoming and past bookings in profile
   - Modify or cancel bookings (subject to policy)
   - Access booking confirmations and receipts

### For Business Owners
1. **Business Setup**
   - Create business owner account
   - Complete business profile with description and photos
   
2. **Fleet Management**
   - Add kayaks to inventory with details and photos
   - Set availability schedules and pricing
   - Update kayak status and maintenance records
   
3. **Booking Management**
   - View and manage incoming booking requests
   - Accept or decline bookings based on availability
   - Communicate with customers about bookings
   
4. **Business Analytics - Might Remove**
   - Track booking performance and revenue
   - View customer feedback and ratings
   - Generate reports for business insights

## Features
✅ Dual user interfaces (Customer & Business Owner)  
✅ Secure user authentication and profile management  
✅ Real-time kayak availability tracking    
✅ Booking management system  
✅ Business fleet management tools  
✅ Responsive design for mobile and desktop  
✅ Image upload and management  
✅ Search and filtering capabilities  
✅ Booking history

## Code That I'm Proud Of


## The Most Challenging Code


## Interesting Code


## Credits
- **Developer**: Zainab Nooh
- **Course**: Software Engineering Bootcamp  
- **Institution**: General Assembly
- **Instructor**: Kristina VanBergen-DeSilva, Arthur Bernier Jr
- **Wireframe**: [Link](https://excalidraw.com/#json=gZ5a-QdVNzrOyTI0lRaHs,yko7xQ6Yps8tREqEQS0l6Q)

- **Trello**: [Board](https://trello.com/b/l8WdAQ6N/kayakpal)
- **Design**: [Design Page Link]()

## Resources Used
