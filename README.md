# List Creation Application

This React application allows users to fetch lists from an API, view and manage them, and create new lists by merging selected lists. It provides a dynamic interface to interact with list items, rearrange them, and create new lists based on specific criteria.

## Features

1. **Data Fetching**:
   - Fetches lists and items from an external API.
   - Groups fetched data by `list_number` and sorts them for easy rendering.

2. **Error Handling**:
   - Displays an error view with retry functionality in case of failed API calls.

3. **Dynamic List Selection**:
   - Allows users to select two lists for creating a new list.
   - Validates the selection to ensure exactly two lists are selected.

4. **List Creation**:
   - Merges two selected lists to create a new list.
   - Dynamically inserts the new list in the appropriate order.

5. **Interactive UI**:
   - Uses loader spinners for loading states.
   - Includes buttons for creating new lists, canceling actions, and updating the list view.

6. **Item Management**:
   - Allows users to move items between lists.

## Technologies Used

- **React**: For building the user interface.
- **Axios**: For API calls.
- **React Loader Spinner**: For displaying loading states.
- **CSS**: For styling.

## Folder Structure

```
.
├── src
│   ├── components
│   │   ├── ErrorView.js          # Displays error message with retry button
│   │   ├── ActionButtons.js      # Cancel and Update buttons component
│   ├── App.css                  # Styling for the application
│   ├── App.js                   # Main application component
│   └── index.js                 # Application entry point
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

2. Open the application in your browser at [http://localhost:3000](http://localhost:3000).

### API

The application fetches data from the following API endpoint:

- **API URL**: `https://apis.ccbp.in/list-creation/lists`


### Project Structure Overview

#### App Component

The main component responsible for managing state and rendering the application:

- **State Variables**:
  - `loading`: Tracks the loading state.
  - `error`: Tracks whether an error occurred.
  - `data`: Stores raw API response data.
  - `lists`: Grouped list data.
  - `listOrder`: Ordered list numbers for rendering.
  - `selectedLists`: Tracks user-selected lists.
  - `newListView`: Controls whether the new list view is displayed.
  - `newListKey`: Stores the key of the newly created list.
  - `showCreateNewList`: Controls visibility of the "Create New List" button.

- **Functions**:
  - `fetchData`: Fetches and processes list data from the API.
  - `handleListSelection`: Toggles selection of a list.
  - `handleCreateNewList`: Validates and creates a new list by merging two selected lists.
  - `handleCancel`: Resets the view to its initial state.
  - `handleUpdate`: Updates the list view after changes.

#### ErrorView Component

Displays an error message with a retry button. Useful for handling API call failures.

#### ActionButtons Component

Provides "Cancel" and "Update" buttons for user interaction.

## Styling

The application uses a CSS file (`App.css`) for styling, providing a clean and responsive UI.

## Future Enhancements

1. Add drag-and-drop functionality for moving items between lists.
2. Implement pagination for large datasets.
3. Enhance error messages with more detailed descriptions.
4. Provide a search/filter feature for lists and items.

---

Enjoy managing your lists!

