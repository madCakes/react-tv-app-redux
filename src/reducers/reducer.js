const intiState = {
  watchlist: [],
  loading: true,
  showData: [],
  error: ""
};

const reducer = (state = intiState, action) => {
  switch (action.type) {
    case "ADD_SHOW":
      return {
        ...state,
        watchlist: [...state["watchlist"], action.payload],
      };

    case 'REMOVE_SHOW':
        return {
            ...state,
            watchlist: state["watchlist"].filter(s => s.id !== action.payload)
        }

        
    case 'SET_LOADING':
      
      return {
        ...state,
        loading: action.payload
      }

    case 'SET_ERROR':
      
      return {
        ...state,
        loading:false,
        error: action.payload
      }
          
    case 'LOAD_SHOWS':
      
      return {
        ...state,
        loading: false,
        showData: action.payload,
        error: ""
      }
      // will break entire app if not here (state = undefined)
    default:
      return state;
  }
};

export default reducer;
