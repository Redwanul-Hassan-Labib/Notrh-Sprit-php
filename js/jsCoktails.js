// Cocktail data with proper categorization
const cocktails = [
  {
    id: 1,
    name: "The Grogg",
    description: "North Spirit Classic – The Grogg",
    image: "./media/product/the-grogg.jpg",
    url: "/the-grogg.html",
    categories: {
      taste: ["Sweet", "Light & Refreshing"],
      difficulty: ["Easy"],
      glassware: ["Highball", "Rocks"],
    },
  },
  {
    id: 2,
    name: "The Shot",
    description: "North Spirit Vodka – The Shot",
    image: "./media/product/the-shot.jpg",
    url: "/the-shot.html",
    categories: {
      taste: ["Light & Refreshing"],
      difficulty: ["Easy"],
      glassware: ["Shot"],
    },
  },
  {
    id: 3,
    name: "Orange Martini",
    description: "North Spirit Orange Martini",
    image: "./media/product/orange-martini.jpg",
    url: "/orange-martini.html",
    categories: {
      taste: ["Citrus", "Light & Refreshing", "Fruity"],
      difficulty: ["Easy"],
      glassware: ["Martini"],
    },
  },
  {
    id: 4,
    name: "Sex on the Beach",
    description: "North Spirit Vodka Sex on the Beach",
    image: "./media/product/sex-on-the-beach .jpg",
    url: "/sex-on-the-beach.html",
    categories: {
      taste: ["Sweet", "Fruity", "Exotic"],
      difficulty: ["Easy"],
      glassware: ["Highball"],
    },
  },
  {
    id: 5,
    name: "Vodka Tonic",
    description: "North Spirit Vodka Tonic",
    image: "./media/product/vodka-tonic.jpg",
    url: "/tonic.html",
    categories: {
      taste: ["Citrus", "Light & Refreshing"],
      difficulty: ["Easy"],
      glassware: ["Highball"],
    },
  },
  {
    id: 6,
    name: "Screwdriver",
    description: "North Spirit Screwdriver",
    image: "./media/product/screwdriver.jpg",
    url: "/screwdriver.html",
    categories: {
      taste: ["Citrus", "Fruity"],
      difficulty: ["Easy"],
      glassware: ["Highball"],
    },
  },
  {
    id: 7,
    name: "Cosmopolitan",
    description: "North Spirit Cosmopolitan",
    image: "./media/product/cosmopolitan.jpg",
    url: "/cosmopolitan.html",
    categories: {
      taste: ["Sour", "Citrus", "Sweet", "Fruity"],
      difficulty: ["Easy"],
      glassware: ["Martini"],
    },
  },
  {
    id: 8,
    name: "Vodka Sour",
    description: "North Spirit Vodka Sour",
    image: "./media/product/vodka-sour.jpg",
    url: "/sour.html",
    categories: {
      taste: ["Sour", "Light & Refreshing"],
      difficulty: ["Intermediate"],
      glassware: ["Rocks"],
    },
  },
  {
    id: 9,
    name: "Pornstar Martini",
    description: "North Spirit Pornstar Martini",
    image: "./media/product/pornstar.jpg",
    url: "/pornstar-martini.html",
    categories: {
      taste: ["Sweet", "Fruity", "Exotic"],
      difficulty: ["Intermediate"],
      glassware: ["Martini"],
    },
  },
  {
    id: 10,
    name: "Vodka Fizz",
    description: "North Spirit Vodka Fizz",
    image: "./media/product/vodka-fizz.jpg",
    url: "/fizz.html",
    categories: {
      taste: ["Sour", "Citrus", "Light & Refreshing", "Fruity"],
      difficulty: ["Easy"],
      glassware: ["Highball"],
    },
  },
  {
    id: 11,
    name: "Caipiroska",
    description: "North Spirit Caipiroska",
    image: "./media/product/caipiroska.jpg",
    url: "/caipiroska.html",
    categories: {
      taste: ["Sour", "Citrus", "Light & Refreshing"],
      difficulty: ["Intermediate"],
      glassware: ["Rocks"],
    },
  },
  {
    id: 12,
    name: "Vodka On The Rocks",
    description: "North Spirit Vodka On The Rocks",
    image: "./media/product/the-rocks.jpg",
    url: "/the-rocks.html",
    categories: {
      taste: ["Light & Refreshing"],
      difficulty: ["Easy"],
      glassware: ["Rocks"],
    },
  },
]

// Browse options based on category (translated to Finnish)
const browseOptions = {
  taste: [
    { value: "Sour", label: "Sour" },
    { value: "Citrus", label: "Citrus" },
    { value: "Sweet", label: "Sweet" },
    { value: "Light & Refreshing", label: "Light & Refreshing" },
    { value: "Fruity", label: "Fruity" },
    { value: "Exotic", label: "Exotic" },
  ],
  difficulty: [
    { value: "Easy", label: "Easy" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Advanced", label: "Advanced" },
  ],
  glassware: [
    { value: "Martini", label: "Martini" },
    { value: "Highball", label: "Highball" },
    { value: "Rocks", label: "Rocks" },
    { value: "Shot", label: "Shot" },
  ],
}

// DOM Elements
const searchInput = document.getElementById("searchInput")
const clearSearchBtn = document.getElementById("clearSearch")
const categorySelect = document.getElementById("category")
const browseBySelect = document.getElementById("browseBy")
const searchButton = document.getElementById("searchButton")
const resetButton = document.getElementById("resetButton")
const cocktailGrid = document.getElementById("cocktailGrid")
const noResults = document.getElementById("noResults")

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  // Display all cocktails initially
  displayCocktails(cocktails)

  // Event listeners
  searchInput.addEventListener("input", handleSearchInput)
  clearSearchBtn.addEventListener("click", clearSearch)
  categorySelect.addEventListener("change", handleCategoryChange)
  browseBySelect.addEventListener("change", handleBrowseChange)
  searchButton.addEventListener("click", applyFilters)
  resetButton.addEventListener("click", resetFilters)
})

// Handle search input
function handleSearchInput() {
  const searchTerm = searchInput.value.trim()
  clearSearchBtn.style.display = searchTerm ? "block" : "none"
}

// Clear search
function clearSearch() {
  searchInput.value = ""
  clearSearchBtn.style.display = "none"
}

// Handle category change
function handleCategoryChange() {
  const selectedCategory = categorySelect.value

  // Clear and disable browse by select if no category is selected
  browseBySelect.innerHTML = '<option value="" disabled selected>Selaa</option>'

  if (selectedCategory) {
    // Enable browse by select
    browseBySelect.disabled = false

    // Populate browse by options based on selected category
    const options = browseOptions[selectedCategory]
    options.forEach((option) => {
      const optionElement = document.createElement("option")
      optionElement.value = option.value
      optionElement.textContent = option.label
      browseBySelect.appendChild(optionElement)
    })
  } else {
    browseBySelect.disabled = true
  }
}

// Handle browse change
function handleBrowseChange() {
  // This function can be used for any additional logic when browse option changes
}

// Apply filters
function applyFilters() {
  const searchTerm = searchInput.value.toLowerCase().trim()
  const selectedCategory = categorySelect.value
  const selectedBrowseOption = browseBySelect.value

  let filteredCocktails = [...cocktails] // Create a copy of the original array

  // Filter by search term
  if (searchTerm) {
    filteredCocktails = filteredCocktails.filter(
      (cocktail) =>
        cocktail.name.toLowerCase().includes(searchTerm) ||
        cocktail.description.toLowerCase().includes(searchTerm)
    )
  }

  // Filter by category and browse option
  if (selectedCategory && selectedBrowseOption) {
    filteredCocktails = filteredCocktails.filter(
      (cocktail) =>
        cocktail.categories[selectedCategory] &&
        cocktail.categories[selectedCategory].includes(selectedBrowseOption)
    )
  }

  // Display filtered cocktails
  displayCocktails(filteredCocktails)
}

// Reset filters
function resetFilters() {
  // Clear search input
  searchInput.value = ""
  clearSearchBtn.style.display = "none"

  // Reset category select
  categorySelect.selectedIndex = 0

  // Clear and disable browse by select
  browseBySelect.innerHTML = '<option value="" disabled selected>Selaa</option>'
  browseBySelect.disabled = true

  // Display all cocktails
  displayCocktails(cocktails)
}

// Display cocktails
function displayCocktails(cocktailsToDisplay) {
  // Clear cocktail grid
  cocktailGrid.innerHTML = ""

  // Show/hide no results message
  if (cocktailsToDisplay.length === 0) {
    noResults.style.display = "block"
    noResults.textContent = "Ei tuloksia löydetty"
    return
  } else {
    noResults.style.display = "none"
  }

  // Group cocktails into rows of 4
  for (let i = 0; i < cocktailsToDisplay.length; i += 4) {
    const rowCocktails = cocktailsToDisplay.slice(i, i + 4)

    // Create row
    const row = document.createElement("div")
    row.className = "cocktail-row"

    // Add cocktails to row
    rowCocktails.forEach((cocktail) => {
      const cocktailItem = createCocktailItem(cocktail)
      row.appendChild(cocktailItem)
    })

    // Add row to grid
    cocktailGrid.appendChild(row)
  }
}

// Create cocktail item
function createCocktailItem(cocktail) {
  const item = document.createElement("div")
  item.className = "cocktail-item"

  item.innerHTML = `
        <a href="${cocktail.url}">
            <div class="cocktail-image-container">
                <img src="${cocktail.image}" alt="${cocktail.description}" class="cocktail-image">
            </div>
            <h3 class="cocktail-name">${cocktail.name}</h3>
            <p class="cocktail-description">${cocktail.description}</p>
        </a>
    `

  return item
}