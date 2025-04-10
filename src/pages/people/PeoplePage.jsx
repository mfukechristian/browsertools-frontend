import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPeople } from "../../../redux/actions/peopleAction";
import { fetchAllCategories } from "../../../redux/actions/peopleCategoryAction";
import "./PeoplePage.css";

const PeoplePage = () => {
  const dispatch = useDispatch();

  // Select people and categories from Redux store
  const {
    people,
    loading: peopleLoading,
    error: peopleError,
  } = useSelector((state) => state.people);
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useSelector((state) => state.categories);

  console.log("Categories:", categories);
  console.log("Categories Loading:", categoriesLoading);
  console.log("Categories Error:", categoriesError);

  // Fetch data on component mount
  useEffect(() => {
    dispatch(fetchAllPeople());
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <div className="people-page-container">
      {/* Display Categories as Tags */}
      <div className="categories-section">
        {categoriesLoading && <p>Loading categories...</p>}
        {categoriesError && <p>Error: {categoriesError}</p>}
        <div className="category-tags">
          {categories &&
            categories.map((category) => (
              <span key={category._id} className="category-tag">
                {category.category}
              </span>
            ))}
        </div>
      </div>

      {/* Display People as Clickable Cards */}
      <div className="people-cards-section">
        {peopleLoading && <p>Loading people...</p>}
        {peopleError && <p>Error: {peopleError}</p>}
        <div className="people-cards-grid">
          {people &&
            people.map((person) => (
              <a
                key={person._id}
                href={person.url}
                target="_blank"
                rel="noopener noreferrer"
                className="people-card-link"
              >
                <div
                  className="people-card"
                  onMouseOver={(e) => e.target.classList.add("hovered")}
                  onMouseOut={(e) => e.target.classList.remove("hovered")}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="people-card-image"
                  />
                  <div className="people-card-overlay"></div>
                  <div className="people-card-content">
                    <h3 className="people-card-name">{person.name}</h3>
                    <p className="people-card-description">
                      {person.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
