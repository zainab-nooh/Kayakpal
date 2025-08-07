# 🚣‍♀️ Kayakpal

## Description
Kayakpal is a specialized booking platform that connects kayak enthusiasts with local kayak rental businesses and tour operators. The platform streamlines the kayak rental experience by providing dedicated interfaces for both customers and business owners to manage bookings, profiles, and kayak fleet operations.

<br>

#  **Demo**

 Visit the [live demo](https://kayakpal.onrender.com) to see Connect 4 in action

<br>


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
## Customer Routes

| # | Action | URL | HTTP Verb | JSX View Filename | Mongoose Method | Description |
|---|--------|-----|-----------|-------------------|-----------------|-------------|
| 1 | Index | /customers | GET | Index.jsx | Customer.find() | List all customers (admin only) |
| 2 | Show | /customers/:id | GET | Show.jsx | Customer.findById() | Show customer profile |
| 3 | New | /customers/new | GET | New.jsx | none | Customer registration form |
| 4 | Create | /customers | POST | none | Customer.create(req.body) | Create new customer account |
| 5 | Edit | /customers/:id/edit | GET | Edit.jsx | Customer.findById() | Edit customer profile form |
| 6 | Update | /customers/:id | PUT | none | Customer.findByIdAndUpdate() | Update customer profile |
| 7 | Destroy | /customers/:id | DELETE | none | Customer.findByIdAndDelete() | Delete customer account |
| 8 | Bookings | /customers/:id/bookings | GET | Bookings.jsx | Booking.find({customerId}) | Customer's booking history |
| 9 | Sign Up Form | /customers/signup | GET | SignUp.jsx | none | Customer sign up form |
| 10 | Sign Up | /customers/signup | POST | none | Customer.create(req.body) | Create customer account |
| 11 | Sign In Form | /customers/signin | GET | SignIn.jsx | none | Customer sign in form |
| 12 | Sign In | /customers/signin | POST | none | Customer.findOne() | Authenticate customer |

---

## Business Owner Routes

| # | Action | URL | HTTP Verb | JSX View Filename | Mongoose Method | Description |
|---|--------|-----|-----------|-------------------|-----------------|-------------|
| 1 | Index | /business-owners | GET | Index.jsx | BusinessOwner.find() | List all business owners (admin only) |
| 2 | Show | /business-owners/:id | GET | Show.jsx | BusinessOwner.findById() | Show business owner profile |
| 3 | New | /business-owners/new | GET | New.jsx | none | Business owner registration form |
| 4 | Create | /business-owners | POST | none | BusinessOwner.create(req.body) | Create new business owner account |
| 5 | Edit | /business-owners/:id/edit | GET | Edit.jsx | BusinessOwner.findById() | Edit business owner profile form |
| 6 | Update | /business-owners/:id | PUT | none | BusinessOwner.findByIdAndUpdate() | Update business owner profile |
| 7 | Destroy | /business-owners/:id | DELETE | none | BusinessOwner.findByIdAndDelete() | Delete business owner account |
| 8 | Sign Up Form | /business-owners/signup | GET | SignUp.jsx | none | Business owner sign up form |
| 9 | Sign Up | /business-owners/signup | POST | none | BusinessOwner.create(req.body) | Create business owner account |
| 10 | Sign In Form | /business-owners/signin | GET | SignIn.jsx | none | Business owner sign in form |
| 11 | Sign In | /business-owners/signin | POST | none | BusinessOwner.findOne() | Authenticate business owner |


---

## Business Profile Routes (Nested under Business Owner)

| # | Action | URL | HTTP Verb | JSX View Filename | Mongoose Method | Description |
|---|--------|-----|-----------|-------------------|-----------------|-------------|
| 1 | Index | /business-owners/:ownerId/businesses | GET | Index.jsx | Business.find({ownerId}) | List owner's businesses |
| 2 | Show | /business-owners/:ownerId/businesses/:id | GET | Show.jsx | Business.findById() | Show specific business |
| 3 | New | /business-owners/:ownerId/businesses/new | GET | New.jsx | none | Create new business form |
| 4 | Create | /business-owners/:ownerId/businesses | POST | none | Business.create(req.body) | Create new business |
| 5 | Edit | /business-owners/:ownerId/businesses/:id/edit | GET | Edit.jsx | Business.findById() | Edit business form |
| 6 | Update | /business-owners/:ownerId/businesses/:id | PUT | none | Business.findByIdAndUpdate() | Update business |
| 7 | Destroy | /business-owners/:ownerId/businesses/:id | DELETE | none | Business.findByIdAndDelete() | Delete business |

---

## Kayak Fleet Routes (Nested under Business)

| # | Action | URL | HTTP Verb | JSX View Filename | Mongoose Method | Description |
|---|--------|-----|-----------|-------------------|-----------------|-------------|
| 1 | Index | /businesses/:businessId/kayaks | GET | Index.jsx | Kayak.find({businessId}) | List business's kayaks |
| 2 | Show | /businesses/:businessId/kayaks/:id | GET | Show.jsx | Kayak.findById() | Show specific kayak |
| 3 | New | /businesses/:businessId/kayaks/new | GET | New.jsx | none | Add new kayak form |
| 4 | Create | /businesses/:businessId/kayaks | POST | none | Kayak.create(req.body) | Add new kayak to fleet |
| 5 | Edit | /businesses/:businessId/kayaks/:id/edit | GET | Edit.jsx | Kayak.findById() | Edit kayak details form |
| 6 | Update | /businesses/:businessId/kayaks/:id | PUT | none | Kayak.findByIdAndUpdate() | Update kayak details |
| 7 | Destroy | /businesses/:businessId/kayaks/:id | DELETE | none | Kayak.findByIdAndDelete() | Remove kayak from fleet |

---

## Customer Booking Routes

| # | Action | URL | HTTP Verb | JSX View Filename | Mongoose Method | Description |
|---|--------|-----|-----------|-------------------|-----------------|-------------|
| 1 | Index | /customers/:customerId/bookings | GET | Index.jsx | Booking.find({customerId}) | Customer's bookings |
| 2 | Show | /customers/:customerId/bookings/:id | GET | Show.jsx | Booking.findById() | Show booking details |
| 3 | New | /customers/:customerId/bookings/new | GET | New.jsx | none | New booking form |
| 4 | Create | /customers/:customerId/bookings | POST | none | Booking.create(req.body) | Create new booking |
| 5 | Edit | /customers/:customerId/bookings/:id/edit | GET | Edit.jsx | Booking.findById() | Edit booking form |
| 6 | Update | /customers/:customerId/bookings/:id | PUT | none | Booking.findByIdAndUpdate() | Update booking |
| 7 | Destroy | /customers/:customerId/bookings/:id | DELETE | none | Booking.findByIdAndDelete() | Cancel booking |

---

## Business Booking Management Routes

| # | Action | URL | HTTP Verb | JSX View Filename | Mongoose Method | Description |
|---|--------|-----|-----------|-------------------|-----------------|-------------|
| 1 | Index | /businesses/:businessId/bookings | GET | Index.jsx | Booking.find({businessId}) | All business bookings |
| 2 | Show | /businesses/:businessId/bookings/:id | GET | Show.jsx | Booking.findById() | View booking details |
| 3 | Update | /businesses/:businessId/bookings/:id | PUT | none | Booking.findByIdAndUpdate() | Update booking status |
| 4 | Accept | /businesses/:businessId/bookings/:id/accept | PUT | none | Booking.findByIdAndUpdate() | Accept booking |
| 5 | Decline | /businesses/:businessId/bookings/:id/decline | PUT | none | Booking.findByIdAndUpdate() | Decline booking |

---

## Public Routes (No Authentication Required)

| # | Action | URL | HTTP Verb | JSX View Filename | Mongoose Method | Description |
|---|--------|-----|-----------|-------------------|-----------------|-------------|
| 1 | Home | / | GET | Home.jsx | none | Landing page |
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




## Credits
- **Developer**: Zainab Nooh
- **Course**: Software Engineering Bootcamp  
- **Institution**: General Assembly
- **Instructor**: Kristina VanBergen-DeSilva, Arthur Bernier Jr
- **Wireframe**: [Link](https://excalidraw.com/#json=gZ5a-QdVNzrOyTI0lRaHs,yko7xQ6Yps8tREqEQS0l6Q)

- **Trello**: [Board](https://trello.com/b/l8WdAQ6N/kayakpal)
- **Design**: [Design Page Link]()

## Resources Used
* **Fonts Used** Inter, Mackinac

<br>

#  **Connect With Me**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/zainab-nooh)


