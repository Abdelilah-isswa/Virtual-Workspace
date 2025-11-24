# 🏢 Employee Management System

A clean, functional web application for managing employee assignments across different office zones with role-based access control.

## 🌟 Features

### 👥 **Employee Management**
- **Add New Employees** - Comprehensive form with validation
- **Professional Experiences** - Dynamic form for adding multiple work experiences
- **Photo Management** - URL-based photos with preview
- **Employee Profiles** - View detailed employee information

### 🗺️ **Zone Management**
- **6 Office Zones**:
  - Conference Room
  - Reception
  - Server Room
  - Security Room
  - Staff Room
  - Archive Room

### 🔐 **Role-Based Access Control**
- **Manager** - Access to all zones
- **IT Technician** - Server room access
- **Receptionist** - Reception access
- **Security Agent** - Security room access
- **Cleaning Staff** - All zones except Archive Room

### ✅ **Validation**
- **Regex Validation** for names, emails, and French phone numbers
- **Date Validation** ensuring start dates are before end dates
- **Role Restrictions** preventing unauthorized zone assignments

## 🚀 Quick Start

### Installation

1. **Download the project files**
2. **Open `index.html` in your web browser**
3. **Start managing your employees!**

## 📁 Project Structure

```
employee-management/
├── index.html          # Main application

│── style.css       # CSS styling
├
│── script.js       # JavaScript functionality
└── README.md           # This file
```

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: CSS Grid, Flexbox
- **Layout**: Clean, functional design

## 💻 Usage Guide

### Adding Employees
1. Click **"Add New Worker"** button
2. Fill in employee details:
   - Name, Role, Email, Phone
   - Photo URL (optional)
   - Professional experiences
3. Submit the form

### Assigning to Zones
1. Click the **"+"** button in any zone
2. Select from eligible employees
3. Remove employees with **"×"** button

### Viewing Profiles
- Click on any employee card to view complete profile

## 🎯 Key Features

### Employee Validation
```javascript
// Name validation (French names supported)
/^[A-Za-zÀ-ÿ\s\-']{2,50}$/

// Email validation
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// French phone validation
/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
```

### Zone Restrictions
| Zone | Allowed Roles | Required |
|------|---------------|----------|
| Reception | Receptionist, Manager | Yes |
| Server Room | Technician, Manager | Yes |
| Security Room | Security, Manager | Yes |
| Archive Room | All except Cleaning | Yes |

## 📱 Responsive Design

- Works on desktop and mobile devices
- Adapts layout for different screen sizes

## 🔧 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)

## 🎉 How to Use

1. **Add employees** using the form
2. **Assign them** to appropriate zones based on their roles
3. **Manage zone assignments** with the add/remove buttons
4. **View employee details** by clicking on them

---

**Simple, functional employee management system**

*Perfect for office management and workspace organization*
