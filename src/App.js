import React, { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";
import ErrorView from "./components/ErrorView";
import ActionButtons from "./components/ActionButtons";
import "./App.css";

const API_URL = "https://apis.ccbp.in/list-creation/lists";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [lists, setLists] = useState({});
  const [listOrder, setListOrder] = useState([]);
  const [selectedLists, setSelectedLists] = useState([]);
  const [newListView, setNewListView] = useState(false);
  const [newListKey, setNewListKey] = useState(null);
  const [displayedLists, setDisplayedLists] = useState([]);
  const [showCreateNewList, setShowCreateNewList] = useState(true);

  console.log(data);
  console.log(newListKey);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(API_URL);
      const { lists } = response.data;
      const groupedLists = lists.reduce((acc, item) => {
        if (!acc[item.list_number]) {
          acc[item.list_number] = [];
        }
        acc[item.list_number].push(item);
        return acc;
      }, {});

      const sortedListNumbers = Object.keys(groupedLists).sort((a, b) => a - b);
      setData(lists);
      setLists(groupedLists);
      setListOrder(sortedListNumbers);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  const handleListSelection = (listNumber) => {
    const updatedSelection = selectedLists.includes(listNumber)
      ? selectedLists.filter((num) => num !== listNumber)
      : [...selectedLists, listNumber];
    setSelectedLists(updatedSelection);
  };

  const handleCreateNewList = () => {
    if (selectedLists.length !== 2) {
      let alertForCheckEl = document.getElementById("alertForCheck");
      alertForCheckEl.textContent =
        "*You should select exactly 2 lists to create a new list";
      return;
    }

    setShowCreateNewList(false);

    // Get the selected lists and sort based on their order in `listOrder`
    const [firstList, secondList] = selectedLists
      .map((list) => parseInt(list, 10))
      .sort(
        (a, b) =>
          listOrder.indexOf(a.toString()) - listOrder.indexOf(b.toString())
      );

    // Generate a new list number for the new list
    const nextListNumber = Math.max(...Object.keys(lists).map(Number)) + 1;
    const newListKey = nextListNumber.toString();
    setNewListKey(newListKey);

    // Update `lists` and add the new list as empty initially
    setLists((prev) => ({
      ...prev,
      [newListKey]: [],
    }));

    // Update `listOrder` to insert the new list between the selected lists
    setListOrder((prevOrder) => {
      const firstIndex = prevOrder.indexOf(firstList.toString());
      const updatedOrder = [...prevOrder];
      updatedOrder.splice(firstIndex + 1, 0, newListKey); // Insert after the first list
      return updatedOrder;
    });

    setNewListView(true);
    // Update `displayedLists` to only show the selected and new lists
    setDisplayedLists([
      firstList.toString(),
      newListKey,
      secondList.toString(),
    ]);

    setNewListView(true);
  };

  const handleMoveItem = (item, fromList, toList) => {
    setLists((prevLists) => {
      const updatedLists = { ...prevLists };

      // Remove the item from the source list
      const updatedFromList = (updatedLists[fromList] || []).filter(
        (i) => i.id !== item.id
      );

      // Ensure the target list exists in the `lists` object
      if (!updatedLists[toList]) {
        updatedLists[toList] = [];
      }

      // Add the item to the target list
      if (!updatedLists[toList].some((i) => i.id === item.id)) {
        updatedLists[toList].push(item);
      }

      // Return the updated lists
      return {
        ...updatedLists,
        [fromList]: updatedFromList, // Update the source list
        [toList]: updatedLists[toList], // Update the target list
      };
    });
  };

  const handleCancel = () => {
    setShowCreateNewList(true);
    setNewListView(false);
    setSelectedLists([]);
    fetchData();
  };

  const handleUpdate = () => {
    setShowCreateNewList(true);
    setNewListView(false);
    setSelectedLists([]);

    setLists((prevLists) => {
      const updatedLists = { ...prevLists };
      if (updatedLists["3"]) {
        updatedLists["3"] = [...updatedLists["3"]];
      }
      return updatedLists;
    });

    setListOrder((prevOrder) => [...prevOrder]);

    // Restore all lists in the displayed order
    setDisplayedLists([...listOrder]);
  };

  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : error ? (
        <ErrorView onRetry={fetchData} />
      ) : (
        <div className="main-container">
          <div className="head-btn-container">
            {showCreateNewList && (
              <>
                <h1 className="main-heading">List Creation</h1>
                <button
                  type="button"
                  className="add-new-list-button"
                  onClick={handleCreateNewList}
                >
                  Create a New List
                </button>
              </>
            )}
            <span id="alertForCheck"></span>
          </div>

          <div className={`lists-container ${newListView ? "row" : ""}`}>
            {newListView ? (
              <div>
                <div className="list-creation-view">
                  {displayedLists.map((listNumber, index) => (
                    <div key={listNumber} style={{ margin: "16px" }}>
                      <div className="list-container">
                        <h3>
                          List {listNumber} ({lists[listNumber]?.length || 0})
                        </h3>
                        <div className="list-item-container">
                          {lists[listNumber]?.map((item) => (
                            <div key={item.id} className="list-item">
                              <span className="name">{item.name}</span>
                              <span className="description">
                                {item.description}
                              </span>

                              {/* Arrow buttons for moving items */}
                              <div className="arrow-buttons">
                                {index > 0 && (
                                  <button
                                    className="arrow"
                                    onClick={() =>
                                      handleMoveItem(
                                        item,
                                        listNumber,
                                        displayedLists[index - 1]
                                      )
                                    }
                                  >
                                    ←
                                  </button>
                                )}
                                {index < displayedLists.length - 1 && (
                                  <button
                                    className="arrow"
                                    onClick={() =>
                                      handleMoveItem(
                                        item,
                                        listNumber,
                                        displayedLists[index + 1]
                                      )
                                    }
                                  >
                                    →
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <ActionButtons
                  onCancel={handleCancel}
                  onUpdate={handleUpdate}
                />
              </div>
            ) : (
              <>
                <div className="list-selection">
                  {listOrder.map((listNumber) => (
                    <div key={listNumber} className="list-container">
                      <div className="check-heading">
                        <input
                          id={`myCheckbox + ${listNumber}`}
                          type="checkbox"
                          checked={selectedLists.includes(listNumber)}
                          onChange={() => handleListSelection(listNumber)}
                        />
                        <label
                          htmlFor={`myCheckbox + ${listNumber}`}
                          className="list-head"
                        >
                          List {listNumber}
                        </label>
                      </div>
                      {lists[listNumber].map((item) => (
                        <div className="list-item" key={item.id}>
                          <span className="name">{item.name}</span>
                          <span className="description">
                            {item.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
