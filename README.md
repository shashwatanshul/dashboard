# Aforro Sales Dashboard

A premium React-based sales dashboard implementation featuring real-time data visualization and user management.

# Live Link

https://dashboard-phi-six-36.vercel.app/

## Features

### Part 1: UI Implementation
- **Responsive Navigation**: Collapsible sidebar with mobile-first design and hamburger menu.
- **Dynamic Dashboard**: 
  - Summary statistics for daily sales.
  - Interactive charts using **Recharts** (Visitor Insights, Total Revenue, Customer Satisfaction, Target vs Reality).
  - Modern typography and color palette based on Figma design.
- **Premium Aesthetics**: Smooth transitions, glassmorphism-inspired overlays, and subtle hover effects.

### Part 2: API Integration & Data Table
- **Public API Integration**: Fetches data from `jsonplaceholder.typicode.com/users`.
- **Advanced Table Functionality**:
  - **Search**: Real-time filtering by Name or Email.
  - **Sorting**: Toggle sorting by Name (A-Z and Z-A).
  - **Filtering**: Dropdown filter by City.
- **Robust State Management**: Graceful handling of loading states (custom spinners) and error states (retry mechanism).

## Tech Stack
- **Framework**: React 18 (Functional Components, Hooks)
- **Tooling**: Vite (for fast development and builds)
- **Styling**: Vanilla CSS (CSS Modules approach for modularity)
- **Icons**: Lucide React
- **Charts**: Recharts
- **API Client**: Axios

## Folder Structure

```text
src/
├── assets/             # Images and design assets
├── components/         # React components
│   ├── Charts/         # Recharts implementations
│   ├── Dashboard/      # Main dashboard sections
│   ├── Header/         # Navigation header
│   ├── Sidebar/        # Sidebar navigation
│   └── UserTable/      # User management table
├── services/           # API services (axios)
├── styles/             # Centralized CSS files
├── App.jsx             # Main App component
└── main.jsx            # Entry point
```

## Project Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## Design Decisions
- **Vanilla CSS**: Used for maximum control over layouts and to demonstrate UI engineering skills without heavy styling libraries.
- **Mobile First**: The sidebar transitions from a persistent desktop view to a collapsible mobile drawer at 768px.
- **Performance**: Used `useMemo` for heavy table filtering and sorting operations to ensure a smooth UI even with larger datasets.
