import classes from './pagination.module.css';

function createItems(length, handleClick, activePage) {
  const items = [];

  for( let i = 1 ; i <= length; i++) {

    items.push(
      <li 
      className={`${classes.pagination_item}
        ${activePage === i ? classes.pagination_item_active: ''}`
      }
      onClick={handleClick(i)}
      key={i}
      >
        <span>{i}</span>
      </li>
      );
  }
  return items;
}

function Pagination(props) {
  const { len, handlePagination, activePage } = props;

  return (
    <div className={classes.pagination}>
      <ul className={classes.pagination_list}>
        { 
          createItems(len, handlePagination, activePage)
        }
      </ul>
    </div>
    
  )
}

export default Pagination;