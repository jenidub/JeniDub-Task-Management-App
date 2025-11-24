
# The JeniDub Task Management App
A full-featured task management application built with React, TypeScript, and Auth0 authentication. This app provides a secure, user-friendly interface for organizing and tracking personal tasks.

## Core Functionality
-   **Task Dashboard**: Overview of all tasks with real-time statistics
    -   Total task count
    -   Completed tasks count
    -   Remaining tasks count
-   **Task Operations**:
    -   ✅ Create new tasks with title, due date, and description
    -   ✏️ Edit existing task details
    -   🗑️ Delete tasks
    -   ☑️ Mark tasks as complete/incomplete
  
-   **Task Details View**: Full-screen modal for viewing and editing individual tasks
-   **Grid Layout**: Responsive 3-column grid display for task cards

## Technical Features
-   **TypeScript Integration**: Full type safety with custom interfaces for tasks and user data
-   **Context API**: Global state management using React Context
-   **Local Storage Persistence**: Tasks automatically saved to browser storage
-   **React Bootstrap UI**: Professional, responsive interface
-   **Form Validation**: Controlled form components with state management

## Authentication & Authorization
-   **Auth0 Integration**: Secure user authentication with Auth0
-   **Protected Routes**: Authentication guard for secure access to dashboard and profile
-   **User Profile**: View authenticated user information including name, email, and profile picture
-   **Session Management**: Persistent login sessions with localStorage caching

## Routes
-   `/` - Login page
-   `/dashboard` - Protected task dashboard (requires authentication)
-   `/profile` - Protected user profile page (requires authentication)
-   `/callback` - Auth0 callback handler

## Getting Started

### Prerequisites
-   Node.js (v16 or higher)
-   npm or yarn

### Installation
1.  Clone the repository:
```bash
git clone https://github.com/jenidub/ct-task-management-app.git
cd ct-task-management-app
```
2.  Install dependencies:
```bash
npm install
```

3.  Set up Auth0 as a single page web page
4.  Start the development server:
```bash
npm run dev
```
5.  Open your browser and navigate to `http://localhost:5173` 
=> Check your terminal for the port number if that address does not work



## TypeScript Implementation

### Task Interface
```typescript
interface Task {
    taskTitle: string;
    taskDueDate: string;
    taskDescription: string;
    isTaskCompleted: boolean;
}

```

### User Info Types

```typescript
interface UserInfoTypes {
    customerName: string | undefined;
    username: string | undefined;
    email: string | undefined;
    profilePic: string | undefined;
}

```

### Context Type

```typescript
interface TaskListContextType {
    taskList: Task[];
    setTaskList: (tasks: Task[]) => void;
}

```

## State Management

The app uses React Context API for global state management:

-   **TaskListContext**: Manages the task list across all components
-   **Local Storage**: Automatically persists tasks to browser storage
-   **useState**: Component-level state for forms and UI interactions


## Future Enhancements

Plans for future development:
-   Search and filter functionality
-   Task sorting options
-   Convert the due date to Date data typing to expand functionality
-   Toggle Light/Dark mode
-   Toggle Grid/List views

---
***Submission for the CT Software Engineering Certificate Program***
***README created with the assistance of Claude AI and Stackedit.io***
