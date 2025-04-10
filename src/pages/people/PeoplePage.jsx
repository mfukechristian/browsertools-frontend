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
                <div className="image-container">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="people-card-image"
                  />
                  <div className="overlay"></div>
                </div>

                <h3 className="people-card-name">{person.name}</h3>
                <p className="people-card-description">{person.description}</p>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
